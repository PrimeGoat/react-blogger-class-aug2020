import React from 'react';

const Search = (props) => {
	return <div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginBottom: '40px'
	}}>
		<h2>Search blog by Subject:</h2>
		<form className="ui form">
					<div className="field">
						<input
							type="text"
							placeholder="Search by Subject"
							onChange={props.handleChange}
							value={props.searchTerm}
						/>
					</div>
				</form>
	</div>;
};

export default Search;
