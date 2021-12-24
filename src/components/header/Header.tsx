import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div>
           <Link to="/home">home</Link>
           <Link to="/about">about</Link>
        </div>
    )
}
