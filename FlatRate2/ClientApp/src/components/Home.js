import React, { Component } from 'react';

import { Line } from './line';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
        <Line/>
      </>
    );
  }
}
