import React from 'react'
import '../Styles/Programs.css'
import heroImg from '../Assets/gym-02.png'
import dumbellIcon from '../Assets/dumble.png'

const Programs = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <h2 className='section_title'>Exercise is a key to 
                            <span className="highlight">HEALTHY</span>
                             LifeStyle</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid nemo in repellendus</p>
                        <div className="hero_btns">
                            <button className="register_btn">Get Started</button>
                            <button className="watch_btn">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                    </span>Watch Video
                            </button>

                        </div>
                    </div>
                    <div className="hero_img">
                        <div className="hero_img_wrapper">
                            <div className="box_01">
                                <div className="box_02">
                                    <div className="box_03">
                                        <div className="box_img">
                                            <img src={heroImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heart_rate">
                                <h5>Heart Rate</h5>
                                <h6>2856bpm</h6>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B197FC" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4l87 0c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31l104.5 0c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240l-132 0c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9L16 240c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1l0 5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>
                                </span>
                            </div>

                            <div className="gym_location">
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#63E6BE" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                </span>
                                <h5>Find a Gym Near You</h5>
                            </div>

                            <div className="dumbell_icon">
                                <img src={dumbellIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Programs
