import React from "react";

class ContactList extends React.Component {
  render() {
    const peoples = this.props.contacts;
    return (
        <ol>
            {peoples.map(people => {
                return <li>{people.name}</li>
            })}
        </ol>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ContactList
          contacts={[
            { name: "Ryan" },
            { name: "Tailer" },
            { name: "Reachard" }
          ]}
        />
        <ContactList
          contacts={[{ name: "Babu" }, { name: "Forhad" }, { name: "Hossein" }]}
        />
      </div>
    );
  }
}

export default App;
