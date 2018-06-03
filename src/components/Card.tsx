import * as React from 'react';
import './Card.css';

export interface CardProps {
  suit: string;  
  number: number;
}

export interface CardState {
  flip: boolean;
}

export default class Card extends React.Component<CardProps, CardState> {
  constructor(props) {
    super(props);
    this.state = {
      flip: false
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    this.setState({
      flip: !this.state.flip
    });
  }

  renderSuitSymbols() {
    let content = [];
    let n = (this.props.number > 10 ? 1 : this.props.number);

    for (let i = 0; i < n; i++) 
      content.push(<span key={i} className="suit">{this.props.suit}</span>);
    return content;
  }

  render() {
    return <div className={`card${(this.state.flip ? ' flipped' : '')} ${this.props.suit} c${this.props.number}`} 
                onClick={this.flipCard}>
              <span className="num">{this.props.number}</span>
              <div className="content">{this.renderSuitSymbols()}</div>
           </div>;
  }
}