import { NavLink } from 'react-router';
export const NavBar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/">Principal</NavLink>
                </li>
                <li>
                    <NavLink to="/my-collection">Mi Coleccion</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Acerca de</NavLink>
                </li>
            </ul>
        </nav>
    )
}