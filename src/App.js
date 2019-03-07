import React from "react";
import { getAll, remove, create } from "./utils/ContactAPI";
import ListContact from "./ListContacts";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    contacts: []
  };

  async componentDidMount() {
    await getAll().then(contacts => this.setState({ contacts }));
  }

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
