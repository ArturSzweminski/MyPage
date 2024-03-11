import picture from "../img/zdjeciekwadrat.png";
export const Home = () => {
	return (
		<section className="section home " id="home">
			<div className="home__container">
				<div className="home__content">
					<h1 className="home__content--title">Hi, I'm Artur </h1>
					<div className="home__text">
						<h3 className="home__text--h3">Frontend Developer</h3>
					</div>
					<p className="home__text--p">
						A passionate frontend developer dedicated to crafting engaging and
						user-friendly web experiences.
					</p>
				</div>
				<div className="home__socials">
					<a href="#" className="home__socials--a">
						<i className="bx bxl-linkedin"></i>
					</a>
					<a href="#" className="home__socials--a">
						<i className="bx bxl-github"></i>
					</a>
				</div>
				<img src={picture} alt="Artur Szwemiński" className="home__img" />
			</div>
		</section>
	);
};
