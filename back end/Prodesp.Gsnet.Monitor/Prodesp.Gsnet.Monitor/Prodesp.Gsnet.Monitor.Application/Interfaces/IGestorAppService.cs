using Prodesp.Gsnet.Monitor.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodesp.Gsnet.Monitor.Application.Interfaces
{
    public interface IGestorAppService : IAppService<Gestor>
    {
        Gestor BuscarPorCodigoGsnet(int idGsnet);
    }
}
