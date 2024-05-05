import './CollapsableMenu.css';
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function CollapsableMenu(props){

    const[menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();
    const [title, setTitle] = useState(props.title)


    function toggleMenu() {
        setMenuVisible(!menuVisible);
        
    }

    useEffect(() => {
        setMenuVisible(false);
    }, [location.pathname]);

    return (
        <>
            <div className='collapsable'>
                <div className="collapsable-top">
                    <div className='collapsable-title'><p>{title}</p></div>
                    <button onClick={toggleMenu} className={`collapsable-icon ${menuVisible ? 'visible' : 'hidden'}`}>+</button>
                </div>
                <div className={`collapsable-content ${menuVisible ? 'visible' : 'hidden'}`}>
                <div>
                    {props.children}
                </div>
            </div>
            </div>
        </>

        
    )
}
export default CollapsableMenu;