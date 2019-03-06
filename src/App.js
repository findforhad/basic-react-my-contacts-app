import React from "react";
import ListContact from "./ListContacts";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg"
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        email: "tyler@reacttraining.com",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ]
  };

  removeContact = contact => {
    this.setState(oldState => ({
      contacts: oldState.contacts.filter(c => c.id !== contact.id)
    }));
  };

  render() {
    return (
      
        <ListContact
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
    );
  }
}

ListContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default App;
