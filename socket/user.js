const users = [];

const addUser = ({ id, name, room }) => {
  // name = name;
  // room = room;

  // const existingUser = users.find((user) => user.room === room && user.name === name);

  // if(!name) return { error: 'Username are required.' };
  // if(!room) return { error: 'room are required.' };

  // if(existingUser) return {users}


  const user = { id, name, room };

  users.push(user);

  return { user };
}


const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUserInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUserInRoom };