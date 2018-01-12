import React from 'react';
import TextInputBEM from 'ps-react-eltongarbin/TextInputBEM';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputBEM
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