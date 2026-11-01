import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box BannerBox">
      <Link to={"/ProductBannner"}>
      <img src={props.img} className="w-full" alt="banner" />
      </Link>
    </div>
  );
};

export default BannerBox;
