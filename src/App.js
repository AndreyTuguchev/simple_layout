import earth_image from './assets/images/earth.png';
import hero_bg_md from './assets/images/hero-bg-md.jpg';
import rocket from './assets/images/rocket.svg';
import space_bg_1 from './assets/images/space-bg-1.jpg';
import space_bg_2 from './assets/images/space-bg-2.jpg';
import space_bg_3 from './assets/images/space-bg-3.jpg';
import space_bg_4 from './assets/images/space-bg-4.jpg';

import './App.css';
import SectionItem from './components/SectionItem';
import SectionContext from './components/SectionContext';

function App() {
  return (
    <>
    <div className="App">
   
    <section className='section hero section__hover' style={{backgroundImage: `url(${hero_bg_md})`}}>
      <div className='section-inner '>
        <div className='hero-image'>
          <img className='hero-image__image' src={earth_image} alt="" width={540} height={605} />
        </div>

        <SectionContext.Provider
          value={{
            titleText : 'Discover the vast expanses of',
            titleTextSecondary : "space",
            subTitleText : 'Where the possibilities are',
            subTitleTextSecondary : "endless!",
            buttonAddClass : "button--primary",
            buttonText : "Learn more",
            buttonUrl : "#",
          }}
        >
          <SectionItem />
        </SectionContext.Provider>

      </div>
    </section>


    


    <section className='section'>
      <div className='section-inner section-only-text flex-col'>
        <h1 className='section-title text-left w-full'>Offers</h1>
      </div>
    </section>

    <main className='main'>
      <section className='section'>
        <div className='section-inner section__hover flex-col'>
          <SectionContext.Provider
            value={{
              titleText : 'Move the borders of reality!',
              subTitleText : "Go on a space adventure - it's possible with us!",
              buttonAddClass : "button--secondary",
              buttonText : "Learn more",
              buttonUrl : "#learnmore",
              bgImageUrl : space_bg_1,
            }}
          >
            <SectionItem />
          </SectionContext.Provider>

        </div>
      </section>
      <section className='section'>
        <div className='section-inner section__hover flex-col'>
          <SectionContext.Provider
            value={{
              titleText : 'Space is not just stars and planets',
              subTitleText : "Go on a space adventure",
              buttonAddClass : "button--secondary",
              buttonText : "Learn more",
              buttonUrl : "#learnmore",
              bgImageUrl : space_bg_2,
            }}
          >
            <SectionItem />
          </SectionContext.Provider>

        </div>
      </section>
      <section className='section'>
        <div className='section-inner section__hover flex-col'>
          <SectionContext.Provider
            value={{
              titleText : 'For those who dream of stars',
              subTitleText : "Our offer: make your dream come true",
              buttonAddClass : "button--secondary",
              buttonText : "Learn more",
              buttonUrl : "#learnmore",
              bgImageUrl : space_bg_3,
            }}
          >
            <SectionItem />
          </SectionContext.Provider>

        </div>
      </section>
      <section className='section'>
        <div className='section-inner section__hover flex-col'>
          <SectionContext.Provider
            value={{
              titleText : 'Fulfill your fantastic dreams',
              subTitleText : "Space has never been so close",
              buttonAddClass : "button--secondary",
              buttonText : "Learn more",
              buttonUrl : "#learnmore",
              bgImageUrl : space_bg_4,
            }}
          >
            <SectionItem />
          </SectionContext.Provider>

        </div>
      </section>

    </main>
    <section className='section bottom'>
      <div className='section-inner'>
        <div className='bottom__title'>Embark on a space journey</div>
        <div className='bottom__text'>Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</div>
        <div className='bottom__link'>
          <a href="/#readmore" alt=" ">Read More</a>
        </div>
      </div>
    </section>
    
    </div>
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__image'>
          <img src={rocket} alt="" />
        </div>
        <div className='footer__title'>Exciting space adventure!</div>
      </div>
    </footer>

    </>
  );
}

export default App;
