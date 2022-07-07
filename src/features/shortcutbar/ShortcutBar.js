import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSubreddit, getArticles } from '../articles/articleSlice';
import { addIcon } from './shortcutSlice';
import { useSelector } from 'react-redux';


const ShortcutBar = () => {

    const dispatch = useDispatch();
    const shortcutIcons = useSelector((state) => state.shortcuts.icons);
    const shortcutIconsToAdd = useSelector((state) => state.shortcuts.iconsLibrary);
    const menuVisible = useSelector((state) => state.shortcuts.menuVisible);
    console.log(shortcutIcons);

    useEffect(() => {

        let list = document.querySelectorAll('.shortcut-icon');
        for (let i = 0; i < list.length; i++){
        list[i].onclick = function(e){
            let j = 0;
            while(j < list.length){
                list[j++].className = 'shortcut-icon';
            }
            list[i].className = 'shortcut-icon active-icon';
            dispatch(changeSubreddit(e.target.id));
            dispatch(getArticles(e.target.id));
        }
    }

    }, [shortcutIcons, shortcutIconsToAdd, menuVisible])
    

    return (
            <nav className="navigation-shortcuts">
                <ul>
                    {
                        shortcutIcons && shortcutIcons.map((icon, index) => {
                            return (
                                <li id={icon + "-div"} key={index}>
                                    <div id={icon} className="shortcut-icon"></div>
                                </li>
                            )                            
                        })
                            
                    }
                    
                </ul>
            </nav>
    )
}

export default ShortcutBar;

                    /* OLD HARD-CODED ICONS */

                    /*<li>
                        <div id="Ghost" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="Alien" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="UFO" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="Cryptid" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="Bigfoot" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="Telekinesis" className="shortcut-icon"></div>
                    </li>*/