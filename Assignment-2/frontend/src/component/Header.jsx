import { Link } from "react-router-dom";
import Home from "./Home";

function Header(){

    return (
        <>
        <header>
            <ul style={{display: "flex",gap:"10px",textDecoration: "none", listStyleType: "none", backgroundColor: "burlywood", margin:"10px", padding: "20px"}}>
            <li><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></li>
            <li><Link to="/work" style={{textDecoration:"none",color:"black"}}>Work</Link></li>
        </ul>
        </header>
        </>
    )
}
export {Header};