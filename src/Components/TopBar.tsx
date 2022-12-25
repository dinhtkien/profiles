import "../static/TopBar.css"

interface TopBarProps {
    mode: String;
    SwitchStateHandler: Function;
}
export default function TopBar(props: TopBarProps) {
    console.log("topbar");
    return (
        <section id="top-bar">
            <div className={"container-fluid " + props.mode}>
                <div className="row">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={props.mode==="light"?"/images/k-logo.png":"/images/k-logo1.png"} alt="logo"></img>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <h3 className={"d-inline-block "+ (props.mode === "light"?"text-dark":"text-light")}>Kien's Profile</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="form-check form-switch d-inline-block">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" 
                            onChange={(event) => {props.mode==="light"?props.SwitchStateHandler("dark"):props.SwitchStateHandler("light")}}
                            ></input>
                            <label className={"form-check-label " + (props.mode === "light"?"text-dark":"text-light")} htmlFor="flexSwitchCheckDefault">
                                {props.mode === "light"?"Light":"Dark"} Mode</label>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}