import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, hassedPassword) {
  const isValid = await compare(password, hassedPassword);
  return isValid;
}

export { hashPassword, verifyPassword };
