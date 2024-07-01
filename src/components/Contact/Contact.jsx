import React from "react";
import './Contact.scss';

class Contact extends React.Component {
	render() {
		return (
			<section id="contact" className="contact">
				<h2 className="heading" data-aos="fade-up">Contact me</h2>
				<form className="form" data-aos="fade-up">
					<input type="text" name="first-name" placeholder="First Name *" className="form__input" />
					<input type="text" name="last-name" placeholder="Last Name *" className="form__input" />
					<input type="email" name="email" placeholder="Email *" className="form__input" />
					<input type="text" name="phone" placeholder="Phone" className="form__input" />
					<label className="form__label">My message *</label>
					<textarea rows="6" className="form__textarea"></textarea>
					<button className="form__button">Send my message</button>
				</form>
			</section>
		);
	}	
}

export default Contact;
