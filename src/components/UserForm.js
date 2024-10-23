// UserForm.js
import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      const newUser = {
        id: Date.now(), // Unique ID for the user
        name,
        email,
        phone,
        status: true, // Default status, can change as needed
      };
      onAddUser(newUser); // Pass the new user to the parent component
      setName(""); // Reset the form
      setEmail("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;
