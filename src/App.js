import React, { Component } from "react";
import TransformerCard from "./components/TransformerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import transformers from "./transformers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    transformers
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const transformers = this.state.transformers.filter(transformer => transformer.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ transformers });
  // };

shuffle() {
  console.log("hello");
    this.state.transformers.sort(function(a, b) {
      return 0.5 - Math.random();
    });
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.transformers.map(transformer => (
          <TransformerCard
            image={transformer.image}
            key={transformer.id}
            onClick={function(){console.log('hello')}}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
