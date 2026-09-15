import React from "react";
import { Search } from "lucide-react";
import Button from "@mui/material/Button";

const SearchPage = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative flex items-center justify-between">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-[100%] h-[100%] bg-transparent !px-4  text-[14px] font-[400] outline-none"
      />
      <Button className="h-[100%] w-[50px] bg-[#e5e5e5] flex items-center justify-center rounded-r-[5px] cursor-pointer">
        <Search className="text-[#575454]" />
      </Button>
    </div>
  );
};

export default SearchPage;
