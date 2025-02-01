import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CryptoJS from "crypto-js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const encryptPassword = (password: string): string => {
  const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  return hashedPassword;
};