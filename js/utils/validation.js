export function isValidName(name) {
  const trimmed = name.trim();
  const regex = /^[A-Za-z0-9_]{3,15}$/;

  if (!regex.test(trimmed)) {
    return {
      valid: false,
      message:
        "Name must be 3-15 characters using letters, numbers, and underscores.",
    };
  }

  return { valid: true, message: "" };
}

export function isValidEmail(email) {
  const trimmed = email.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(trimmed)) {
    return {
      valid: false,
      message: "Please enter a valid email adress.",
    };
  }

  if (!trimmed.toLowerCase().endsWith("@stud.noroff.no")) {
    return {
      valid: false,
      message: "Only 'stud.noroff.no' emails are allowed to register.",
    };
  }

  return { valid: true, message: "" };
}

export function isValidPassword(password) {
  const trimmed = password.trim();

  if (trimmed.length < 8) {
    return {
      valid: false,
      message: "Password must be at least 8 characters long.",
    };
  }

  return { valid: true, message: "" };
}
