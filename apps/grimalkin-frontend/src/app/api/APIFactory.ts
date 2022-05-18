import { environment } from '../../environments/environment';

export const APIFactory =
  (baseUrl: string) =>
  (resource?: RequestInfo, options: RequestInit | undefined = undefined) => {
    return fetch(
      `${environment.api_path}${baseUrl}${resource?.toString() || ''}`,
      options
    );
  };
