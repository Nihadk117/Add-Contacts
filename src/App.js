
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";


function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const contactsFormServer = await fetchContacts();
      setContacts(contactsFormServer);
    };
    getContacts();
  }, []);

  const formSub = async (data) => {
    const res = await fetch("http://localhost:3004/contacts", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newdata = await res.json();
    if (res.ok) {
      setContacts([...contacts, newdata]);
      console.log(data);
    }
  };

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();
    return data;
  };
  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    if (res.status===200) {
      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
    }
  };

  const getCon = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();
    return data;
  };
  const favToggle = async (id) => {
    const favCon = await getCon(id);
    const updTask = {...favCon, fav: !favCon.fav };
    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    if (res.ok) {
      let favedContact = contacts.map((singleContact) => {
        return singleContact.id === id
          ? { ...singleContact, fav: !singleContact.fav }
          : singleContact;
      });
      setContacts(favedContact);
    }
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              formSuba={formSub}
              contacts={contacts}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          }
        />
        <Route
          path="/favourite"
          element={
            <Fav
              contacts={contacts}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
