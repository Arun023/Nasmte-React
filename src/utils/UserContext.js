import { createContext } from "react";

const UserContext = createContext({
  name: "Dummy",
  email: "Dummy@gmail.com",
});

export default UserContext;
