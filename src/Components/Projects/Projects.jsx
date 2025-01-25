import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Projects.module.scss';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Продолжительность анимации в миллисекундах
      once: true, // Анимация срабатывает только один раз при скролле
    });
  }, []);

  return (
    <>
      <section id="Projects">
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.My_projects} data-aos="fade-right">
              <h3>My projects</h3>
              <span></span>
            </div>

            <div className={s.cards}>
              <div className={s.text} data-aos="fade-left">
                <h1>Projects </h1>
                <span>
                  <h1>Showcase</h1>
                </span>
              </div>

              <div className={s.Showcase}>
                <div className={s.card}  data-aos-duration="5000"  data-aos="fade-right">
                  <div className={s.img}>
                    <img src="/cuber-teca.jpg" alt="" />
                    <h3>cuber-teca</h3>
                  </div>
                  <div className={s.info}>
                    <p>
                      this project was made for a gaming club, this project has
                      a loading screen and several pages the project is made in
                      react
                    </p>
                  </div>
                  <div className={s.links}>
                    <div>
                      <img src="/link.svg" alt="" />
                      <a href="https://cuber-teca-final.vercel.app/">
                        Live Preview
                      </a>
                    </div>
                    <div>
                      <img src="/Github.svg" alt="" />
                      <a href="">View Code</a>
                    </div>
                  </div>
                </div>

                <div className={s.card}  data-aos-duration="1000"  data-aos="fade-left">
                  <div className={s.img}>
                    <img src="/shibuya.jpg" alt="" />
                    <h3>shibuya</h3>
                  </div>
                  <div className={s.info}>
                    <p>
                      this project is made in the theme of html css js this
                      project uses different libraries such as swiper this
                      project has several pages
                    </p>
                  </div>
                  <div className={s.links}>
                    <div>
                      <img src="/link.svg" alt="" />
                      <a href="https://shibuya-eosin.vercel.app">Live Preview</a>
                    </div>
                    <div>
                      <img src="/Github.svg" alt="" />
                      <a href="https://github.com/awat2347/shibuya">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className={s.card}  data-aos-duration="1500"  data-aos="fade-right">
                  <div className={s.img}>
                    <img src="/Shop.co.jpg" alt="" />
                    <h3>Shop.co</h3>
                  </div>
                  <div className={s.info}>
                    <p>
                      this project is made like a clothing store has logic, also
                      has several pages and is written in react
                    </p>
                  </div>
                  <div className={s.links}>
                    <div>
                      <img src="/link.svg" alt="" />
                      <a href="https://shopcogfchgf.vercel.app/">Live Preview</a>
                    </div>
                    <div>
                      <img src="/Github.svg" alt="" />
                      <a href="">View Code</a>
                    </div>
                  </div>
                </div>

                <div className={s.card}  data-aos-duration="2000"  data-aos="fade-left">
                  <div className={s.img}>
                    <img src="/Shop.co.jpg" alt="" />
                    <h3>Shop.co</h3>
                  </div>
                  <div className={s.info}>
                    <p>
                      this project is made like a clothing store has logic, also
                      has several pages and is written in react
                    </p>
                  </div>
                  <div className={s.links}>
                    <div>
                      <img src="/link.svg" alt="" />
                      <a href="https://shopcogfchgf.vercel.app/">Live Preview</a>
                    </div>
                    <div>
                      <img src="/Github.svg" alt="" />
                      <a href="">View Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
