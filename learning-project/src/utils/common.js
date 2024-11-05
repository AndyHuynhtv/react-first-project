export function truncateText(text, length) {
  if (!text) return "";
  return `${text.slice(0, length)} ...`;
}
