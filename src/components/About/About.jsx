import React from "react";
import yellowCar from "../../assets/website/about.jpg";

const About = () => {
  return (
    <>
     <span id="about"></span>
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">

          
       
         

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 pb-12">

          <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              We have been improving our Products for many years{" "}
              <span className="text-primary">KLDigital</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Welcome to KLDigital Marketing, where innovation meets expertise in the digital realm! Our journey. 
            Here, we don’t just build websites; we craft digital experiences that resonate with your audience. Our team, a blend of creative minds and technical wizards, is passionate about pushing the boundaries of what’s possible on the web.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
             {/* Image section */}

          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          
      
     

          
        </div>
      </div>
    </div>
    </>
  );
};

export default About;