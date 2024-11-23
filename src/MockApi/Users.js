let users = [
    { id: 1, name: 'Admin', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'John Doe', role: 'Editor', status: 'Inactive' },
  ];
  
  export const getUsers = () => Promise.resolve(users);
  export const addUser = (user) => {
    users.push(user);
    return Promise.resolve(user);
  };
  export const editUser = (id, updatedUser) => {
    users = users.map((user) => (user.id === id ? updatedUser : user));
    return Promise.resolve(updatedUser);
  };
  export const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return Promise.resolve(id);
  };
  