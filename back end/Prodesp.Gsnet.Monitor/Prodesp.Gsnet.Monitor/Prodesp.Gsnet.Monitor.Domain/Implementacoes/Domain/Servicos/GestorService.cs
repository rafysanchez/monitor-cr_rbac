using Prodesp.Gsnet.Monitor.Domain.Entidades;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Domain.Servicos;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Infra.Data.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodesp.Gsnet.Monitor.Domain.Implementacoes.Domain.Servicos
{
    public class GestorService : ServiceBase<Gestor, IGestorRepository>, IGestorService
    {
        public GestorService(IGestorRepository repository) : base(repository)
        {
        }

        public Gestor BuscarPorCodigoGsnet(int idGsnet)
        {
            return this._repository.BuscarPorCodigoGsnet(idGsnet);
        }
    }
}
