import { useContext } from "react";
import Button from "./Button"
import SectionContext from "./SectionContext";

const TextAndTitle = () => {

    const { titleText, titleTextSecondary, subTitleText, subTitleTextSecondary, buttonAddClass, buttonText, buttonUrl } = useContext(SectionContext);
    
    return (
        <div className='text-wrap' >
            <div className='text-wrap__title'>{titleText} <span className='text-wrap__title__secondary'>{titleTextSecondary}</span></div>
            <div className='text-wrap__subtitle'>{subTitleText} <span className='text-wrap__subtitle__secondary'>{subTitleTextSecondary}</span></div>
            <Button buttonAddClass={buttonAddClass} buttonText={buttonText} buttonUrl={buttonUrl} />
        </div>
    )
}

export default TextAndTitle