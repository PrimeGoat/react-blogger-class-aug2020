import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import blogs from '../data/data';

class App extends Component {
	state = {blogs, searchTerm: ''};

	onDelete = (id) => {
		const updatedBlog = this.state.blogs.filter((item) => item.objectId !== id);

		this.setState({
			blogs: updatedBlog
		});
		console.log(`Delete ${id}`);
	};

	handleChange = event => {
		console.log(event.target.value);

		this.setState({
			searchTerm: event.target.value
		},
		() => {
			console.log(this.state.searchTerm);
		});
	};

	handleBlogSubmit = (event, blog) => {
		event.preventDefault();
		let updatedBlogs = [blog, ...this.state.blogs];

		this.setState({
			blogs: updatedBlogs
		}, () => {
			console.log(this.state.blogs);
		});
	};

	render() {
		return (
			<>
				<Header />
				<div
					style={{
						marginTop: '100px',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexDirection: 'row'
					}}
				>
				<div style={{
					width: "50%"
				}}>
					<Search
						searchTerm={this.state.searchTerm}
						handleChange={this.handleChange}
					/>
					<hr style={{
						width: '50%',
						color: 'black',
						margin: '50px auto 20px auto'
					}}/>
					<CreateBlog handleBlogSubmit={this.handleBlogSubmit} />
				</div>
				<div style={{
					width: '50%'
				}}>
					<Blogs
						searchTerm={this.state.searchTerm}
						blogs={this.state.blogs}
						onDelete={this.onDelete}
					/>
				</div>
				{/* {
					this.state.blogs.filter(searchIt(this.state.searchTerm))
					.map((blog) => {
						const { objectId, title, author, subject, article } = blog;
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
									<div className='description'>{article}</div>
								</div>
								<div>
									<button
										className='ui primary button'
										style={{ margin: '10px 15px' }}
										onClick={() => {
										this.onDelete(blog.objectId);
										}}
									>
									Delete
									</button>
								</div>
							</div>
						);
					})
				} */}
				</div>
			</>
		);
	}
}

export default App;
