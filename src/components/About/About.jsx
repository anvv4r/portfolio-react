import React from "react";
import './About.scss';

class About extends React.Component {
	render() {
		return (
			<section id="about" className="about">
				<h2 className="heading" data-aos="fade-up">About me</h2>
				<img src={("img/mountain-2582947_640.png")} alt="aneta-webbie" className="about__img" data-aos="fade-right" />
				<div className="about__desc" data-aos="fade-left">
					<p><strong>My name is Aneta Webbie.</strong> I am a full-stack web developer and enjoy learning new trends. <strong>I am developing user interfaces in JavaScript and React and backend of my projects in PHP and Laravel.</strong></p>
					<p>I am open to learning new technologies and enjoy working with people <span className="about__desc--underline">who are as passionate about all web-related as me</span>.</p>
					<p>I have worked for clients all across the world but currently I am based in Prage, Czech Republic.</p>
					<p>I like cats, gaming, and snowboarding. If I do not develop, you can also meet me trekking in the mountains.</p>
					<h4 className="about__cta">Get in touch and let's do something great together.</h4>
					<a href="#contact" className="button">Contact me</a>
				</div>
			</section>
		);
	}
}

export default About;
