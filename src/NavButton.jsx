import { Link, useNavigate } from "react-router-dom";

const NavButton = ({path, alt, desc}) => {
    let navigate = useNavigate()
    const routeChange = () => {
        let newpath = desc;
        navigate(newpath);
    }
    return (
        <button onClick={routeChange}>
            <img className="navbtn" src={path} alt={alt}></img>
        </button>
    );
}

export default NavButton;