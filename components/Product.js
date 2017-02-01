const React = require('react');

class Product extends React.Component {
  render(){
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'egghell-white', 'salmon']).isRequired,
  weight: function (props, propName){
    var wght = props[propName]
    if (wght >= 80 && wght <= 300){
      var weightValidator = wght
    }
    if (!weightValidator) {
      console.error()
      return new Error("Weight is not valid")
    }
  }
}

// function weightValidator(props, propName){
//   var weight = props[propName]
//   if (weight < 80 || weight > 300){
//     return new Error("Weight is not valid")
//   }
// }

Product.defaultProps = {
  hasWatermark: false
}

module.exports = Product
