import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청을 보내기 전에 요청 인터셉터를 사용하여 memberId를 헤더에 추가
instance.interceptors.request.use(
  (config) => {
    const memberId = 1; // 여기에 멤버 아이디를1로 설정한거임
    config.headers['memberId'] = memberId;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}
