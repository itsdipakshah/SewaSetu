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
  <ul className="flex items-center justify-center gap-4 relative">
    
   
    <li className="list-none">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Home
        </Button>
      </Link>
    </li>

    {/* 2. Fashion Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Fashion
        </Button>
      </Link>
      {/* Mega Dropdown */}
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-3 gap-4 w-[500px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200 !pl-3">Men</h4>
          <ul className="flex flex-col gap-1 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">T-Shirts</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Shirts</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Pants & Jeans</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Shoes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Women</h4>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Sarees</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Kurti & Dresses</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Tops</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Shoes & Sandals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Kid</h4>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Boys Clothing</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Girls Clothing</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Kids Shoes</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Baby Clothing</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 3. Electronics Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Electronics
        </Button>
      </Link>
      {/* Mega Dropdown */}
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-2 gap-4 w-[450px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200 !pl-3">Mobile & Tablets</h4>
          <ul className="flex flex-col gap-2 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Smartphones</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Feature Phones</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Tablets</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Mobile Accessories</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Headphones</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Computers & Laptops</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Laptops</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Desktop PCs</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Monitors</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Computer Accessories</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 4. Beauty Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Beauty
        </Button>
      </Link>
      {/* Mega Dropdown */}
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-3 gap-6 w-[600px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="!pl-3 font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Makeup</h4>
          <ul className="flex flex-col gap-2 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Foundation</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Lipstick</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Eye Makeup</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Makeup Kits</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Skincare</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Face Wash</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Moisturizers</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Sunscreen</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Serums</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Personal Care</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Perfumes</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Deodorants</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Grooming Products</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Bath & Body</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 5. Groceries Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Groceries
        </Button>
      </Link>
      {/* Mega Dropdown */}
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-3 gap-3 w-[600px] p-4 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="!pl-3 font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Fresh Food</h4>
          <ul className="flex flex-col gap-1 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Fruits</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Vegetables</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Meat</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Dairy Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Staples</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Rice</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Pulses</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Flour</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Oil</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Packaged Food</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Snacks</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Biscuits</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Beverages</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 6. Health Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Health
        </Button>
      </Link>
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-2 gap-6 w-[400px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200 !pl-3">Supplements</h4>
          <ul className="flex flex-col gap-2 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Vitamins</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Proteins</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Medical Care</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">First Aid</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Monitors</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 7. Jewellery Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Jewellery
        </Button>
      </Link>
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-2 gap-6 w-[400px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200 !pl-3">Fine Jewellery</h4>
          <ul className="flex flex-col gap-2 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Gold Jewellery</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Diamond Rings</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Fashion Jewellery</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Earrings</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Necklaces</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 8. Automotives Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Automotives
        </Button>
      </Link>
      <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-2 gap-6 w-[400px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200 !pl-3">Car Accessories</h4>
          <ul className="flex flex-col gap-2 !pl-3">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Interior Accessories</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Car Care Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Bike Accessories</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Helmets</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Riding Gear</Link></li>
          </ul>
        </div>
      </div>
    </li>

    {/* 9. Agriculture Mega Menu */}
    <li className="list-none group relative">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Agriculture
        </Button>
      </Link>
      <div className="absolute top-full right-0 hidden group-hover:grid grid-cols-2 gap-6 w-[400px] p-6 bg-white shadow-lg rounded-md border border-gray-100 z-50">
        <div>
          <h4 className="!pl-3 font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Farming Tools</h4>
          <ul className="flex flex-col gap-2 !pl-3 ">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Hand Tools</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Equipment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black text-[15px] mb-3 pb-1 border-b border-gray-200">Seeds & Fertilizers</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Crop Seeds</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-[#ff5252] text-[13px]">Organic Fertilizers</Link></li>
          </ul>
        </div>
      </div>
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
