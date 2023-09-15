import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigation = (page) => {
    return navigate(page);
  };

  return (
    <div className="menutop">
      <nav className="navbar">
        <h1 className="title" onClick={() => navigation('/')}>
          SVADA
        </h1>
        <h4 className="abt" onClick={() => navigation('/About')}>
          About{" "}
        </h4>
      </nav>
    </div>
  );
};
export default Header;
