import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import BannerBox from "../BannerBox";

const AdsBanner = (props) => {
  return (
    <div className="w-full">
      <Swiper
       slidesPerView={props.items}
       spaceBetween={20}
       loop={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
         pauseOnMouseEnter: false,
       }}
       navigation={true}
       modules={[Autoplay, Navigation]}
       className="mySwiper !w-full !h-[100%] !p-0 !my-6 rounded-md "
      >
        <SwiperSlide>
           <BannerBox img={"/banner1.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner2.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner3.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner4.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner5.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner6.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner7.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={"/banner8.webp"}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default AdsBanner;
