﻿using System.Web;
using System.Web.Mvc;

namespace Prodesp.Gsnet.Monitor.Presentation.WebApi
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
