import 'client-only';

import { getCookie } from 'cookies-next';

import { COOKIE_TOKEN_NAME } from '@/app/_config/constanst';

import type { APIResponse } from '@/app/_types/Response';

export async function clientFetch<TRes, TBody = undefined>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string,
  body?: TBody | undefined,
  cache?: RequestCache | undefined
): Promise<APIResponse<TRes>> {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US',
    'Access-Control-Allow-Origin': '*',
  };
  const token = getCookie(COOKIE_TOKEN_NAME, { path: '/' });
  if (token) {
    Object.assign(headers, { Authorization: `Bearer ${token}` });
  }
  const res = await fetch(path, {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
    ...(cache && { cache }),
  });

  const result: APIResponse<TRes> = await res.json();
  if (result.code >= 400) {
    throw new Error(result.message as string);
  }
  return result;
}
