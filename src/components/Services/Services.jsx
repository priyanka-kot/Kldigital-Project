import React from "react";
import { skillsData} from '../../assets/data';


const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>

          <div className="bg-gray-100 dark:bg-black dark:text-white">
        <div className="pt-28 px-4 container mx-auto">
          <div className="text-center space-y-5">
            <h2 className="text-4xl font-bold font-secondary">What Can We Do Together</h2>
            <p className="md:w-1/2 mx-auto">At KLDigital, we understand that your online presence is more than just code and graphics; it’s the digital heartbeat of your brand. That’s why we specialize in creating custom web solutions tailored to your unique needs. </p>
          </div>
        </div>
      </div>
        
        </div>
      </div>
       

    </>
  );
};

export default Services;