"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className="mt-10">
        <h1 className="mb-10">
            LET'S RIDE
        </h1>
        <p className="ml-10">
            Lets go to the places you have been dreaming about!
        </p>
        <CustomButton 
            title="Explore Adventures"
            containerStyles="bg-pink"
            handleClick={handleScroll}
        />

        
        <div className="mt-10 ml-10">
            <Image src="" alt={"hero-image of a adventure"} 
            fill className=" ml-48 mt-48"/>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Hero