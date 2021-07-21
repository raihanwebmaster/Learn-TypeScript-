import React, { useState } from "react";
import Contact, { ContactDemo } from "./Contact";

interface IContact {
  name: string;
  email: string;
}
const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);
  const onClick = () => {
    setContactList([...contactList, contact]);
    setContact({
      name: "",
      email: "",
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

    const handelRemove = (email: string) => {
      const newContactList = contactList.filter(c => c.email !== email)
      setContactList(newContactList)
    }
  return (
    <div>
      <h1>Contact List</h1>
      <div className="form"> 
        <input
          onChange={onChange}
          type="text"
          value={contact.name}
          name="name"
          placeholder="Contact Name"
        />
        <input
          onChange={onChange}
          type="text"
          value={contact.email}
          name="email"
          placeholder="Contact Email"
        />
        <button onClick={onClick}>Add</button>
      </div>
      {contactList.map((contact) => (
        <Contact key={contact.name} name={contact.name} email={contact.email} handelRemove={handelRemove} />
      ))}
    </div>
  );
};

export default Contacts;
