import React from 'react'
import Image from 'next/image';

const Ads = () => {
  return (
    <div className='container mx-auto xl:max-w-[1180px] flex items-center justify-center pt-[35px]'>
      {/* <img src="/assets/add.png" alt="" className='w-[80%] cursor-pointer' /> */}
      <Image src="/assets/add.png" alt='' className='w-[80%] cursor-pointer' />
    </div>
  )
}

export default Ads
