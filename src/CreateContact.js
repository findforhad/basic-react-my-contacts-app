import React from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContact extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = serializeForm(e.target, { hash: true });
    this.props.onCreateContact(value);
  };
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/" />
        <form className="create-contact-form" onSubmit={this.handleSubmit}>
          <ImageInput
            className="create-contact-avatar-input"
            maxHeight={68}
            name="avaterInput"
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
