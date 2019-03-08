import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { getAll, remove, create } from "./utils/ContactAPI";
import ListContact from "./ListContacts";
import CreateContact from "./CreateContact";

class App extends React.Component {
  state = {
    contacts: []
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

  createContact = async contact => {
    await create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat(contact)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListContact
              contacts={this.state.contacts}
              removeContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          component={({ history }) => (
            <CreateContact
              onCreateContact={contact => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

ListContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default App;
