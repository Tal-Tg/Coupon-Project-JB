
import "./Navbar.css";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({toggle}:any) => {
    return (
        <>
            <Nav>
                
                        <NavIcon onClick={toggle}>
                  
                    <Bars/>
                    </NavIcon>
                    
            </Nav>
        </>
    );
}

export default Navbar;
