using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Prodesp.Gsnet.Monitor.Presentation.MVC.Controllers
{
    public class ErrorHandlerController : Controller
    {
        public ErrorHandlerController()
        {
           

        }
        public ActionResult HandleError(int id, string status)
        {
            TempData["status"] = status;
            if (id.Equals(401)) return View("UnAuthorizedAccess");
            if (id.Equals(404)) return View("NotFound");
            return View("InternalServerError");
        }
    }
}