import React from 'react'
import s from './About.module.scss'
const About = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className={s.wrapper}>

                <div className={s.about}>
                About me <span></span>
                </div>

                <div className={s.am}>
                <h1>I am  <span>Chingiz</span></h1>
                <h4>I'm a Front-End Developer with a passion for crafting engaging and intuitive user interfaces. Specializing in modern web technologies and frameworks, I focus on creating seamless, responsive, and visually appealing designs that enhance user experiences. With a strong eye for detail and a dedication to clean, efficient code, I thrive on turning creative ideas into functional and interactive solutions. I'm committed to continuous learning, staying at the forefront of industry trends, and collaborating with teams to deliver top-notch digital experiences. Let’s work together to bring your vision to life!</h4>
                </div>

                <div className={s.exp}>

                <div>
                <h1> 8+</h1><p>MONTHS OF <br /> TRAINING </p>
                </div>

                <div> <h1> 4</h1><p>Projects <br /> Completed </p></div>

                </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default About