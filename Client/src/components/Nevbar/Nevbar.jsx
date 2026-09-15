import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import SidePanel from "./SidePanel";

const Nevbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = ()=>{
    setIsOpen(true);
  }

  return (
    <>
    <nav>
      <div className="container flex items-center justify-end gap-8">
        <div className="col_1 w-[20%] flex">
          <Button className="!text-black gap-2 w-full !font-[600]" onClick={toggleDrawer}>
            <RiMenu2Fill className="!text-[18px]" />
            Shop by Catagories
            <LiaAngleDownSolid className="ml-auto font-bold text-[13px] " />
          </Button>
        </div>

        <div className="col_2 w-[60%]">
          <ul className="flex items-center justify-center gap-4">
            <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
                <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Home</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
                <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Fashion</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
                <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Electronics</Button>
              </Link>
            </li>
             <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
                <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Beauty</Button>
              </Link>
            </li>
             <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
               <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Groceries</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
               <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Health</Button> 
              </Link>
            </li>
              <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
                <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Jewellery</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
               <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Automotives</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[14px] font-[500]">
                <Button className="link tansition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Agriculture</Button>
              </Link>
            </li>
           
          
            
           
          </ul>
        </div>

        <div className="col_3 w-[20%] ">
          <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
            <GoRocket className="text-[18px]" />
            Free International Delivery
          </p>
        </div>
      </div>
    </nav>


    <SidePanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Nevbar;
