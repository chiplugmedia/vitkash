const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+][0-9\s-]{6,14}$/;

/**
 * Validates the signup form fields.
 * `existingUsers` is an array of previously "registered" users (in-memory only)
 * used to flag duplicate email/phone, mirroring the original demo behaviour.
 * Returns an errors object keyed by field name; empty object means valid.
 */
export function validateSignup({ name, phone, email, password, confirm }, existingUsers = []) {
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = 'Enter your full name.';
  }
  if (!PHONE_RE.test(phone || '')) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (!EMAIL_RE.test((email || '').toLowerCase())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }
  if (!confirm || confirm !== password) {
    errors.confirm = 'Passwords do not match.';
  }

  if (!errors.email) {
    const emailTaken = existingUsers.some((u) => u.email === email.trim().toLowerCase());
    if (emailTaken) errors.email = 'An account with this email already exists.';
  }
  if (!errors.phone) {
    const phoneTaken = existingUsers.some((u) => u.phone === phone.trim());
    if (phoneTaken) errors.phone = 'An account with this phone number already exists.';
  }

  return errors;
}
