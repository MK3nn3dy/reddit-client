import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSubreddit } from '../articles/articleSlice';
import { getArticles } from '../articles/articleSlice';


const ShortcutBar = () => {

    const dispatch = useDispatch();

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

    }, [])
    

    return (
            <nav className="navigation-shortcuts">
                <ul>
                    <li>
                        <div id="ghosts" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="aliens" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="ufo" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="cryptids" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="bigfoot" className="shortcut-icon"></div>
                    </li>
                    <li>
                        <div id="telekinesis" className="shortcut-icon"></div>
                    </li>
                </ul>
            </nav>
    )
}

export default ShortcutBar;