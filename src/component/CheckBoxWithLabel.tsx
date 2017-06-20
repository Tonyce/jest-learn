// Copyright 2004-present Facebook. All Rights Reserved.

import * as React from 'react';

interface OwnProps {
  labelOn: string;
  labelOff: string;
}
export type CheckboxWithLabelProps = OwnProps;
interface OwnState {
  isChecked: boolean;
}
export default class CheckboxWithLabel extends React.Component<OwnProps, OwnState> {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };

    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
