import React from "react";
import './Portfolio.scss';
import PortfolioItem from './PortfolioItem.jsx';

class Portfolio extends React.Component {
	render() {
		return (
			<section id="portfolio" className="portfolio">
				<h2 className="heading" data-aos="fade-up">My portfolio</h2>
				<div className="portfolio__container">
					<PortfolioItem />
				</div>
			</section>
		);
	}
}

export default Portfolio;
