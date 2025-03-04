import { useContext, useEffect, useRef, useState } from "react";

import TextAndTitle from "./TextAndTitle";
import SectionContext from "./SectionContext";




const SectionItem = () => {
    const { bgImageUrl } = useContext(SectionContext);
    const [isIntersacting, setIsIntersacting ] = useState(false);
    const sectiomItemRef = useRef(null);
  
    let sectionStyles;

    if( null != bgImageUrl ){

        sectionStyles = { 
            backgroundImage: `url(${bgImageUrl})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
        }
    }else{
        sectionStyles = { 
        }
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersacting(true)
            }
        });
        
        if (sectiomItemRef.current) observer.observe(sectiomItemRef.current);

        return () => {
        if (sectiomItemRef.current) observer.unobserve(sectiomItemRef.current);
        };
    },[])
        
    return (
        <div ref={sectiomItemRef} class={`section__item ${isIntersacting ? '' : 'lz-background'} `} style={sectionStyles}>
            <TextAndTitle />
        </div>

    );
};

export default SectionItem;