import React from 'react';

class Cal extends React.Component {
	constructor(){
		super();
		this.state = {val1 :"66",val2 :"66"};
	}
	setVal1(e){
		const val1 =e.target.value;
		this.setState({val1 : val1});
	}
	setVal2(e){
		const val2 =e.target.value;
		this.setState({val2 : val2});
	}
	render(){
		var str1 = this.state.val1;
		var str2 = this.state.val2;
		var res = str1.concat(str2);
		return(
			<div>
				<div>val1:{str1} val2:{str2} ={res}</div>
				<input onChange={this.setVal1.bind(this)} />
				<input onChange={this.setVal2.bind(this)} />
			</div>
		);
	}
}

export default Cal;