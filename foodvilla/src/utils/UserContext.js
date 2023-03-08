import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Karan Meghe",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
