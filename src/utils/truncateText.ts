export function truncateText(
  text: string | null,
  maxLength: number = 320
): string {
  if (!text) {
    return '';
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + '...';
}
