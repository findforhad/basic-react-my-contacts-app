import React from "react";

class ListContact extends React.Component {
  render() {
    return (
      <ol>
        {this.props.contacts.map(contact => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ol>
    );
  }
}

export default ListContact;
