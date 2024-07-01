import React from "react";
import GithubIcon from '../../img/github.svg?react';
import LinkedinIcon from '../../img/linkedin.svg?react';
import InstagramIcon from '../../img/instagram.svg?react';

class SocialLinks extends React.Component {
	render() {
		return (
			<>
				<a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social__link" data-aos="flip-down"><GithubIcon /></a>			
				<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social__link" data-aos="flip-down"><LinkedinIcon /></a>
				<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social__link" data-aos="flip-down"><InstagramIcon /></a>
			</>
		);
	}
}

export default SocialLinks;
