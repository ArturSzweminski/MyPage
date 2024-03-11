export const Techstack = ({classnameDiv='techstack__icon' ,classNameI='techstack__icon--solo', classNameII=''})=>{
  return (
		<div className={classnameDiv}>
			<i className={`${classNameI} bx ${classNameII}`}></i>
		</div>
	);
}