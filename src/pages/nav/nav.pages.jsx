import { NavLink } from 'react-router-dom'
const Nav = () => {
    let activeStyle = {
        color: "#F3BF99",
    };
    return (
        <div>
        <nav className='nav--div'> 
                <div className='navlink-div'>✦ <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined}>MAIN PAGE</NavLink></div>
                <div className='navlink-div'>✦ <NavLink to={'/about'} style={({ isActive }) => isActive ? activeStyle : undefined}>ABOUT US</NavLink> </div>
                <div className='navlink-div'>✦ <NavLink to={'/students'} style={({ isActive }) => isActive ? activeStyle : undefined}>STUDENTS</NavLink> </div>
                <div className='navlink-div'>✦<NavLink to={'/teachers'} style={({ isActive }) => isActive ? activeStyle : undefined}>TEACHERS</NavLink></div>
        </nav>
        <hr></hr>
        </div>
    
    );
}

export default Nav;