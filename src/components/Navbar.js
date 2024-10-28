import '../assets/styles/Navbar.css';

function Navbar(){
    return(
        <div className='Navbar'>
            <button className='NavbarButton' >Search</button>
            <button className='NavbarButton' >Clear</button>
            <button className='NavbarButton' >Settings</button>
        </div>
        )
}

export default Navbar;