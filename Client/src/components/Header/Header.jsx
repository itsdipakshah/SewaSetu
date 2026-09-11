import React from "react";
import { Link } from "react-router-dom";
import SearchPage from "../search/Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { GitCompare, Heart,ShoppingCartPlus } from "lucide-react";
import Tooltip from '@mui/material/Tooltip';
import Nevbar from "../Nevbar/Nevbar";


const Header = () => {
  return (
    <header className='bg-white'>
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className=" text-[13px] font-[500] text-gray-600">
                Get 20% off on your first order! , Limited time only.
              </p>
            </div>

            <div className="col2 flex items-center justify-end gap-4">
              <ul className="flex items-center justify-center gap-4">
                <li className="list-none ">
                  <Link
                    to="/help-center"
                    className="text-[13px] link transition font-[500]"
                  >
                    Help Center{" "}
                  </Link>
                </li>
                <li className="list-none ">
                  <Link
                    to="/order-track"
                    className="text-[13px] link font-[500]"
                  >
                    Order Track{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-2  border-b-[1px] border-gray-200">
        <div className="container flex items-center justify-between gap-4">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/logo1.jpg" />{" "}
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <SearchPage />
          </div>

          <div className="col3 w-[30%] items-center pl-5">
            <ul className="flex items-center gap-4 justify-between">
              <li className="list-none">
                <Link
                  to="/login"
                  className="text-[13px] link transition font-[600]"
                >
                  Login{" "}
                </Link>{" "}
                | &nbsp;
                <Link
                  to="/register"
                  className="text-[13px] link transition font-[600]"
                >
                  Register{" "}
                </Link>
              </li>

              <li className="list-none gap-3 flex items-center justify-center">
                 <Tooltip title="Wishlist">
                <IconButton aria-label="show 4 unread messages">
                  <Badge badgeContent={22} color="error">
                    <Heart />
                  </Badge>
                </IconButton>
                </Tooltip>

                <Tooltip title="Compare">
                <IconButton aria-label="show 4 unread messages">
                  <Badge badgeContent={4} color="primary">
                    <GitCompare />
                  </Badge>
                </IconButton>
                </Tooltip>
                
                <Tooltip title="Cart">
                <IconButton aria-label="show 4 unread messages">
                  <Badge badgeContent={10} color="primary">
                    <ShoppingCartPlus />
                  </Badge>
                </IconButton>
                </Tooltip>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
     
     <Nevbar/>
     
    </header>
  );
};

export default Header;
