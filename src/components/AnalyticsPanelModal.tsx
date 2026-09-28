import React, { useState } from 'react';
import { 
  BarChart2, 
  Users, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Download, 
  RefreshCw, 
  X, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { analyticsService } from '../services/analyticsService';
import { AnalyticsData, BookingLead } from '../types';
import { useTheme } from '../context/ThemeContext';

interface AnalyticsPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AnalyticsData;
  onDataUpdate: () => void;
}

export const AnalyticsPanelModal: React.FC<AnalyticsPanelModalProps> = ({
  isOpen,
  onClose,
  data,
  onDataUpdate
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<'kpis' | 'leads' | 'sections' | 'sources'>('kpis');
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen) return null;

  const formatDuration = (totalSeconds: number, visits: number) => {
    if (visits === 0) return '0m 00s';
    const avg = Math.round(totalSeconds / visits);
    const mins = Math.floor(avg / 60);
    const secs = avg % 60;
    return `${mins}m ${secs.toString().padStart(2, '0')}s`;
  };

  const handleSimulateVisit = () => {
    analyticsService.trackSectionView('doble-diploma', 'Doble Diploma Mex-USA');
    analyticsService.logEvent('visit', 'Visita simulada desde Colegio Cumbres (Monterrey)');
    onDataUpdate();
  };

  const handleExportCsv = () => {
    const headers = ['Folio', 'Nombre', 'Cargo', 'Institución', 'Tipo', 'Matrícula', 'Correo', 'Teléfono', 'Ciudad', 'Formato', 'Fecha', 'Horario', 'Programas', 'Estado'];
    const rows = data.leads.map(lead => [
      lead.id,
      `"${lead.fullName.replace(/"/g, '""')}"`,
      `"${lead.role.replace(/"/g, '""')}"`,
      `"${lead.institutionName.replace(/"/g, '""')}"`,
      `"${lead.institutionType}"`,
      `"${lead.studentsCount}"`,
      `"${lead.email}"`,
      `"${lead.phone}"`,
      `"${lead.city}"`,
      `"${lead.meetingFormat}"`,
      `"${lead.preferredDate}"`,
      `"${lead.preferredTime}"`,
      `"${lead.selectedPrograms.join('; ')}"`,
      `"${lead.status}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Prospectos_Directivos_E2Square_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  const handleStatusChange = (leadId: string, newStatus: BookingLead['status']) => {
    analyticsService.updateLeadStatus(leadId, newStatus);
    onDataUpdate();
  };

  const handleReset = () => {
    if (window.confirm('¿Desea restablecer las estadísticas del panel analítico a los valores por defecto?')) {
      analyticsService.resetToDefault();
      onDataUpdate();
    }
  };

  return (
    <div
      id="analytics-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="analytics-modal-dialog"
        className={`border rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 ${
          isDark 
            ? 'bg-[#182337] border-slate-700/80 text-white shadow-black/60' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-900/15'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isDark ? 'border-slate-700/80 bg-[#141d2e]' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-500 flex items-center justify-center">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  Panel de Analítica y Monitoreo Institucional
                </h3>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  En Vivo
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Seguimiento de visitas directivas, interés en programas y solicitudes de llamada
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateVisit}
              title="Simular nueva visita directiva para probar interactividad"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                isDark 
                  ? 'text-slate-300 bg-slate-800 hover:bg-slate-700 border-slate-700' 
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-300'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-500" />
              <span>Simular Visita</span>
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border-slate-700' 
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`px-6 border-b flex gap-2 overflow-x-auto text-xs font-medium ${
          isDark ? 'border-slate-700/80 bg-slate-900/60' : 'border-slate-100 bg-slate-50/70'
        }`}>
          <button
            onClick={() => setActiveTab('kpis')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'kpis'
                ? isDark 
                  ? 'border-amber-400 text-amber-300 font-bold' 
                  : 'border-amber-500 text-amber-900 font-bold'
                : isDark 
                  ? 'border-transparent text-slate-400 hover:text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Métricas Principales
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-3 px-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'leads'
                ? isDark 
                  ? 'border-amber-400 text-amber-300 font-bold' 
                  : 'border-amber-500 text-amber-900 font-bold'
                : isDark 
                  ? 'border-transparent text-slate-400 hover:text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Llamadas Agendadas</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              isDark ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-100 text-amber-900'
            }`}>
              {data.leads.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'sections'
                ? isDark 
                  ? 'border-amber-400 text-amber-300 font-bold' 
                  : 'border-amber-500 text-amber-900 font-bold'
                : isDark 
                  ? 'border-transparent text-slate-400 hover:text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Interés por Solución
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'sources'
                ? isDark 
                  ? 'border-amber-400 text-amber-300 font-bold' 
                  : 'border-amber-500 text-amber-900 font-bold'
                : isDark 
                  ? 'border-transparent text-slate-400 hover:text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Dispositivos y Orígenes
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: KPIS OVERVIEW */}
          {activeTab === 'kpis' && (
            <div className="space-y-6">
              {/* Primary KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`flex items-center justify-between text-xs mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span>Visitas Totales</span>
                    <BarChart2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className={`text-2xl font-bold font-serif-display ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {data.totalVisits.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-500 mt-1 flex items-center gap-1">
                    <span>↑ +14.2%</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>vs semana anterior</span>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`flex items-center justify-between text-xs mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span>Visitantes Únicos</span>
                    <Users className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className={`text-2xl font-bold font-serif-display ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {data.uniqueVisitors.toLocaleString()}
                  </div>
                  <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Colegios y directivos distintos
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`flex items-center justify-between text-xs mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span>Tiempo Promedio</span>
                    <Clock className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className={`text-2xl font-bold font-serif-display ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {formatDuration(data.totalTimeSpentSeconds, data.totalVisits)}
                  </div>
                  <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Alta permanencia de lectura
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`flex items-center justify-between text-xs mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span>Llamadas Solicitadas</span>
                    <Calendar className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className={`text-2xl font-bold font-serif-display ${
                    isDark ? 'text-amber-300' : 'text-amber-600'
                  }`}>
                    {data.conversionCount}
                  </div>
                  <div className="text-[11px] text-amber-500 mt-1">
                    {((data.conversionCount / (data.uniqueVisitors || 1)) * 100).toFixed(1)}% tasa de conversión
                  </div>
                </div>
              </div>

              {/* Top Sections Snapshot & Recent Events */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Popular Solutions Snapshot */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Soluciones Más Consultadas por Rectores
                  </h4>
                  <div className="space-y-3">
                    {Object.values(data.sections)
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 5)
                      .map((sec) => (
                        <div key={sec.sectionId} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className={`truncate pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {sec.sectionName}
                            </span>
                            <span className={`font-mono shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {sec.views} vistas
                            </span>
                          </div>
                          <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                            isDark ? 'bg-slate-800' : 'bg-slate-200'
                          }`}>
                            <div 
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: `${Math.min(100, (sec.views / (data.totalVisits || 1)) * 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Registro de Actividad en Tiempo Real
                  </h4>
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {data.recentEvents.slice(0, 7).map((evt) => (
                      <div 
                        key={evt.id} 
                        className={`p-2.5 rounded-xl border flex items-start justify-between gap-3 text-xs ${
                          isDark 
                            ? 'bg-slate-950/70 border-slate-800/80 text-slate-300' 
                            : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                            evt.type === 'booking' ? 'bg-amber-400' : 'bg-blue-400'
                          }`} />
                          <span className="leading-snug">{evt.description}</span>
                        </div>
                        <span className={`text-[10px] whitespace-nowrap ${
                          isDark ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          {evt.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: LEADS & MEETINGS */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    Directorio de Solicitudes de Sesión
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Prospectos directivos registrados para el ciclo escolar 2026
                  </p>
                </div>
                <button
                  onClick={handleExportCsv}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar a CSV / Excel</span>
                </button>
              </div>

              {copiedNotification && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Archivo CSV generado y descargado correctamente.</span>
                </div>
              )}

              <div className={`overflow-x-auto rounded-2xl border ${
                isDark ? 'border-slate-700/80' : 'border-slate-200 shadow-sm'
              }`}>
                <table className="w-full text-left text-xs">
                  <thead className={`border-b ${
                    isDark ? 'bg-slate-950/80 text-slate-400 border-slate-800' : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}>
                    <tr>
                      <th className="p-3 font-semibold">Directivo & Colegio</th>
                      <th className="p-3 font-semibold">Contacto</th>
                      <th className="p-3 font-semibold">Programas de Interés</th>
                      <th className="p-3 font-semibold">Modalidad / Fecha</th>
                      <th className="p-3 font-semibold">Estado</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${
                    isDark ? 'divide-slate-800/80 bg-slate-900/40' : 'divide-slate-100 bg-white'
                  }`}>
                    {data.leads.map((lead) => (
                      <tr key={lead.id} className={isDark ? "hover:bg-slate-800/40 transition-colors" : "hover:bg-slate-50 transition-colors"}>
                        <td className="p-3">
                          <div className={`font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{lead.fullName}</div>
                          <div className={`text-[11px] ${isDark ? 'text-amber-300' : 'text-amber-700 font-medium'}`}>{lead.role}</div>
                          <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{lead.institutionName} • {lead.city}</div>
                        </td>
                        <td className="p-3">
                          <div className={isDark ? 'text-slate-200' : 'text-slate-800'}>{lead.email}</div>
                          <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>{lead.phone}</div>
                        </td>
                        <td className="p-3 max-w-xs">
                          <div className="flex flex-wrap gap-1">
                            {lead.selectedPrograms.map((prog, idx) => (
                              <span key={idx} className={`text-[10px] px-1.5 py-0.5 rounded border truncate max-w-[180px] ${
                                isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}>
                                {prog}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <div className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{lead.meetingFormat}</div>
                          <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{lead.preferredDate} ({lead.preferredTime})</div>
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                            className={`text-[11px] font-semibold px-2 py-1 rounded-lg border focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                              isDark 
                                ? 'bg-slate-950 border-slate-700 text-white' 
                                : 'bg-white border-slate-300 text-slate-800'
                            }`}
                          >
                            <option value="Pendiente">Pendiente</option>
                            <option value="Confirmada">Confirmada</option>
                            <option value="En seguimiento">En seguimiento</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SECTIONS BREAKDOWN */}
          {activeTab === 'sections' && (
            <div className="space-y-4">
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Métricas detalladas de navegación y tiempo de permanencia por solución educativa:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(data.sections).map((sec) => (
                  <div key={sec.sectionId} className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-slate-900/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className={`font-bold text-xs sm:text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {sec.sectionName}
                      </div>
                      <span className={`text-xs font-mono font-semibold ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>
                        {sec.views} vistas
                      </span>
                    </div>
                    <div className={`flex justify-between text-[11px] mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span>Tiempo acumulado: {Math.round(sec.timeSpentSeconds / 60)} min</span>
                      <span>Promedio: {Math.round(sec.timeSpentSeconds / (sec.views || 1))} seg/visita</span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-amber-400 rounded-full"
                        style={{ width: `${Math.min(100, (sec.views / (data.totalVisits || 1)) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DEVICES & SOURCES */}
          {activeTab === 'sources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Devices */}
              <div className={`p-5 rounded-2xl border ${
                isDark ? 'bg-slate-900/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Distribución por Dispositivo
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <Monitor className="w-4 h-4 text-blue-500" />
                      <span>Computadora de Escritorio (Desktop)</span>
                    </div>
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.devices.desktop}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${data.devices.desktop}%` }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <Smartphone className="w-4 h-4 text-amber-500" />
                      <span>Teléfono Móvil (Smartphones)</span>
                    </div>
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.devices.mobile}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${data.devices.mobile}%` }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <Tablet className="w-4 h-4 text-purple-500" />
                      <span>Tablets (iPad & Android)</span>
                    </div>
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.devices.tablet}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${data.devices.tablet}%` }} />
                  </div>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className={`p-5 rounded-2xl border ${
                isDark ? 'bg-slate-900/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Fuentes de Tráfico Institucional
                </h4>
                <div className="space-y-4 text-xs">
                  <div>
                    <div className={`flex justify-between mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <span>Acceso Directo (www.e2-square.com)</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.sources.direct}%</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${data.sources.direct}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className={`flex justify-between mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <span>Correo Institucional a Rectoría</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.sources.institutionalEmail}%</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${data.sources.institutionalEmail}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className={`flex justify-between mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <span>Recomendación entre Colegios / AMPEI</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.sources.referral}%</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${data.sources.referral}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className={`flex justify-between mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      <span>Búsqueda Orgánica Educativa</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{data.sources.organic}%</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${data.sources.organic}%` }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-3.5 border-t flex items-center justify-between text-xs ${
          isDark ? 'border-slate-700/80 bg-[#141d2e]' : 'border-slate-100 bg-slate-50'
        }`}>
          <button
            onClick={handleReset}
            className={`underline text-[11px] ${isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Restablecer panel analítico
          </button>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isDark 
                ? 'text-slate-200 bg-slate-800 hover:bg-slate-700 border-slate-700' 
                : 'text-slate-700 bg-white hover:bg-slate-100 border-slate-300 shadow-sm'
            }`}
          >
            Cerrar Panel
          </button>
        </div>

      </div>
    </div>
  );
};
