import React, { Component } from "react";
import Boxes from "./components/boxes";

import _ from "lodash";
class App extends Component {
  state = {
    boxes: "",
    selectedBox: "",
    score: "",
  };
  componentDidMount() {
    this.setState({ boxes: _.range(1, 17, 1) });
  }
  handleStart = () => {
    this.setState({
      selectedBox: _.random(1, 16),
      boxes: _.range(1, 17, 1),
      score: 0,
    });
  };

  handleStop = () => {
    this.setState({ boxes: "" });
  };
  handleBoxClick = (box) => {
    const { selectedBox, score } = this.state;
    const nextBox = _.random(1, 16);
    if (box === selectedBox) {
      this.setState({ selectedBox: nextBox, score: score + 5 });
    } else {
      this.setState({ score: score - 2 });
    }
  };

  render() {
    return (
      <div className="container" style={{ width: "40%" }}>
        <button className="btn btn-primary m-2" onClick={this.handleStart}>
          Start
        </button>
        <button className="btn btn-danger m-2" onClick={this.handleStop}>
          Stop
        </button>

        <button
          className="btn btn-warning"
          style={{ float: "right ", pointerEvents: "none" }}
        >
          Score :<span className="badge badge-light">{this.state.score}</span>
        </button>

        <Boxes
          boxes={this.state.boxes}
          selectedBox={this.state.selectedBox}
          onBoxClick={this.handleBoxClick}
          score={this.state.score}
        />
      </div>
    );
  }
}

export default App;
