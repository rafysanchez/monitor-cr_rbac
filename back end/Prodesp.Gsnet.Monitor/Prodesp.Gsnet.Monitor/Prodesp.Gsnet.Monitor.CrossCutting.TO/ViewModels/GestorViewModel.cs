using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodesp.Gsnet.Monitor.CrossCutting.TO.ViewModels
{
    public class GestorViewModel
    {
        public int Id
        {
            get;

            set;
        }
        public int IdGsnet { get; set; }
        public string Nome { get; set; }
        public string Sigla { get; set; }
        public DateTime? DataFimVigencia
        {
            get;

            set;
        }

        public DateTime DataInicioVigencia
        {
            get;

            set;
        }

        public string FlagAtivo
        {
            get;

            set;
        }
    }
}
