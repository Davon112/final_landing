import React from 'react'
import './Hero.css'
import hero1 from '../../assets/download (4).png'
import hero2 from '../../assets/download (3).png'

const Hero = () => {
  return (
    <div className="frame  col-xl|xxl ">
      <div className="div  col-sm|md|lg|xl|xxl">
        <div className="div-2  col-sm|md|lg|xl|xxl">
          <p className="introducing-savvy col-sm|md|lg|xl|xxl">
            <span className="text-wrapper col-sm|md|lg|xl|xxl">Introducing </span>
            <span className="span col-sm|md|lg|xl|xxl">Savvy</span>
            <span className="text-wrapper col-sm|md|lg|xl|xxl">, your <br />partner in financial learning</span>
          </p>
          <p className="p col-sm|md|lg|xl|xxl">
            Access tailored courses and expert content designed to grow financial literacy  across all your financial
            goals
          </p>
        </div>
        
      </div>
      <div className="product-mockups col-sm|md|lg|xl|xxl">
        <img className="img col-sm|md|lg|xl|xxl" alt="Flow final" src={hero1} />
        <img className="img col-sm|md|lg|xl|xxl" alt="Seleting content" src={hero2} />
      </div>
    </div>
  )
}

export default Hero