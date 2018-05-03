using Prodesp.Gsnet.Monitor.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodesp.Gsnet.Monitor.Infra.Data.EF.Configurations
{
    public class IndicadoresMonitoramentoConfiguration : EntityTypeConfiguration<IndicadoresMonitoramento>
    {
        public IndicadoresMonitoramentoConfiguration()
        {
            HasKey(x => new { x.IdProgramaSaude, x.DataMonitoramento, x.NomePrograma });
            Property(x => x.IdProgramaSaude).HasColumnName("ID_PROGRAMA");
            Property(x => x.IdGestorMonitor).HasColumnName("ID_GESTOR");
            Property(x => x.DataMonitoramento).HasColumnName("DT_MONITORAMENTO");
            Property(x => x.NomePrograma).HasColumnName("NM_PROGRAMA");
            Property(x => x.QuantidadeAlertas).HasColumnName("QT_ALERTAS");
            Property(x => x.QuantidadeAlertasItens).HasColumnName("QT_ALERTAS_ITENS");
            Property(x => x.QuantidadeAlertasItensGestor).HasColumnName("QT_ALERTAS_ITENS_GESTOR");
            Property(x => x.QuantidadeItens).HasColumnName("QT_ITENS");
            Property(x => x.JustificativasPendentes).HasColumnName("QT_PENDENTES");
            Property(x => x.TipoConsumoSaldoZerado).HasColumnName("TP_CONSUMO_SALDO_ZERADO");
            Property(x => x.TipoConsumoAutonomia).HasColumnName("TP_CONSUMO_AUTONOMIA");
            ToTable("VW_MON_INDICADORES");
        }
    }
}
