// Convierte un timestamp en una fecha legible para mostrar.
export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString();
};
