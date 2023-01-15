import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // The parameter to the rednderInput method is formProps and we extract the input from it.
  // As an alternative, we can use formProps.input instead of just extracting the input field.
  // Console the parameter formProps to know more if you ever visit this page again
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    // Anytime a prop like label is passed to the Field component from redux-form package,
    // It does not know how to make use of it, so it passes that prop (in this case, label)
    // as a parameter to the renderInput method.
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
      </form>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
