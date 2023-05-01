import "./footer.css"
import React from "react";

export default function Footer() {
    return (
        <section className={"f-wrapper"}>
            <div className={"paddings innerWidth flexCenter f-container"}>
                <div className={"flexColStart f-left"}>
                    <img src="./logo2.png" alt="footer" width={120}/>

                    <span className={"secondaryText"}>
                       Our vision is to find the best places to live for all people.
                    </span>
                </div>

                <div className={"flexColStart f-right"}>
                    <span className={"primaryText"}>Find Us At</span>
                    <span className={"secondaryText"}>145 Alikhan Bokeikhan, FL 004, KZ</span>

                    <div className={"flexCenter f-menu"}>
                        <a href="">Property</a>
                        <a href="">Services</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}