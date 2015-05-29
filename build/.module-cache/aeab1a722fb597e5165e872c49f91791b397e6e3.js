React.render(
  React.createElement("h1", {id: "logo"}, React.createElement("a", {href: "index.html"}, "Apple Store")),
  document.getElementById('header'), 
  function () {
  	console.log("Yo this rendered bro")
  }
);
