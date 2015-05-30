var Logo = React.createClass({displayName: "Logo",	
	render: function () {
		return (
			React.createElement("h1", {id: "logo"}, 
				React.createElement("a", {href: "index.html"}, this.companyName)
			)
		);
	}
});

React.render(React.createElement(Logo, {companyName: "Apple Store"}), document.getElementById('header'));