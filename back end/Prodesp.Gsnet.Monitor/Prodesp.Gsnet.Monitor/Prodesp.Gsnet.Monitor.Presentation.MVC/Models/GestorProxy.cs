using Newtonsoft.Json;
using Prodesp.Gsnet.Monitor.CrossCutting.TO.ViewModels;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Prodesp.Gsnet.Monitor.Presentation.MVC.Models
{
    public class GestorProxy
    {
        public readonly string AccessToken;
        public static string BASE_API_URL = ConfigurationManager.AppSettings.Get("Url.ApiMonitor");
        public GestorProxy(string accessToken)
        {
            this.AccessToken = accessToken;
        }

        public GestorViewModel BuscarPorCodigoGsnet(int codigoGestorGsnet)
        {
            RestClient client = new RestClient(BASE_API_URL + "gestor");
            var request = new RestRequest("buscarPorCodigoGsnet/{id}", Method.GET);
            request.AddUrlSegment("id", codigoGestorGsnet.ToString());
            request.AddHeader("Accept", "application/json");
            request.AddHeader("Content-Type", "application/json");
            request.AddHeader("AccessToken", this.AccessToken);
            var response = client.Execute(request);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                return JsonConvert.DeserializeObject<GestorViewModel>(response.Content);
            return null;
        }
    }
}