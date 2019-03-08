import React from "react";
import { Link } from "react-router-dom";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListContact extends React.Component {
  state = {
    query: ""
  };

  updateQuery = newQuery => this.setState({ query: newQuery });

  clearQuery = () => this.setState({ query: "" });

  render() {
    const { query } = this.state;
    const { removeContact, contacts } = this.props;

    let showingContacts;
    if (query) {
      let match = new RegExp(escapeRegExp(this.state.query), "ig");
      showingContacts = contacts.filter(contact => match.test(contact.name));
    } else {
      showingContacts = this.props.contacts;
    }
    showingContacts.sort(sortBy("name"));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
            placeholder="Search Contacts"
          />
          <Link to="/create" className="add-contact" />
        </div>

        {/* {JSON.stringify(this.state)} */}

        {showingContacts.length !== contacts.length ? (
          <div className="showing-contacts">
            Showing {showingContacts.length} of {contacts.length} total.
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        ) : null}

        <ol className="contact-list">
          {showingContacts.map(contact => {
            return (
              <li key={contact.id} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL || contact.avaterInput})`
                  }}
                />
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>
                <button
                  className="contact-remove"
                  onClick={() => removeContact(contact)}
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ListContact;
