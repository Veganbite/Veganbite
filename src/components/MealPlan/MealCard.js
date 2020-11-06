import React from 'react';
import './MealCard.css';

class MealCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span>&#9733;</span>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default MealCard;
