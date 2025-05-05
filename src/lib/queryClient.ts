import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Helper to check if response is OK and throw appropriate error if not
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Simple fetch wrapper for external API requests
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
  });

  await throwIfResNotOk(res);
  return res;
}

// Generic query function for fetching data from external APIs
export const externalQueryFn: QueryFunction = 
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string);
    
    await throwIfResNotOk(res);
    return await res.json();
  };

// Configure React Query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: externalQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
    mutations: {
      retry: false,
    },
  },
});
