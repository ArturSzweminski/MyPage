import "../styles/styles.scss";
import ScrollHandler from "./scroll";

import { Techstack } from "./techstack";
import { CardProject } from "./CardProjects";
import { About } from "./About";
import { Home } from "./Home";
import { Projects } from "./Projects";
export const Main = () => {


	
	return (
		<>
			<div className="wrapper">
				<ScrollHandler />
			<Home/>
      <About/>
      <Projects/>
				

				
				
				
			</div>
		</>
	);
};
