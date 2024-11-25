import React from 'react'
import {packages} from '../../assets/data'


const Price = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className='container mx-auto px-8'>
        <div 
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
        <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-primary tracking-wider mb-3'>Perfect for small & Large Brands</h2>
            <p className='text-lg mb-12 md:w-2/3 mx-auto'>Reasonable Pricing Plan</p>
        </div>


       <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12'>
       {
        packages.map((pkg, index) => (
        
            
            <div key={index} className='bg-gray-100 dark:bg-black dark:text-white rounded-lg p-6 flex-1 shadow-lg'>
                <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
                <hr className='w-24 border text-primary border-primary'/>
                <p className='text-3xl font-bold mb-4'>{pkg.price}<span className='text-lg font-normal'>/mo</span></p>
                <p className='text-lg mb-4'>{pkg.description}</p>
                <ul className='list-disc list-inside space-y-2 mb-6'>
                    {
                        pkg.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>

                        ))
                    }
                </ul>
                <button className='bg-primary text-white rounded px-4 py-2'><a href="#contact">Get Started</a></button>
            </div>

        ))
       }

       </div>
       </div>
      </div>
    </div>
  )
}

export default Price
