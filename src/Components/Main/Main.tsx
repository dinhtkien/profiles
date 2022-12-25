/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../static/Main.css";
interface MainProps {
    mode: string;
}
export default function Main(props: MainProps) {
    const [isMouseOver, setIsMouseOver] = React.useState({
        education: false,
        personalInfo: false,
        hobbies: false,
    });
    const [selectedCard, setSelectedCard] = React.useState({
        education: true,
        personalInfo: false,
        hobbies: false,
    })
    const [isShown, setIsShown] = React.useState({
        show1: false,
    })

    const [size, setSize] = React.useState({
        currentW: 0,
        currentH: 0
    });
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize({ currentW: window.innerWidth, currentH: window.innerHeight });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    console.log(size);
    return (
        <section id="main">
            <div className={"container-fluid " + props.mode}>
                <div className="row">
                    <div className={(size.currentW > 500) ? "col-3 " : "row " + props.mode}>
                        <div className={(size.currentW > 500) ? "row " : "col-4 "}>
                            <div className={"menu-item card "
                                + props.mode
                                + (isMouseOver.education ? " mouse-on" : " mouse-off")}
                                onMouseEnter={event => setIsMouseOver(prevState => { return { ...prevState, education: true } })}
                                onMouseLeave={event => setIsMouseOver(prevState => { return { ...prevState, education: false } })}
                                onMouseDown={event => setSelectedCard(
                                    preSelectedCard => { return { education: true, personalInfo: false, hobbies: false } })}
                            >
                                <span className="text-center">Education</span>
                            </div>
                        </div>
                        <div className={(size.currentW > 500) ? "row " : "col-4 "}>
                            <div className={"menu-item card d-flex justify-content-center " + props.mode
                                + (isMouseOver.personalInfo ? " mouse-on" : " mouse-off")}
                                onMouseEnter={event => setIsMouseOver(prevState => { return { ...prevState, personalInfo: true } })}
                                onMouseLeave={event => setIsMouseOver(prevState => { return { ...prevState, personalInfo: false } })}
                                onMouseDown={event => setSelectedCard(
                                    preSelectedCard => { return { education: false, personalInfo: true, hobbies: false } })}
                            >
                                <span className="text-center">Personal Info</span>
                            </div>
                        </div>
                        <div className={(size.currentW > 500) ? "row " : "col-4"}>
                            <div className={"menu-item card d-flex justify-content-center " + props.mode
                                + (isMouseOver.hobbies ? " mouse-on" : " mouse-off")}
                                onMouseEnter={event => setIsMouseOver(prevState => { return { ...prevState, hobbies: true } })}
                                onMouseLeave={event => setIsMouseOver(prevState => { return { ...prevState, hobbies: false } })}
                                onMouseDown={event => setSelectedCard(
                                    preSelectedCard => { return { education: false, personalInfo: false, hobbies: true } })}
                            >
                                <span className="text-center">Hobbies</span>
                            </div>
                        </div>
                    </div>
                    <div className={size.currentW > 500 ? "col-9 " : "col-12 " + props.mode}>
                        <div className="row">
                            <div className={"card " + props.mode}>
                                {selectedCard.education &&
                                    <>
                                        <h3>July 2017 to December 2022</h3>
                                        <h6>University Of Technology</h6>
                                        <ul>
                                            <li>Type: Formal Education</li>
                                            <li>Major: Electronic-Telecommunication</li>
                                            <li>Specialization: Embedded Programming</li>
                                        </ul>
                                        <hr className=""></hr>
                                        <h3>Secondary And High School</h3>
                                        <button type="button" className="btn btn-sm btn-info d-inline-block"
                                            onMouseDown={event => setIsShown(prevIsShownState => { return prevIsShownState.show1 ? { show1: false } : { show1: true } })}>Show</button>
                                        {isShown.show1 &&
                                            <>
                                                <h6>Le Quy Don Secondary School</h6>
                                                <ul>Location: Lam Dong Province</ul>
                                                <h6>Le Quy Don High School</h6>
                                                <ul>Location: Lam Dong Province</ul>
                                            </>
                                        }
                                    </>
                                }

                                {selectedCard.personalInfo &&
                                    <ul>
                                        <li>Date Of Birth: August 8th, 1999</li>
                                        <li>Place Of Birth: Lam Dong Province</li>
                                        <hr></hr>
                                        <li>Current Address: Binh Tan District, Ho Chi Minh City</li>
                                        <li>Phone Number: +84 869996250</li>
                                        <hr></hr>
                                        <li>Email: dinhtkien@gmail.com</li>
                                        <li><a href="https://www.facebook.com/dinhtkien1999">Facebook</a></li>
                                    </ul>
                                }
                                {selectedCard.hobbies &&
                                    <ul>
                                        <li>Learning New Things</li>
                                        <li>Reading Books</li>
                                        <li>Touring On Motorcycles</li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
