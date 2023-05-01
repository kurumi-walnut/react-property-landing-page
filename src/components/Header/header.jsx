import React, {useState} from "react";
import './header.css'
import {BiMenuAltRight} from "react-icons/all.js";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler.js";

export default function Header () {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "-100%"}
        }
    }

    return (
        <section className={"h-wrapper"}>
            <div className={"flexCenter paddings innerWidth h-container"}>
                <img src="./logo.png" alt="logo" width={100}/>

                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className={"flexCenter h-menu"} style={getMenuStyles(menuOpened)}>
                        <a href="">Property</a>
                        <a href="">Services</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                        <button className={"button"}>
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className={"menu-icon"} onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </section>
    )
}