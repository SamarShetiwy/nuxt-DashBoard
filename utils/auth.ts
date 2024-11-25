export const getAccessToken = () => {
    return process.client ? localStorage.getItem('access_token') : null;
  };
  
  export const getRefreshToken = () => {
    return process.client ? localStorage.getItem('refresh-token') : null;
  };
  
  export const setAccessToken = (token: string) => {
    if (process.client) {
      localStorage.setItem('access_token', token);
    }
  };

  export const setRefreshToken = (refresh_token: string) => {
    if (process.client) {
      localStorage.setItem('refresh_token', refresh_token);
    }
  };
  
  export const removeAccessToken = () => {
    if (process.client) {
      localStorage.removeItem('access_token');
    }
  };
  
  export const removeRefreshToken = () => {
    if (process.client) {
      localStorage.removeItem('refresh_token');
    }
  };
  
  