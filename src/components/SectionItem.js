import { useContext } from "react";

import TextAndTitle from "./TextAndTitle";
import SectionContext from "./SectionContext";


const SectionItem = () => {
    const { bgImageUrl } = useContext(SectionContext);
  
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
        
    return (
        <div class="section__item" style={sectionStyles}>
            <TextAndTitle />
        </div>

    );
};

export default SectionItem;