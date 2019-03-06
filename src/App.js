import React from "react";
import ListContact from "./ListContacts";

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
      <div>
        <ListContact
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
