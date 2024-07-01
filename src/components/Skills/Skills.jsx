import React from "react";
import './Skills.scss';
import SkillsItem from './SkillsItem.jsx';

class Skills extends React.Component {
	render() {
		return (
			<section id="skills" className="skills">
				<h2 className="heading" data-aos="fade-up">My skills</h2>
				<SkillsItem />
			</section>
		);
	}
}

export default Skills;
