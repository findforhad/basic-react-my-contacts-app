import React from "react";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListContact extends React.Component {
  state = {
    query: ""
  };

  updateQuery = newQuery => this.setState({ query: newQuery });

  clearQuery = () => this.setState({ query: "" });

  render() {
    let showingContacts;
    if (this.state.query) {
      let match = new RegExp(escapeRegExp(this.state.query), "ig");
      showingContacts = this.props.contacts.filter(contact =>
        match.test(contact.name)
      );
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
          />
          {this.state.query !== "" ? (
            <button className="contact-remove" onClick={this.clearQuery} />
          ) : null}
        </div>

        {JSON.stringify(this.state)}

        <ol className="contact-list">
          {showingContacts.map(contact => {
            return (
              <li key={contact.id} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}
                />
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>
                <button
                  className="contact-remove"
                  onClick={() => this.props.removeContact(contact)}
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
