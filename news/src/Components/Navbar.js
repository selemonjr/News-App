import {Link} from "react-router-dom";
import {useState,useEffect} from "react";
const Navbar = () => {
    const [rotate,SetRotate] = useState(false);
    const Open = () => {
        SetRotate(!rotate)
    }
    const [show,SetShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 10) {
                SetShow(true)
            } else {
                SetShow(false)
            }
        });
    },[])
    return (
        <div className="navbarSection">
            <div className={show ? "navbarDark" : "navbar"}>
                <div className="navbarLogo"><h2><span className="logoRed">i</span>News</h2></div>
                <div className="navbarLinks">
                <ul className={rotate ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">All</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/science">Science</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/entertainment">Entertainment</Link></li>
                    <li><Link to="/health">Health</Link></li>
                    <li><Link to="/business">Business</Link></li>
                </ul>
                </div>
                <div id="navbarButton" onClick={Open} className={rotate ? "change" : ".box1,.box2,.box3 "}>
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
