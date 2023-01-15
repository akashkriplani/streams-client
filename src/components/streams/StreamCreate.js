import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // The parameter to the rednderInput method is formProps and we extract the input from it.
  // As an alternative, we can use formProps.input instead of just extracting the input field.
  // Console the parameter formProps to know more if you ever visit this page again
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // Anytime a prop like label is passed to the Field component from redux-form package,
    // It does not know how to make use of it, so it passes that prop (in this case, label)
    // as a parameter to the renderInput method.
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export const validate = (formValues) => {
  const errors = {};

  // The 'name' property on the Field component should be used in the error object in order to
  // show the error message
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamCreate', validate: validate })(StreamCreate);
