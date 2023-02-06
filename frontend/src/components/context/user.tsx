import { log } from "console";
import { createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../login";

const UserContext = createContext<any>({});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState();

  const findByToken = async (token: string) => {
    console.log(token);

    // await baseURL.get(`/profile`);
  };

  return (
    <UserContext.Provider value={{ user, setUser, findByToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
