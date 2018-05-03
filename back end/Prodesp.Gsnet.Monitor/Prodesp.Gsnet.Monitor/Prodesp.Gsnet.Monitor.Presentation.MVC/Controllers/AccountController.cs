using System;
using System.Web;
using System.Web.Mvc;
using System.Linq;
using Prodesp.Gsnet.Rbac20.Presentation.Mvc.Controllers;
using Newtonsoft.Json;
using Prodesp.Gsnet.Framework;
using Prodesp.Gsnet.Rbac20.Presentation.Login.Extension.Mvc.Context;
using Prodesp.Gsnet.Monitor.Presentation.MVC.Models;
using Prodesp.Gsnet.Monitor.CrossCutting.TO.ViewModels;

namespace Prodesp.Gsnet.Monitor.Presentation.MVC.Controllers
{
    public class AccountController : RbacMvcLoginController
    {
        public ActionResult Login()
        {
            return base.InternalLogin();
        }
        [HttpPost]
        public virtual ActionResult Callback(string accessToken)
        {
            var url = Url.Action("Index", "Home", new { area = "" });
            var redir = RedirectToAction("Index", "Home", new { area = "" });
            var user = FromToken(accessToken, true, HelperSettings.ReadString("System.ClientSecret"));
            var cdParametroJustificador = HelperSettings.ReadString("Rbac.Usuario.Parametro.TipoUsuario");
            var contexto = new LocalContext(user);
            var idJustificador = 0;
            var parameterResult = Rbac20.Presentation.Proxy.UsuarioProxy.PesquisarParametros(contexto, user.Login.IdUsuario);
            if (parameterResult != null && parameterResult.Data != null && parameterResult.Data.Any())
            {
                var parameters = parameterResult.Data.FirstOrDefault().Parametros;
                if (parameters != null)
                {
                    idJustificador = HelperConvert.ToInt(parameters.FirstOrDefault(w => w.Parametro != null && w.Parametro.CdParametro == cdParametroJustificador)?.Valor);
                }
            }
            if (idJustificador == 0)
            {
                var msg = $"O identificador do justificador com Parâmetro {cdParametroJustificador} não foi especificado para o usuário {user.Nome}!";
                return this.RedirectToAction("Warn", "Warning", new { id = 401, status = msg });
                //throw new UnauthorizedAccessException(msg);
            }

            // 1: Farmacia, 2: CAF e 3: Compras
            var farmacia = idJustificador != 1 ? null : user.Departamentos.FirstOrDefault();
            var menus = GetMenusJSON(user);
            var gestorMonitor = this.BuscarGestorMonitor(user.AccessToken, farmacia?.Departamento?.CdExterno);

            this.CriarCookiesAcesso(JsonConvert.SerializeObject(new { Login = user.Login.Login, Nome = user.Nome, IdJustificador = idJustificador, IdFarmacia = gestorMonitor?.Id }), user.AccessToken);
            this.CriarCookieMenus(menus);
            return base.Callback(user.AccessToken, redir, url);

        }
        GestorViewModel BuscarGestorMonitor(string accessToken, string codigoGsnet)
        {
            var idGestorGsnet = Prodesp.Gsnet.Framework.HelperConvert.ToInt(codigoGsnet);
            if (idGestorGsnet <= 0)
            {
                return null;
            }
            GestorProxy proxy = new GestorProxy(accessToken);
            return proxy.BuscarPorCodigoGsnet(idGestorGsnet);
        }

        [HttpGet]
        public ActionResult SignOut()
        {
            this.LimparCookies();
            return base.SignOut(RedirectToAction("Login", "Account", null));
        }
        protected void CriarCookiesAcesso(string dadosUsuario, string accessToken)
        {
            HttpCookie cookieAccessToken = new HttpCookie("accessToken", accessToken);
            HttpCookie cookieUsuario = new HttpCookie("usuario", dadosUsuario);

            cookieAccessToken.Expires = DateTime.Now.AddHours(1);
            cookieUsuario.Expires = DateTime.Now.AddHours(1);
            Response.Cookies.Add(cookieAccessToken);
            Response.Cookies.Add(cookieUsuario);
        }
        protected void CriarCookieMenus(string menus)
        {
            HttpCookie menusCookie = new HttpCookie("menus", menus);
            menusCookie.Expires = DateTime.Now.AddHours(1);
            Response.Cookies.Add(menusCookie);
        }
        protected void LimparCookies()
        {
            #region [ Recupera os cookies ]
            // remove o cookie associado ao LOGIN
            // recupera o cookie que armazena o accessToken
            var accessTokenCookie = new HttpCookie("accessToken", "");

            // recupera o cookie do rbac
            var rbacCookie = new HttpCookie(".AUTH_COOKIE_RBAC_LOGIN", "");

            // recupera o cookie dos dados do usuario
            var usuarioCookie = new HttpCookie("usuario", "");

            // recupera os cookie de menu
            var menusCookie = new HttpCookie("menus", "");
            #endregion

            #region [ Marca todos os cookies como expirados ] 

            menusCookie.Expires = DateTime.Now.AddDays(-14);
            usuarioCookie.Expires = DateTime.Now.AddDays(-14);
            rbacCookie.Expires = DateTime.Now.AddDays(-14);
            accessTokenCookie.Expires = DateTime.Now.AddDays(-14); 
            #endregion

            Response.Cookies.Add(rbacCookie);
            Response.Cookies.Add(menusCookie);
            Response.Cookies.Add(accessTokenCookie);           
            Response.Cookies.Add(usuarioCookie);
        }
    }
}

