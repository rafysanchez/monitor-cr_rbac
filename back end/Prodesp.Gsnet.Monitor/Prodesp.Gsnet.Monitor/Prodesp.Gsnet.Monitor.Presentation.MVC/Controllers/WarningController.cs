using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Prodesp.Gsnet.Monitor.Presentation.MVC.Controllers
{
    public class WarningController : Controller
    {
        // GET: Warning
        public ActionResult Warn(int id, string status)
        {
            TempData["status"] = status;
            return View("UnAuthorizedAccess");
        }
    }
}