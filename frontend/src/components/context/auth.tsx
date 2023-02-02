export const Logout = () => {
    removeToken();
    window.location.reload();
  };
  
  export const removeToken = () => {
    localStorage.removeItem("access-token");
  };
  
  export const setToken = (token: string) => {
    localStorage.setItem("access-token", token);
  };
  
  export const getToken = (): string | null => {
    return localStorage.getItem("access-token");
  };
  