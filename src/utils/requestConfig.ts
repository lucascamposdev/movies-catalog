type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestConfig = {
  method: RequestMethod;
  headers: Record<string, string>;
  body?: string;
  signal?: AbortSignal
};

const requestConfig = (
  method: RequestMethod,
  token: string | null = null,
  signal: AbortSignal,
  data: any = null,
): RequestConfig => {
    
  let config: RequestConfig = {
    method,
    headers: {},
  };

  if (method === 'DELETE' || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if(signal){
    config.signal = signal
  }

  return config;
};

export default requestConfig;
