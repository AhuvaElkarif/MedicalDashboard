export const getStatusConfig = (status: string) => {
  const statusConfigs: Record<string, { background: string; color: string }> = {
    'בטיפול': { background: '#e3e9fd', color: '#90a4ae' },
    'נדחתה': { background: '#f8d7da', color: '#90a4ae' },
    'אושרה': { background: '#d4edda', color: '#90a4ae' },
    'מושהה': { background: '#fff9c4', color: '#90a4ae' },
    default: { background: '#e3e9fd', color: '#90a4ae' },
  };
  
  return statusConfigs[status] || statusConfigs.default;
};

export const getMessageCount = (row: any): number => {
  return row.status === "בטיפול" ? 1 : 0;
};