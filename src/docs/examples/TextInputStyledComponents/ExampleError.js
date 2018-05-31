import React from 'react';
import TextInputStyledComponents from 'ps-react-eltongarbin/TextInputStyledComponents';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="example-optional"
        label="First Name"
        name="firstName"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}
