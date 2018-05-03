using Prodesp.Gsnet.Monitor.Application.Interfaces;
using Prodesp.Gsnet.Monitor.CrossCutting.TO.ViewModels;
using Prodesp.Gsnet.Monitor.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.CrossCutting;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Infra.Data;

namespace Prodesp.Gsnet.Monitor.Presentation.WebApi.Controllers
{

    public class GestorController : BaseController<Gestor, GestorViewModel, IGestorAppService>
    {
        public GestorController(IGestorAppService service, IEntityTypeConverter<Gestor, GestorViewModel> entityConverter, IUnitOfWork unitOfWork) : base(service, entityConverter, unitOfWork)
        {
        }
        [HttpGet]
        [Route("api/gestor/buscarPorCodigoGsnet/{id}")]
        public HttpResponseMessage BuscarPorCodigoGsnet(int id)
        {
            var gestor = this._service.BuscarPorCodigoGsnet(id);
            if (gestor == null)
                return NotFound("Gestor não encontrado");
            return OK(this._entityConverter.ToViewModel(gestor));
        }
    }
}
