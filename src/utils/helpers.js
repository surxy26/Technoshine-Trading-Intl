export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getExcerpt(text, max = 120) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max)}...` : text;
}