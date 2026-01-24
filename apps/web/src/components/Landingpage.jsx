import { motion } from "framer-motion";
import CustomBtn from "./common/CustomBtn";
import {TALK_ROUTE} from "../data/routes"

function Landingpage({titles, imgUrl, subtitle, desc}) {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.7"
      className='min-h-screen pt-1'>
      <div className="h-screen w-full flex flex-col justify-start items-start">
      <div className='flex-1 content-center'>
        <div className="grid grid-cols-1 grid-rows-3 ml-10">
          {titles.map((text, index) => {
          return (
            <div className='masker' key={index}>
              <div className='w-fit flex items-center overflow-hidden'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}>
                    <img
                      className='lg:w-[8.8vw] lg:h-[5vw] lg:mb-0.5 lg:mx-1 rounded'
                      src={imgUrl}
                      alt=''
                    />
                  </motion.div>
                )}
                <h1 className='items-center uppercase text-7xl lg:text-[7vw] lg:leading-[6vw] tracking-tighter font-bold'>
                  {text}
                </h1>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      <div className='w-full h-16 border-t'>
        <div className="flex p-3 justify-between items-baseline">
          <p className='text-xs md:text-md lg:text-lg tracking-tight leading-none capitalize'>{subtitle}</p>
          <p className='text-xs md:text-md lg:text-lg tracking-tight leading-none capitalize'>{desc}</p>
        <CustomBtn text={'Start the project'} to={TALK_ROUTE} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Landingpage;
