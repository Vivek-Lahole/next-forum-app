import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS!) || 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateHash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
}

export async function validateUser(
  password: string,
  passwordHash: string
): Promise<Boolean> {
  const result = await bcrypt.compare(password, passwordHash);
  return result;
}
