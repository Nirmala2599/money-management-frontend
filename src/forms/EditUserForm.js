import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.title && user.roll && user.amount && user.category && user.description && user.date) props.updateUser(user);
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form>
       <label>Title</label>
      <input
        className="u-full-width"
         type="text"
        value={user.title}
        name="title"
        onChange={handleChange}
      />
      <label>Roll</label>
      <input
        className="u-full-width"
        type="text"
        value={user.roll}
        name="roll"
        onChange={handleChange}
      />
       <label>Amount</label>
      <input
        className="u-full-width"
        type="text"
        value={user.amount}
        name="amount"
        onChange={handleChange}
      />
      <label>Category</label>
      <input
        className="u-full-width"
        type="text"
        value={user.category}
        name="category"
        onChange={handleChange}
      />
      <label>Description</label>
      <input
        className="u-full-width"
        type="text"
        value={user.description}
        name="description"
        onChange={handleChange}
      />
      <label>Date</label>
      <input
        className="u-full-width"
        type="text"
        value={user.date}
        name="date"
        onChange={handleChange}
      />
     
      
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Edit user
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
