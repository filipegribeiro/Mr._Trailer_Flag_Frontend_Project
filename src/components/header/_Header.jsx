import React, { useRef, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png'; /* mudar aqui a foto de logo */

const Header = () => {
	const headerRef = useRef(null);

	useEffect(() => {
		const shrinkHeader = () => {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		};
		window.addEventListener('scroll', shrinkHeader);
		return () => {
			window.removeEventListener('scroll', shrinkHeader);
		};
	}, []);

	return (
		<div ref={headerRef}>
			<div className='header'>
				<div className='header__wrap container'>
					<div className='logo'>
						<img src={logo} alt='' />
						<Link to='/'>Mr. Movie</Link>
					</div>
					<ul className='header__nav'>
						<li>
							<NavLink to='/home'>Home</NavLink>
						</li>

						<li>
							<NavLink to='/movies'>Movies</NavLink>
						</li>

						<li>
							<NavLink to='/tvseries'>Tv Series</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;

/* Navlink já trás encapsulada lógica para active link através da inclusão de classe */

/* <nav>

	<ul className='navbar__menu'>
		<li>
			<NavLink to='/about'>About</NavLink>
		</li>

		<li>
			<NavLink to='/team'>Team</NavLink>
		</li>

		<li>
			<NavLink to='/services'>Services</NavLink>
		</li>

		<li>
			<NavLink to='/blog'>Blog</NavLink>
		</li>

		<li>
			<NavLink to='/contacts'>Contacts</NavLink>
		</li>
	</ul>
</nav>; */
