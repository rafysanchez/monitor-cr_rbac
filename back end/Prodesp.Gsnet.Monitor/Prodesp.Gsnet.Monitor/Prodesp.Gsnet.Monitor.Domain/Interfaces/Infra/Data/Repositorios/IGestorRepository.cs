using Prodesp.Gsnet.Monitor.Domain.Entidades;
using Prodesp.Gsnet.Monitor.Domain.Interfaces.Infra.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodesp.Gsnet.Monitor.Domain.Interfaces.Infra.Data.Repositorios
{
    public interface IGestorRepository : IRepository<Gestor>
    {
        Gestor BuscarPorCodigoGsnet(int idGsnet);
    }
}
