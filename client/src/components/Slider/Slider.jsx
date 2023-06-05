import React, { useState } from 'react'
import "./Slider.scss"; 
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';



const Slider = () => {

   const [currentSlide, setCurrentSlide ] = useState(0)

    const data = [
        "https://images.pexels.com/photos/12162501/pexels-photo-12162501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6261877/pexels-photo-6261877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2962240/pexels-photo-2962240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/15323848/pexels-photo-15323848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    ]; 

    const prevSlide =() => {
        setCurrentSlide(currentSlide === 0? 3 : (prev) => prev-1)
    }
    const nextSlide =() => {
        setCurrentSlide(currentSlide === 3? 0 : (prev) => prev+1)
    }


  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
        </div> 
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ArrowBackOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ArrowForwardOutlinedIcon/>
            </div>

        </div>
    </div>
  )
}

export default Slider