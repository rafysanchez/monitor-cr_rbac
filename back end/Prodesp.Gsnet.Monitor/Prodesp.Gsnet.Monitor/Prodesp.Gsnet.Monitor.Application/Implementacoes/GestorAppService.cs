using Prodesp.Gsnet.Monitor.Application.Interfaces;
using Prodesp.Gsnet.Monitor.Domain.Entidades;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Domain.Servicos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Prodesp.Gsnet.Monitor.Domain.Validacoes;

namespace Prodesp.Gsnet.Monitor.Application.Implementacoes
{
    public class GestorAppService : AppService<Gestor, IGestorService>, IGestorAppService
    {
        public GestorAppService(IGestorService service) : base(service)
        {
        }

        public Gestor BuscarPorCodigoGsnet(int idGsnet)
        {
            return this._service.BuscarPorCodigoGsnet(idGsnet);
        }

        public override ValidationResult ValidarAdicicao(Gestor entity)
        {
            throw new NotImplementedException();
        }

        public override ValidationResult ValidarAtualizacao(Gestor entity)
        {
            throw new NotImplementedException();
        }

        public override ValidationResult ValidarRemocao(Gestor entity)
        {
            throw new NotImplementedException();
        }
    }
}
