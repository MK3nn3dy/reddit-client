import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addIcon, removeIconToAdd, showHideMenu} from './shortcutSlice';

const ShortcutsToAdd = () => {

    const dispatch = useDispatch();
    const shortcutLibrary = useSelector((state) => state.shortcuts.iconsLibrary);
    const menuVisible = useSelector((state) => state.shortcuts.menuVisible);
    console.log(shortcutLibrary);

    const handleClick = (event) => {
        dispatch(addIcon(event.target.innerHTML));
        dispatch(removeIconToAdd(event.target.innerHTML));
    }

    const toggleIconLibrary = (event) => {
        const nextVisibility = !menuVisible;
        dispatch(showHideMenu(nextVisibility));
    }

    return (
        <aside id="shortcutLibrary">
            <h3 onClick={toggleIconLibrary}>Add Shortcuts</h3>
            <ul id="shortcutLibraryUL">
               {
                menuVisible && shortcutLibrary.map((shortcut, index) => {
                    return (
                        <li key={index}>
                            <div 
                                id={shortcut}
                                className="shortcut-icon"
                            >
                            </div>
                            <div className="addIconText">
                                <h4 onClick={handleClick}>{shortcut}</h4>
                            </div>
                        </li>
                    )
                })
               } 
            </ul>
        </aside>
    )

}

export default ShortcutsToAdd;