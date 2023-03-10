import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <footer className="bg-dark p-3">
        <p className="text-white text-center">
          This Web Page is Made By {user.name} with{" "}
          {<FcLike className="fs-4 mb-2" />}
        </p>
      </footer>
    </>
  );
};
export default Footer;
