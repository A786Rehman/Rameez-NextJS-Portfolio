import React from 'react'
import ReviewsSlider from './Helper/ReviewsSlider'

const Reviews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className="text-center">
  <p className="text-[17px] text-white opacity-75">Our Team Members</p>
  <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]">
    Our Team <span className="text-purple-400">Members</span>
  </h1>
</div>

        <div className='w-[80%] pt-[3rem] md:pt-[5rem] mx-auto'>
            <ReviewsSlider/>
        </div>
        
    </div>
  )
}

export default Reviews