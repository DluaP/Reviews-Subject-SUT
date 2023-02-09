import { log } from "console";
import { createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../login";

const UserContext = createContext<any>({});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<any>();
  const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    if (user) {
      getUserDetail();
    }
  }, [user]);

  useEffect(() => {
  }, [userDetail]);

  const getUserDetail = async () => {
    await baseURL.get(`/users/${user?.username}`).then((res) => {
      setUserDetail(res.data);
    });
  };

  const findByToken = async (token: string) => {
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await baseURL
      .get(`/profile`, config)
      .then((res) => {
        setUser(res.data);
        getUserDetail();
      })
      .catch();
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, findByToken, setUserDetail, userDetail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
