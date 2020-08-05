import React, { Component } from 'react';

class CreateBlog extends Component {
	constructor() {
		super();
		this.state = {
			blog: { objectId: Date.now(), title: '', author: '', subject: '', article: '' },
		};
	}

	handleChange = (event) => {
		let updatedBlog = { ...this.state.blog };
		updatedBlog[event.target.name] = event.target.value;

		this.setState(
			{
				blog: updatedBlog
			},
			() => {
				//console.log(this.state.blog);
			}
		)
	};

	handleSubmit = event => {
		event.preventDefault();

		let emptyBlog = { objectId: Date.now(), title: '', author: '', subject: '', article: '' };
		this.props.handleBlogSubmit(event, this.state.blog);

		this.setState(
			{
				blog: emptyBlog,
			}
		)
	}

	onDelete = (id) => {
		const updatedBlog = this.state.blogs.filter((item) => item.objectId !== id);

		this.setState({
			blogs: updatedBlog
		});
		console.log(`Delete ${id}`);
	};

	render() {
		return (
			<div style={{
				margin: '40px',
				paddingLeft: '30px',
				width: '100%'
			}}>
				<h2>Create Blog</h2>
				<form onSubmit={this.handleSubmit} className='ui form'>
					<div
						className='equal width fields'
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
							width: '50%'
						}}
					>
						<div className='field'>
							<label htmlFor='author'>Author:</label>
							<div className='ui fluid input'>
								<input
									type='text'
									name='author'
									onChange={this.handleChange}
									value={this.state.blog.author}
								/>
							</div>
						</div>
						<div className='field'>
							<label htmlFor='subject'>Subject:</label>
							<div className='ui fluid input'>
								<input
									type='text'
									name='subject'
									onChange={this.handleChange}
									value={this.state.blog.subject}
								/>
							</div>
						</div>
						<div className='field'>
							<label htmlFor='title'>Title:</label>
							<div className='ui fluid input'>
								<input
									type='text'
									name='title'
									onChange={this.handleChange}
									value={this.state.blog.title}
								/>
							</div>
						</div>
						<div className='field'>
							<label htmlFor='article'>Article:</label>
							<div className='ui fluid input'>
								<textarea
									name='article'
									id='article'
									cols='30'
									rows='10'
									onChange={this.handleChange}
									value={this.state.blog.article}
								></textarea>
							</div>
						</div>
					</div>
					<div className='field'>
						<button type='submit' className='ui button green'>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default CreateBlog;
