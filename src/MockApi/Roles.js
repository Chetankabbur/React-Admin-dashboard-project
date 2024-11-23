let roles = [
    { id: 1, name: 'Administrator', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ];
  
  export const getRoles = () => Promise.resolve(roles);
  export const addRole = (role) => {
    roles.push(role);
    return Promise.resolve(role);
  };
  export const editRole = (id, updatedRole) => {
    roles = roles.map((role) => (role.id === id ? updatedRole : role));
    return Promise.resolve(updatedRole);
  };
  export const deleteRole = (id) => {
    roles = roles.filter((role) => role.id !== id);
    return Promise.resolve(id);
  };
  