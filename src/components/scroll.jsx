import React, { useEffect, useState } from "react";

const ScrollHandler = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			const navLinks = document.querySelectorAll(".navbarMenu__a");
			let top = window.scrollY;

			sections.forEach((sec) => {
				let offset = sec.offsetTop - 100;
				let height = sec.offsetHeight;
				let id = sec.getAttribute("id");

				if (top >= offset && top < offset + height) {
					
					navLinks.forEach((links) => {
						links.classList.remove("navbarMenu__a--active");
					});
					document
						.querySelector(`header nav a[href*="${id}"]`)
						.classList.add("navbarMenu__a--active");

					// active sections for animation on scroll
					setActiveSection(id);
				}
				
				else {
					sec.classList.remove("show-animate");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); 

	return (
		<div>
			
			
		</div>
	);
};

export default ScrollHandler;
