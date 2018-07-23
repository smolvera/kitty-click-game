import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Card from "./components/Card/Card";
import Navbar from "./components/NavBar/NavBar";
import Game from "./components/Game/Game";

class App extends Component {

  state = {
    
    guesses: [],
    score: 0,
    hiScore: 0
  };

  clickCard = card => {
    let guesses = this.state.guesses;
    let score = this.state.score;
  

  if (guesses[card.id]) {
    this.setState({
      hiScore: Math.max(this.state.score, this.state.hiScore),
      guesses: [],
      score: 0,
    })
  } else {
    guesses[card.id] = true;
    this.setState({
      guesses: guesses,
      score: ++score,
    })
  }
};

  render() {
    return <div>
      <Navbar guesses={this.state.guesses} score={this.state.score} hiScore={this.state.hiScore} />
      <Game>
        {cards
        .sort((a, b) => Math.random())
        .map(card => (
          <Card
          clickCard = {this.clickCard}
          id = {card.id}
          key = {card.id}
          image = {card.image}
          />
        ))}
        </Game>
      </div>
  }
}

export default App;

