import 'server-only';

import type { APIResponse } from '@/app/_types/Response';

export async function ServerFetch<TRes, TBody = undefined>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string,
  body?: TBody | undefined,
  token?: string | undefined,
  cache?: RequestCache | undefined,
  next?: NextFetchRequestConfig | undefined
): Promise<APIResponse<TRes>> {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US',
    'Access-Control-Allow-Origin': '*',
  };
  if (token) {
    Object.assign(headers, { Authorization: `Bearer ${token}` });
  }
  const res = await fetch(path, {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
    ...(cache && { cache }),
    ...(next && { next }),
  });

  const result: APIResponse<TRes> = await res.json();
  if (result.code >= 400) {
    throw new Error(result.message as string);
  }
  return result;
}
