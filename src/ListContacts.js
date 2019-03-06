import React from "react";

class ListContact extends React.Component {
  state = {
    query: ""
  };
  updateQuery = newQuery => this.setState({ query: newQuery });
  render() {
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {JSON.stringify(this.state)}
        <ol className="contact-list">
          {this.props.contacts.map(contact => {
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
