var Logo = React.createClass({	
	render: function () {
		return (
			<h1 id="logo"><a href="index.html">{this.props.companyName}</a></h1>
		);
	}
});

React.render(<Logo companyName="Apple Store" />, document.getElementById('header'));