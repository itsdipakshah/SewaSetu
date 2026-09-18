
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const HomeCatSlider = () => {
  return (
    <div className="!py-6 !pt-4">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={Navigation}
        className="mySwiper w-[95%] !h-[100%] mx-auto !my-6 "
      >
        <SwiperSlide>
          
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp"
              alt="creatine"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center">Headphone</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-stacked-folded-blue-jeans-png-image_16476863.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center">Men jeans</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-beauty-parlour-cosmetics-products-transparent-background-image-png-image_14646730.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center">Beauty Products</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-juicy-fruits-and-vitamins-natural-organic-fruits-png-image_13146415.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center">Fruits</h3>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://static.vecteezy.com/system/resources/previews/054/044/054/non_2x/medical-red-first-aid-kit-with-medicine-on-transparent-background-free-png.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center ">Health</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://png.pngtree.com/png-clipart/20250415/original/pngtree-indian-gold-jewellery-set-png-image_20711595.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center ">Jewellery</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/050/704/376/small/dirt-bike-helmet-isolated-on-transparent-background-png.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center ">Helmate</h3>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChJ7EpKkHWUONG1wXMNxvYo_TpphZvxDIb_0TXqnv_A&s=10"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center ">Seeds</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item text-center justify-center rounded-md flex flex-col bg-white border border-transparent transition-all duration-300 hover:border-[rgba(94,85,85,0.34)] hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] cursor-pointer">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/052/646/401/small/vibrant-stacked-silk-sarees-in-hues-isolated-transparent-png.png"
              alt="mobile"
              className="w-[60px]"
            />
            <h3 className="text-[16px] text-[rgba(0,0,0,0.8)] items-center ">Electronics</h3>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default HomeCatSlider;
