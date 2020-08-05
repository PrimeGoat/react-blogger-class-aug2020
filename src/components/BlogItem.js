import React from 'react';
import Button from './Button';

const BlogItem = (props) => {
	const {title, author, subject, article, objectId} = props.blog;

	return (
		<div
			key={objectId}
			className='ui card'
			style={{ width: '75%', padding: '20px' }}
		>
			<div className='content'>
				<div className='header'>{title}</div>
				<br />
				<div className='meta'>Author: {author}</div>
				<br />
				<div className='meta'>Subject: {subject}</div>
				<hr />
				<div className='description' style={{
					whiteSpace: 'pre-wrap'
				}}>{article}</div>
			</div>
			<div>
				<Button
					value="Delete"
					className='ui primary button'
					style={{ margin: '10px 15px' }}
					onClick={() => {
						props.onDelete(objectId);
					}}
				/>
				<Button
					className='ui primary button'
					style={{ margin: '10px 15px' }}
					onClick={() => {
						console.log(objectId);
					}}
				>
					Update
				</Button>
			</div>
		</div>
	)
}

export default BlogItem;
