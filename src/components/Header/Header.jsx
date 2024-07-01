import React from "react";
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header id="header" className="header">
				<h1 className="header__title" data-aos="fade-up">Hi, I am <a href="#about" className="header__link">Aneta Webbie</a>.</h1>
				<h2 className="header__desc" data-aos="fade-up">I'm a Full-stack Web Developer.</h2>
			</header>
		);
	}
}

export default Header;
