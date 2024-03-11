import { CardProject } from "./CardProjects";

export const Projects = ()=>{
  return (
		<section className=" section projects" id="projects">
			<h2 className="section__heading">Projects</h2>

			<div className="projects__cards">
				<CardProject
					link={"../Projects/Exchange/index.html"}
					number={"one"}
					text={`	A currency exchange application operates on an API, fetching
										real-time currency exchange rates from global financial
										markets.`}
					title={`Exchange Rate App`}
				/>
				<CardProject
					link={"../Projects/BillSplitter/index.html"}
					number={"two"}
					text={`	An easy-to-use app for quick and precise bill
										splitting with tips among friends or groups, streamlining
										the payment process effortlessly.`}
					title={`BillSplitter`}
				/>
				<CardProject
					link={"../Projects/CountdownOfDays/index.html"}
					number={"three"}
					text={`DaysCounter is a handy app that calculates the number of days
									from the current moment to a specified date.`}
					title={`DaysCounter`}
				/>
				<CardProject
					link={"../Projects/ListToDo/index.html"}
					number={"four"}
					text={`ListToDo is a helpful tool to manage your tasks easily. You
									can make, organize, and keep track of your to-do lists in a
									simple way, making your daily tasks more organized and
									productive.`}
					title={`List ToDo`}
				/>
			</div>
		</section>
	);
}