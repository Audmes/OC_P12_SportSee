import logo from "../assets/images/logo.svg";
import Nav from "./Nav";

/**
 * Render the Header with a logo and a navbar
 * The user's profile page is determined by the userToggle state in the Context
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}