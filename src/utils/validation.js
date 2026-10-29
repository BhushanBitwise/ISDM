// ============================================================
// ISDM — FORM VALIDATION UTILITY
// ============================================================

export function validateEnquiryForm(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  if (!values.phone || !/^[\d\s\+\-\(\)]{7,15}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.program) {
    errors.program = 'Please select a program of interest.';
  }

  if (!values.consent) {
    errors.consent = 'Please agree to the privacy notice to proceed.';
  }

  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
