// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$12$Xl383XZE9eskYmQiK7QHX.qnYgLfwoOjyOLjWqJvAIYr0.bIauB0a",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },

  {
    id: "2",
    username: "ellie",
    password: "$2b$12$Xl383XZE9eskYmQiK7QHX.qnYgLfwoOjyOLjWqJvAIYr0.bIauB0a",
    name: "ellie",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function findByUsername(username) {
  return users.find((user) => {
    console.log(user, username, "@@@");
    return user.name === username;
  });
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
