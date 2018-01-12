import React from 'react';
import TextInputCSSModules from 'ps-react-eltongarbin/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-optional"
        label="First Name"
        name="firstName"
        onChange={() => { }}
        required
        error="First name is required."
      />
    )
  }
}