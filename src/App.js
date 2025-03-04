import earth_image from './assets/images/earth.png';
import hero_bg_md from './assets/images/hero-bg-md.jpg';

import './App.css';
import SectionItem from './components/SectionItem';
import { createContext } from 'react';
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

    </div>

    </>
  );
}

export default App;
