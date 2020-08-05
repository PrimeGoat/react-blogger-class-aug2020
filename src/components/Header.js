import React from 'react'

function Header() {
	const style = {
		height: "160px",
		background: '#447f33',
		paddingTop: '50px',
		color: 'white'
	};

	return (
		<header style={style}>
			<h1 style={{
				textAlign: 'center',
				fontSize: '3em'
			}}>
				Blogger
			</h1>
		</header>
	);
}

export default Header;
