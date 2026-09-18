import React from 'react'
import HomeSlider from '../../components/slider/HomeSlider'
import HomeCatSlider from '../../components/catSlider/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <HomeSlider/>
    <HomeCatSlider/>

    <section className='!py-16 !bg-white'>
      
        <div className="container">
          <div className="freeshipping w-full border-2 !p-4 rounded-sm border-[#ff5252] flex items-center justify-between">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className='text-[50px]' />
              <span className='text-[25px] font-[600] uppercase'> Free Shipping</span>
            </div>

            <div className="cols2">
              <p className='font-[500]'>Free delivery now on your first order and over 200$</p>
            </div>

            <div className="cols3">
              <p className='text-[25px] font-[600] uppercase'> -Only 200$* </p>
            </div>


          </div>
        </div>
     
    </section>

    <br/>
    <br/>
    <br/>
    <br/>

    </>
  )
}

export default Home