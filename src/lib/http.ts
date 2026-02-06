type FetchOptions = RequestInit & {
  timeout?: number;
};

export async function http<T>(
  url: string,
  options?: FetchOptions
): Promise<T> {
  const controller = new AbortController();
  const timeout = options?.timeout ?? 10_000;

  const id = setTimeout(() => controller.abort(), timeout);

  try {
        const response = await fetch(url, {
        ...options,
        headers: {
            Accept: "application/json",
            ...(options?.headers || {}),
        },
        signal: controller.signal,
        });


    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      throw new Error("Request timeout");
    }
    throw error;
  } finally {
    clearTimeout(id);
  }
}
