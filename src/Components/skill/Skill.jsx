import React from 'react'
import s from './skill.module.scss'
const Skill = () => {
  return (
    <>
        <section id='Skill'>
            <div className="container">
                <div className={s.wrapper}>

                    <div className={s.skills}>
                        <h3>My Skills</h3>
                        <span></span>
                    </div>

                    <div className={s.text}>
                           <div> 
                            <h1>My Skills</h1>
                            <span><h1>Overview</h1></span>
                           </div> 
                           <div>
                            <p>A glimpse into my full-stack proficiency and technical prowess. </p>
                            </div>
                    </div>

                <div className={s.Vs_code}>

                <div className={s.card}>
                    <img src="/Html.svg" alt="" />
                    <h4>Html</h4>
                </div>

                <div className={s.card}>
                    <img src="/JavaScript.svg" alt="" />
                    <h4>JavaScript</h4>
                </div>

                <div className={s.card}>
                    <img src="/Vs-code.svg" alt="" />
                    <h4>Vs code</h4>
                </div>

                <div className={s.card}>
                    <img src="/React.svg" alt="" />
                    <h4>React</h4>
                </div>

                </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Skill