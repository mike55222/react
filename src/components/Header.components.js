import React from 'react';

class Header extends React.Component {
	render(){
		
		return(
			<div>
				<h1>title:{this.props.title} name:{this.props.name}</h1>
			</div>
		);
	}
}

export default Header;