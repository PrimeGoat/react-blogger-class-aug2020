import React from 'react';

const Button = ({ className, onClick, type, children, value }) => {
	return (
		<button
			type={type}
			className={className}
			style={{
				margin: '10px 15px'
			}}
			onClick={onClick}
		>
			{value ? value : children}
		</button>
	);
}

export default Button;
