import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", organization: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.organization) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      setNewUser({ name: "", email: "", organization: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setNewUser(userToEdit);
    setIsEditing(true);
    setCurrentUserId(id);
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === currentUserId ? { ...user, ...newUser } : user
      )
    );
    setIsEditing(false);
    setNewUser({ name: "", email: "", organization: "" });
    setCurrentUserId(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">User Management</h1>
        {/* Input Form */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleChange}
            className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={newUser.organization}
            onChange={handleChange}
            className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isEditing ? (
            <button
              onClick={handleUpdateUser}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAddUser}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Add User
            </button>
          )}
        </div>

        {/* User List */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Organization</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border">
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.organization}</td>
                <td className="border p-2 flex space-x-2">
                  <button
                    onClick={() => handleEditUser(user.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
