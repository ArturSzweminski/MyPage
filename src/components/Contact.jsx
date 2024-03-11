export const Contact = ()=>{
  return (
		<section className=" section contact" id="contact">
			<h2 className="section__heading">
				Contact <span>Me!</span>
			</h2>

			<form action="#" className="contact__form">
				<div className="contact__box">
					<div className="contact__field">
						<input
							className="contact__field__input"
							type="text"
							placeholder="Full Name"
							required
						/>
						<span className="contact__span--focus"></span>
					</div>

					<div className="contact__field">
						<input
							className="contact__field__input"
							type="text"
							placeholder="Email Adress"
							required
						/>
						<span className="contact__span--focus"></span>
					</div>
				</div>
				<div className="contact__box">
					<div className="contact__field">
						<input
							className="contact__field__input"
							type="number"
							placeholder="Mobile Number"
							required
						/>
						<span className="contact__span--focus"></span>
					</div>

					<div className="contact__field">
						<input
							className="contact__field__input"
							type="text"
							placeholder="Email Subject"
							required
						/>
						<span className="contact__span--focus"></span>
					</div>
				</div>
				<div className="contact__textarea">
					<textarea
						className="contact__textarea__input"
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Your Message"
						required></textarea>
					<span className="contact__span--focus"></span>
				</div>

				<div className="btn__box btn">
					<button type="submit" className="btn">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
}