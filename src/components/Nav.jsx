import React, { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			console.log(window.scrollY)
			if(window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		})

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return (<nav className={`nav ${show && "nav__black"}`}>
			<img
				src="https://about.netflix.com/images/logo.png"
				alt="Netflix logo"
				className='nav__logo'
				onClick={() => window.location.reload()}
			/>
			<img
				src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
				alt="User logged"
				className='nav__avatar'
			/>
		</nav>
	)
}


