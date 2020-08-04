import React, { Component } from 'react';

let blogs = [
  {
    title: 'Is Ebola Worse?',
    author: 'John Peters',
    subject: 'news',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

    objectId: '1'
  },
  {
    title: 'What to do in isolation',
    author: 'Wanda Simon',
    subject: 'news',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

    objectId: '2'
  },
  {
    title: 'My Plants are Dying',
    author: 'Lucy Grand',
    subject: 'outdoors',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

    objectId: '3'
  },
  {
    title: 'Stuck in A Room',
    author: 'Burke Ginsen',
    subject: 'news',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

    objectId: '4'
  },
  {
    title: 'Outside My Window',
    author: 'Laura Nivers',
    subject: 'outdoors',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

    objectId: '5'
  }
];

function searchIt(term) {
	return function(item) {
		return item.subject.toLowerCase().includes(term.toLowerCase());
	}
}

class Blogs extends Component {
	state = { blogs, searchTerm: '' };

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

	render() {
		return (
		<div
			style={{
				marginTop: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}
		>

		<form className="ui form">
			<div className="field">
				<input
					type="text"
					placeholder="Search by Subject"
					onChange={this.handleChange}
				/>
			</div>
		</form>

		{
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
		}
		</div>
		);
	}
}

export default Blogs;
