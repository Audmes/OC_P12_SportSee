import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Context } from '../context/Context';

const Nav = () => {
    const { userToggle } = useContext(Context);
	const userId = userToggle ? 18 : 12;

    return (
        <div className='header__nav'>
            <nav className="nav-header">
                <NavLink to="/" className="nav-header__nav-link-home">
                    Accueil
                </NavLink>
                <NavLink to={`/profile/${userId}`} className="nav-header__nav-link-profil">
                    Profil
                </NavLink>
                <NavLink to="/settings" className="nav-header__nav-link-settings">
                    Réglage
                </NavLink>
                <NavLink to="/community" className="nav-header__nav-link-community">
                    Communauté
                </NavLink>
            </nav>
        </div>
    );
};

export default Nav;