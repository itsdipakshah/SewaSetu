import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidePanel = (props) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(null);
  const [isInnerSubmenuOpen, setIsInnerSubmenuOpen] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpen(newOpen);
  };

  const openSubmenu = (index) => {
    if (isSubmenuOpen === index) {
      setIsSubmenuOpen(null);
    } else {
      setIsSubmenuOpen(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (isInnerSubmenuOpen === index) {
      setIsInnerSubmenuOpen(null);
    } else {
      setIsInnerSubmenuOpen(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="!p-4 text-[16px] font-[600] flex items-center justify-between uppercase">
        Shop By Catagories{" "}
        <RxCross2
          className="text-[20px] cursor-pointer "
          onClick={toggleDrawer(false)}
        />
      </h3>
      <Divider />

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                Fashion
              </Button>
            </Link>
            {isSubmenuOpen === 0 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(0)}
              />
            )}

            {isSubmenuOpen === 0 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Men's Fashion
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 0 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {isInnerSubmenuOpen === 0 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Pants & Jeans
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Shoes
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Women's Fashion
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 0 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {isInnerSubmenuOpen === 0 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Sarees
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Kurti & Dresses
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Shoes & Sandals
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Kids' Fashion
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 0 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {isInnerSubmenuOpen === 0 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Boys Clothing
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Girls Clothing
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Kids Shoes
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Baby Clothing
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                Electronics
              </Button>
            </Link>
            {isSubmenuOpen === 1 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(1)}
              />
            )}

            {isSubmenuOpen === 1 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Mobile & Tablets
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 1 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {isInnerSubmenuOpen === 1 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Smartphones
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Feature Phones
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Tablets
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Mobile Accessories
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Headphones
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Computers & Laptops
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 1 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {isInnerSubmenuOpen === 1 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Laptops
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Desktop PCs
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Monitors
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Computer Accessories
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
               Beauty
              </Button>
            </Link>
            {isSubmenuOpen === 2 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(2)}
              />
            )}

            {isSubmenuOpen === 2 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                     Makeup
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 2 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}

                  {isInnerSubmenuOpen === 2 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Foundation
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Lipstick
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Eye Makeup
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Makeup Kits
                        </Link>
                      </li>
                     
                    </ul>
                  )}
                </li>

                 <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                    Skincare
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 2 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}

                  {isInnerSubmenuOpen === 2 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Face Wash
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Moisturizers
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Sunscreen
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Serums
                        </Link>
                      </li>
                     
                    </ul>
                  )}
                </li>

                 <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                    Personal Care
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 2 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}

                  {isInnerSubmenuOpen === 2 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Perfumes
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Deodorants
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Grooming Products
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Bath & Body
                        </Link>
                      </li>
                     
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
               Groceries & Food
              </Button>
            </Link>
            {isSubmenuOpen === 3 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(3)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(3)}
              />
            )}

            {isSubmenuOpen === 3 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                     Fresh Food
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 3 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  )}

                  {isInnerSubmenuOpen === 3 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Fruits
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Vegetables
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Meat
                        </Link>
                      </li>
                     
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Dairy Products
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                  <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                   Staples
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 3 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  )}

                  {isInnerSubmenuOpen === 3 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                  Rice
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Pulses
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                       Flour
                        </Link>
                      </li>
                     
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                      Oil
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                  <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                  Packaged Food
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 3 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  )}

                  {isInnerSubmenuOpen === 3 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                       Instant Food
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Canned Food
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                       Spices
                        </Link>
                      </li>
                     
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Sauces
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
             Health & Wellness
              </Button>
            </Link>
            {isSubmenuOpen === 4 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(4)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(4)}
              />
            )}

            {isSubmenuOpen === 4 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Healthcare Products
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 4 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(4)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(4)}
                    />
                  )}

                  {isInnerSubmenuOpen === 4 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        First Aid
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Medical Devices
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Health Monitoring
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Personal Protection
                        </Link>
                      </li>
                     
                    </ul>
                  )}
                </li>
                
                 <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                      Fitness
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 4 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(4)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(4)}
                    />
                  )}

                  {isInnerSubmenuOpen === 4 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                      Gym Equipment
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                     Yoga Equipment
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                       Sports Accessories
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Fitness Accessories
                        </Link>
                      </li>
                     
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
           Jewelry & Accessories
              </Button>
            </Link>
            {isSubmenuOpen === 5 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(5)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(5)}
              />
            )}

            {isSubmenuOpen === 5 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                  Jewelry
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 5 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  )}

                  {isInnerSubmenuOpen === 5 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                      Rings
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Necklaces
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Earrings
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Bracelets
                        </Link>
                      </li>
                      
                    </ul>
                  )}
                </li>

                   <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                  Watches
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 5 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  )}

                  {isInnerSubmenuOpen === 5 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                   Smart Watches
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Analog Watches
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Digital Watches
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Luxury Watches
                        </Link>
                      </li>
                      
                    </ul>
                  )}
                </li>

                   <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                  Accessories
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 5 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  )}

                  {isInnerSubmenuOpen === 5 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                      Hair Accessories
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Keychains
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Wallets
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Sunglasses
                        </Link>
                      </li>
                      
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                Automotive
              </Button>
            </Link>
            {isSubmenuOpen === 6 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(6)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(6)}
              />
            )}

            {isSubmenuOpen === 6 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                     Motorcycles
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 6 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(6)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(6)}
                    />
                  )}

                  {isInnerSubmenuOpen === 6 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Helmets
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Bike Accessories
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Riding Gear
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Tyre
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Charging Equipment
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                
              </ul>
            )}
          </li>
           <Divider />

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
              Agriculture & Gardening
              </Button>
            </Link>
            {isSubmenuOpen === 7 ? (
              <FiMinusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(7)}
              />
            ) : (
              <FiPlusSquare
                className="top-[10px] right-[15px] cursor-pointer absolute"
                onClick={() => openSubmenu(7)}
              />
            )}

            {isSubmenuOpen === 7 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                     Agriculture
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 7 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(7)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(7)}
                    />
                  )}

                  {isInnerSubmenuOpen === 7 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Seeds
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Fertilizers
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                          Farming Tools
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                         Irrigation Equipment
                        </Link>
                      </li>
              
                    </ul>
                  )}
                </li>

                                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !text-black !px-3 !capitalize">
                    Gardening
                    </Button>
                  </Link>
                  {isInnerSubmenuOpen === 7 ? (
                    <FiMinusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(7)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="top-[10px] right-[15px] cursor-pointer absolute"
                      onClick={() => openInnerSubmenu(7)}
                    />
                  )}

                  {isInnerSubmenuOpen === 7 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Plants
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                       Pots
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Gardening Tools
                        </Link>
                      </li>
                      <li className="list-none relative mb-2">
                        <Link
                          to="/"
                          className="link w-full  !text-left !justify-start transition text-[14px] !px-3 !capitalize"
                        >
                        Soil & Compost
                        </Link>
                      </li>
              
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
           <Divider />
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer open={props.isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SidePanel;
