import React from "react";
import PropTypes from "prop-types";
import { getAll, remove, create } from "./utils/ContactAPI";
import ListContact from "./ListContacts";
import CreateContact from "./CreateContact";

class App extends React.Component {
  state = {
    contacts: [],
    screen: "list"
  };

  async componentDidMount() {
    await getAll().then(contacts => this.setState({ contacts }));
  }

  removeContact = async contact => {
    this.setState(oldState => ({
      contacts: oldState.contacts.filter(c => c.id !== contact.id)
    }));
    await remove(contact);
  };

  render() {
    return (
      <div>
        {this.state.screen === "list" && (
          <ListContact
            contacts={this.state.contacts}
            removeContact={this.removeContact}
            navigateToCreate={() => this.setState({screen: "create" })}
          />
        )}
        {this.state.screen === "create" && <CreateContact />}
      </div>
    );
  }
}

ListContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default App;
