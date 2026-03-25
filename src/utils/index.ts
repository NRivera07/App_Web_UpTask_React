export const statusTranslations: { [key: string]: string } = {
  pending: "Pendiente",
  onHold: "En espera",
  inPorgress: "En progreso",
  underReview: "En revisión",
  completed: "Completado",
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(date);
}
