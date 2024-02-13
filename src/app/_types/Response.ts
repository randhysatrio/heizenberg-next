export type APIResponse<T> = {
  code: number;
  message: string | null;
  data: T;
};
