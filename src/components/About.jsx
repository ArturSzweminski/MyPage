import { Techstack } from "./techstack";

export const About = ()=>{
  return (
		<section className=" section about" id="about">
			<h2 className="section__heading">
				About <span className="section__span">Me</span>
			</h2>

			<div className="about__container">
				<div className="about__content">
					<h3 className="about__content--h3">Introduction</h3>
					<p className="about__content--p">
						A frontend developer with a strong command of the fundamentals,
						dedicated to ongoing learning. Notable strengths include meticulous
						attention to detail and collaborative teamwork. Continuously seeking
						to expand knowledge and contribute to innovative projects in the
						dynamic field of web development.
					</p>
					<div className="btn__box ">
						<a href="#" className="btn">
							MY RESUME
						</a>
					</div>
				</div>
				<div className="techstack__container">
					<h3 className="techstack__h3">TechStack</h3>
					<div className="techstack__box">
						<Techstack classNameII="bxl-html5" />
						<Techstack classNameII="bxl-css3" />
						<Techstack classNameII="bxl-javascript" />
						<Techstack classNameII="bxl-react" />
						<Techstack classNameII="bxl-typescript" />
						<Techstack classNameII="bxl-github" />
						<Techstack classNameII="bxl-git" />
						<Techstack classNameII="bxl-visual-studio" />
						<Techstack classNameII="bxl-discord-alt" />
						<Techstack classNameII="bxl-sass" />
						<Techstack classNameII="bxl-bootstrap" />
						<Techstack classNameII="bxl-redux" />
					</div>
				</div>
			</div>
		</section>
	);
}