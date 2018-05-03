using Prodesp.Gsnet.Monitor.Domain.Entidades;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Infra.Data.Repositorios;
using Prodesp.Gsnet.Monitor.Infra.Data.EF.Implementacoes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Infra.Data;

namespace Prodesp.Gsnet.Monitor.Infra.Data.Repository
{
    public class GestorRepository : EFRepository<Gestor>, IGestorRepository
    {
        public GestorRepository(IUnitOfWork uow) : base(uow)
        {
        }

        public Gestor BuscarPorCodigoGsnet(int idGsnet)
        {
            return this.Buscar(x => x.IdGsnet == idGsnet && x.FlagAtivo == "S").FirstOrDefault();                
        }
    }
}
