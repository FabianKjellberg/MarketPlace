import './Burger.css';
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import HamburgerIcon from '../../resources/images/_logo (1).png'

function Burger(props){

    const[menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();


    function toggleMenu() {
        setMenuVisible(!menuVisible);
        
    }

    useEffect(() => {
        setMenuVisible(false);
    }, [location.pathname]);

    return (
        <>
            <div className='burger'>
                <div className={`burger-icon ${menuVisible ? 'visible' : 'hidden'}`}>
                    <img src={HamburgerIcon} onClick={toggleMenu}></img>
                </div>
                <div className={`burger-content ${menuVisible ? 'visible' : 'hidden'}`}>
                <div>
                    {props.children}
                </div>
            </div>
            </div>
        </>

        
    )
}
export default Burger;