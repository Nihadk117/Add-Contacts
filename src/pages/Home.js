import React from "react";
import Contacts from "../components/Contacts";
import Form from "../components/Form";

function Home({ formSuba, contacts, deleteContact, favToggle }) {
     console.log(contacts);
  return (
    <div className="container my-5">
      <div className="row justify-content-sm-center my-5">
        <Form formSubb={formSuba} contacts={contacts} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {contacts.map((singleContact) => {
          return (
            <Contacts
              key={singleContact.id}
              contact={singleContact}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          );
        })}
        {contacts.lenght===0 && <div> NO CONTACT TO SHOW</div>}
      </div>
    </div>
  );
}

export default Home;
