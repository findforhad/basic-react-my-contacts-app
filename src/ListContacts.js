import React from "react";

class ListContact extends React.Component {
  render() {
    return (
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
              <button className="contact-remove" />
            </li>
          );
        })}
      </ol>
    );
  }
}

export default ListContact;
