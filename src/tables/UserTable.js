import React from "react";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Roll</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
         </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            const { title, roll, amount, category, description, date } = user;
            // const id = user.id;
            // const name = user.name;
            // const username = user.username;
            return (
              <tr>
                <td>{title}</td>
                <td>{roll}</td>
                <td>{amount}</td>
                <td>{category}</td>
                <td>{description}</td>
                <td>{date}</td>
                
                <td>
                  <button onClick={() => props.deleteUser(roll)}>Delete</button>
                  <button onClick={() => props.editUser(roll, user)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
