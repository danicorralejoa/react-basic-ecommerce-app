import { createContext, useEffect, useState } from "react";
import { token } from "../helpers/auth";
import axios from "axios";
import { ALTERNATIVE_API_URL } from "../constants/env";

const UserContext = createContext();
//Mejorar que userContext no se actualiza en LogIn o LogOut, hay que realizar un resfresco de página para ello
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    //console.log(typeof token());
    if (typeof token() != "undefined") {
      axios
        .get(`${ALTERNATIVE_API_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
