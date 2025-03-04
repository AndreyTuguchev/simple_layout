import { useContext } from "react";
import SectionContext from "./SectionContext";

const Button = () => {
    
    const { buttonAddClass, buttonText, buttonUrl } = useContext(SectionContext);

    return (
        <a href={buttonUrl} className={`button ${buttonAddClass}`}>{buttonText}</a>
    )
}

export default Button