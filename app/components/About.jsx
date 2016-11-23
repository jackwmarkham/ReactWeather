var React = require('react');
var {Link} = require('react-router');
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

//Stateless functional component: Useable when there is not state, liek for simple presentational components. Aalso employed arrow function to further simplify the syntax.

var About =  (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple react app for demonstrating API calls and basic routing in React.<br/> </p>
      <p>
        Made by <a href="http://jackmarkham.herokuapp.com/">Jack Markham.</a><br/>
        Source code available on <a href="https://github.com/jackwmarkham/ReactWeather">GitHub</a>
    </p>
    </div>
  )
};

module.exports = About;
