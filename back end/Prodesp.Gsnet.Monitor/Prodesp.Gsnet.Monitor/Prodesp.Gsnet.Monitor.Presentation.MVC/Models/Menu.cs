using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prodesp.Gsnet.Monitor.Presentation.MVC.Models
{  
    public partial class MenuMonitor
    {
        [JsonProperty("descricao")]        
        public string Titulo { get; set; }

        [JsonProperty("icon")]
        public string CdIcon { get; set; }

        [JsonProperty("ordem")]
        public long NrOrdem { get; set; }

        [JsonProperty("link")]
        public string Url { get; set; }

        [JsonProperty("subMenus")]
        public object[] Menus { get; set; }
    }
    public partial class MenuRBAC
    {
        public string Titulo { get; set; }

        public string CdIcon { get; set; }

        public long NrOrdem { get; set; }

        public string Url { get; set; }

        public object[] Menus { get; set; }
    }
}