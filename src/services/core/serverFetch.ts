"use server";
import { getUserToken } from "./session";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeader = async () => {
  const token = await getUserToken();
  const header = token
    ? {
        authorization: `Bearer ${token} `,
      }
    : {};
  return header;
};

export async function serverFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T | null> {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();

      throw new Error(`Server returned ${res.status}: ${errorText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// export const protectedFetch = async (path: string) => {
//   const res = await fetch(`${baseUrl}${path}`, {
//     headers : await authHeader(),
//   });

//   return res.json();
// };
