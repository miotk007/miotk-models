/**
 * Framework-free validation shared by the client forms and the API route, so
 * the rules live in exactly one place. Returns a map of field -> error message;
 * an empty map means valid.
 */

export type Errors<T> = Partial<Record<keyof T, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface OpenCallInput {
  name: string;
  email: string;
  city: string;
  instagram: string;
  height: string;
  age: string;
}

export interface BookInput {
  brand: string;
  email: string;
  scope: string;
  timing: string;
  message: string;
}

export function validateOpenCall(v: OpenCallInput): Errors<OpenCallInput> {
  const e: Errors<OpenCallInput> = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!EMAIL.test(v.email)) e.email = "Enter a valid email.";
  if (!v.city.trim()) e.city = "Where are you based?";
  if (v.height && !/^\d{2,3}$/.test(v.height.trim()))
    e.height = "Height in cm, e.g. 186.";
  if (v.age && !/^\d{1,2}$/.test(v.age.trim())) e.age = "Enter a valid age.";
  return e;
}

export function validateBook(v: BookInput): Errors<BookInput> {
  const e: Errors<BookInput> = {};
  if (!v.brand.trim()) e.brand = "Tell us the brand or company.";
  if (!EMAIL.test(v.email)) e.email = "Enter a valid email.";
  if (!v.message.trim() || v.message.trim().length < 10)
    e.message = "A sentence or two about the project.";
  return e;
}

export function isEmpty<T>(errors: Errors<T>): boolean {
  return Object.keys(errors).length === 0;
}
