import React from 'react'
import './Info.css'
import motivational from '../../assets/motivational.png'
import flexible from '../../assets/flexible.png'
import credible from '../../assets/credible.png'
import tailored from '../../assets/tailored.png'

const Info = () => {
  return (
    <div className="container">
      <header className="header">
        <p className="text-wrapper">Savvy <span className='empowers'>EMPOWERS YOUR</span>  financial journey</p>
      </header>
      <div className="values">
        <div className="div">
          <div className="div-2">
            <img className="image" alt="Image" src={motivational} />
            <div className="text-wrapper-2">Motivational</div>
            <p className="p">
              Stay on track with streak tracking. Savvy rewards consistency, helping you build strong financial habits
            </p>
          </div>
          <div className="div-2">
            <img className="img" alt="Shape" src={flexible} />
            <div className="text-wrapper-3">Flexible</div>
            <p className="p">
              Learn on your terms. Savvy adjusts to your schedule, fitting seamlessly into your daily routine
            </p>
          </div>
        </div>
        <div className="div">
          <div className="div-2">
            <img className="img" alt="Image" src={credible} />
            <div className="text-wrapper-3">Credible</div>
            <p className="p">
              Trust in quality. Savvy offers reliable, credible content from top news agencies and academic journals
            </p>
          </div>
          <div className="div-2">
            <img className="image" alt="Image" src={tailored} />
            <div className="text-wrapper-3">Tailored</div>
            <p className="p">
              Savvy customizes courses to your interests and goals, supporting your unique financial journey
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info