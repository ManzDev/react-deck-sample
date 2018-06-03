import * as React from 'react';
import shuffle from 'lodash.shuffle';
import Card from "./Card";
import './Deck.css';

export interface DeckProps {
  back: string,
  shuffle: boolean;
}

export interface DeckState {
  cards: [string, number][];
}

export default class Deck extends React.Component<DeckProps, DeckState> {
  constructor(props) {
    super(props);

    const suits = ['♠️', '♥️', '♦️', '♣️'];
    this.state = {
      cards: []
    };

    for (let i = 0; i < 4; i++) 
      for (let j = 0; j < 13; j++) 
        this.state.cards.push([suits[i], j]);
    
    if (this.props.shuffle)
      this.shuffleCards();
  }

  shuffleCards() {
    this.state = {
      cards: shuffle(this.state.cards)
    };
  }

  generateMaze() {
    const result = [];
    for (let i = 0; i < this.state.cards.length; i++)
      result.push(<Card suit={this.state.cards[i][0]} key={i} number={this.state.cards[i][1]+1}/>);
    return result;
  }

  render() {
    return <div className={`deck ${this.props.back}`}>{this.generateMaze()}</div>;
  }  
}