import React from "react";

const ListContact = props => (
  <ol className="contact-list">
    {props.contacts.map(contact => {
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
            onClick={() =>props.removeContact(contact)}
          />
        </li>
      );
    })}
  </ol>
);

export default ListContact;
