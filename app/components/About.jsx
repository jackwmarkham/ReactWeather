var React = require('react');

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
    <h3>About Component</h3>
  )
};

module.exports = About;
