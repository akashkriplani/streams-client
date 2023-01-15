import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // The parameter to the rednderInput method is formProps and we extract the input from it.
  // As an alternative, we can use formProps.input instead of just extracting the input field.
  // Console the parameter formProps to know more if you ever visit this page again
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
