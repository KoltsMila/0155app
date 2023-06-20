const user = {
  name: "Игорь",
  lastname: "Анреев",
  email: "igoran@ty.tu",
  id: "1",
  about: "Здесь немного обо мне: ",
  avatar: "https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_hipster-256.png"
}

const users = {
  0: {name: "Даниил", lastname: "Чайкин"},
  1: {name: "Борис", lastname: "Буровцев"},
  2: {name: "Мария", lastname: "Легкова"},
  3: {name: "Иван", lastname: "Масин"},
  4: {name: "Римма", lastname: "Олегова"},
  
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}