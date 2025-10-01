export function formatAndValidateEmail(email: string): { value: string; isValid: boolean } {
  if (typeof email !== 'string') return { value: '', isValid: false };
  const cleaned = email.trim().toLowerCase();
  const isValid = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(cleaned);
  return {
    value: cleaned,
    isValid
  };
}
