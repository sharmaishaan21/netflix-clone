import React,{useEffect,useState} from 'react'
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY>500) {
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" alt="Netflix Logo" />
            <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/5/54/Netflix_logo.png" alt="Smaller Logo" />
        </div>
    )
}

export default Nav
