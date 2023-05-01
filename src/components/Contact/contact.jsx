import "./contact.css"
import {BsFillChatDotsFill, HiChatBubbleBottomCenter, MdCall, BsFillCameraVideoFill} from "react-icons/all.js";
export default function Contact() {
    return (
        <section className={"contact-wrapper"}>
            <div className={"paddings innerWidth flexCenter contact-container"}>
                <div className={"flexColStart contact-left"}>
                    <span className={"orangeText"}>Our Contacts</span>
                    <span className={"primaryText"}>Easy to Contact</span>
                    <span className={"secondaryText"}>We always ready to help by providing the best services for you. <br/>
                        We believe in good place to live can make your life better</span>

                    <div className={"flexColStart contactModes"}>
                        <div className={"flexStart row"}>
                            {/* 1 mode */}
                            <div className={"flexColCenter mode"}>
                                <div className={"flexStart"}>
                                    <div className={"flexCenter icon"}>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className={"flexColStart detail"}>
                                        <span>Call</span>
                                        <span>+7 700 005 54 32</span>
                                    </div>
                                </div>
                                <div className={"flexCenter button"}>Call now</div>
                            </div>

                            {/* 3 mode */}
                            <div className={"flexColCenter mode"}>
                                <div className={"flexStart"}>
                                    <div className={"flexCenter icon"}>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className={"flexColStart detail"}>
                                        <span>Chat</span>
                                        <span>+7 700 005 54 32</span>
                                    </div>
                                </div>
                                <div className={"flexCenter button"}>Chat now</div>
                            </div>
                        </div>

                        <div className={"flexStart row"}>
                            {/* 2 mode */}
                            <div className={"flexColCenter mode"}>
                                <div className={"flexStart"}>
                                    <div className={"flexCenter icon"}>
                                        <BsFillCameraVideoFill size={25}/>
                                    </div>
                                    <div className={"flexColStart detail"}>
                                        <span>Video Call</span>
                                        <span>+7 700 005 54 32</span>
                                    </div>
                                </div>
                                <div className={"flexCenter button"}>Video Call now</div>
                            </div>

                            {/* 4 mode */}
                            <div className={"flexColCenter mode"}>
                                <div className={"flexStart"}>
                                    <div className={"flexCenter icon"}>
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className={"flexColStart detail"}>
                                        <span>Message</span>
                                        <span>+7 700 005 54 32</span>
                                    </div>
                                </div>
                                <div className={"flexCenter button"}>Message now</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"flexCenter contact-right"}>
                    <div className={"image-container"}>
                        <img src="./contact.jpg" alt="contact"/>
                    </div>
                </div>
            </div>
        </section>
    )
}