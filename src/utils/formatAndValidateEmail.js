export function formatAndValidateEmail(email) {
  if (typeof email !== 'string') return '';
  const cleaned = email.trim().toLowerCase();
  const isValid = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(cleaned);
  return {
    value: cleaned,
    isValid
  };
}
