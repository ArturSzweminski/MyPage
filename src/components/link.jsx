export const Link_a = ({href,className='',onClick,children})=>{
  return (
		<a
			href={href}
			className={className}
			onClick={onClick}>
			{children}
		</a>
	);
}