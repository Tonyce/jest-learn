// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import * as TestUtils from 'react-addons-test-utils';
// import CheckboxWithLabel, { CheckboxWithLabelProps } from '../../src/component/CheckboxWithLabel';

// it('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = TestUtils.renderIntoDocument(
//     <CheckboxWithLabel labelOn="On" labelOff="Off" />
//   ) as React.Component<CheckboxWithLabelProps, {}>;

//   const checkboxNode = ReactDOM.findDOMNode(checkbox);

//   // Verify that it's Off by default
//   expect(checkboxNode.textContent).toEqual('Off');

//   // Simulate a click and verify that it is now On
//   TestUtils.Simulate.change(
//     TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
//   );
//   expect(checkboxNode.textContent).toEqual('On');
// });


/**
 * enzyme
 */

import * as React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../../src/component/CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
