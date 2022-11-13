import Burger from './Burger.jsx'

const Navbar = () => {
    return (
        <div className="navbar">
            <img className='poke-logo' src="https://sg.portal-pokemon.com/img/common/logo.png" alt="Pokemon" />
            <Burger />
        </div>
    );
};

export default Navbar;