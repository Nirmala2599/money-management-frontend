import userList from "./data.js";
import { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm.js";
import useAsyncRequest from "./hooks/useAsyncRequest.js";

function App() {
  //setState to store users array
  const [users, setUsers] = useState(userList);

  //To add new user to the state
  const addUser = (user) => {
    // user.id = users.length + 1;
    user.id = users[users.length - 1].roll + 1;
    setUsers([...users, user]);
  };

  //To delete the selected/specific user from the user list
  const deleteUser = (roll) => setUsers(users.filter((user) => user.roll !==roll));

  const [editing, setEditing] = useState(false);

  const initialUser = {id: null, title: "", roll: "", amount:"", category:"", description:"", date:""};

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (roll, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.roll === currentUser.roll ? newUser : user))
    );
  };

  const [data, loading] = useAsyncRequest(3);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, id) => {
        return {
          title: obj.title,
          roll: obj.roll,
          amount: obj.amount,
          category: obj.category,
          description: obj.description,
          date:obj.date
       
          

        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        {loading || !users ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
