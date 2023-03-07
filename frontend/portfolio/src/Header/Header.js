import { useEffect, useState } from 'react';
import './Header.css';


const Header = () => {
    const fullHeaderText = "Welcome To My Portfolio";
    const [headerText, setHeaderText] = useState("");
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const typingEffect = () => {
            setHeaderText(headerText + fullHeaderText[textIndex]);
            setTextIndex(textIndex + 1);
        }

        if (textIndex < fullHeaderText.length)
            setTimeout(typingEffect, 200);
    }, [textIndex, headerText]);


    return (
        <>
            <div className='header-div'>
                <h1 className='typing-effect'>{headerText}</h1>
                <h1 className='cursor'>|</h1>
            </div>
        </>
    )
};

export default Header;