import { useEffect, useState } from "react";
import { Link_a } from "./link";

export const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;

			if (offset > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	const closeMenu = () => {
		setIsVisible(true);
	};

	return (
		<header className={`header ${isSticky ? "header__sticky" : ""}`}>
			<Link_a
				href={"#"}
				className={"header__logo"}
				children={"Artur Szwemiński"}
			/>

			<div
				className={`bx ${isVisible ? "bx-menu" : "bx-x"} header__icon`}
				onClick={handleClick}></div>

			<nav className={`navbarMenu ${isVisible ? "" : "navbarMenu__a--active"}`}>
				<Link_a
					href={"#home"}
					className={"navbarMenu__a navbarMenu__a--active"}
					onClick={closeMenu}
					children={"Home"}
				/>
				<Link_a
					href={"#about"}
					className={"navbarMenu__a "}
					onClick={closeMenu}
					children={"About"}
				/>
				<Link_a
					href={"#projects"}
					className={"navbarMenu__a "}
					onClick={closeMenu}
					children={"Projects"}
				/>
				<Link_a
					href={"#contact"}
					className={"navbarMenu__a "}
					onClick={closeMenu}
					children={"Contact"}
				/>

				<span className="navbarMenu__span--active"></span>
			</nav>
		</header>
	);
};
