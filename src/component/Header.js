import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"} style={{ margin: 20 }}>
        Home
      </Link>
      <Link to={"/enquire-detail"}>Enquiry</Link>
      <br />
      <br />
    </div>
  );
};

export default Header;
