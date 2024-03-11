import { Techstack } from "./techstack";

export const CardProject = ({ number, title, text,link='' }) => {
	return (
		<div className="project__card">
			<a href={link}>
				<div className={`project__img  ${number}`}></div>
				<div className="card__text ">
					<h3 className="card__h3">{title}</h3>
					<p className="card__paragraph">{text}</p>
					<div className="card__techstack">
						<Techstack
							classnameDiv="techstack_icon_projects"
							classNameI="icon_proj"
							classNameII="bxl-html5"
						/>
						<Techstack
							classnameDiv="techstack_icon_projects"
							classNameI="icon_proj"
							classNameII="bxl-css3"
						/>
						<Techstack
							classnameDiv="techstack_icon_projects"
							classNameI="icon_proj"
							classNameII="bxl-javascript"
						/>
					</div>
				</div>
			</a>
		</div>
	);
};
