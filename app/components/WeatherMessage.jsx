var React = require('react');
//
// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <p>It is {temp} degrees C in {location}</p>
//       </div>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p className="text-center">It is {temp} C in {location}</p>
    </div>
  );
};

module.exports = WeatherMessage;
