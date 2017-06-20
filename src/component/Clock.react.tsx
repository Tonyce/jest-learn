// Copyright 2004-present Facebook. All Rights Reserved.

import * as React from 'react';

interface OwnState {
  seconds: number;
}

export default class Clock extends React.Component<{}, OwnState> {
  timerID: number = null;
  constructor() {
    super();

    this.state = { seconds: Date.now() / 1000 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      seconds: Date.now() / 1000,
    });
  }

  render() {
    return (
      <p>{this.state.seconds} seconds have ellapsed since the UNIX epoch.</p>
    );
  }
}
