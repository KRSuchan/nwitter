import { authService } from "fbase";
import React from "react";

export default () => {
  const Profile = () => {
    const navigate = useNavigate();
  };
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
