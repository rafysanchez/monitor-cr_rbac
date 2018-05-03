using Ninject.Extensions.Interception.Infrastructure.Language;
using Ninject.Modules;
using Prodesp.Core.Audity;

namespace Prodesp.Gsnet.Monitor.CrossCutting.IoC.Modules
{
    public class InfraModule : NinjectModule
    {
        public override void Load()
        {
            
             Kernel.Intercept(context => false).With(new ExceptionLogger());
             // Kernel.AddFacility<TypedFactoryFacility>();
            // Bind(typeof(ARepository<>)).To(typeof(EFRepositorioBase<>)).InSingletonScope();
            //Bind<IUnitOfWork>().To<EFUnitOfWork>().in();

        }
    }
   
}
