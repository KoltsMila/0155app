const user = {
  name: "Игорь",
  lastname: "Анреев",
  email: "igoran@ty.tu",
  id: "1",
  about: "Здесь немного обо мне: ",
  avatar: "https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_hipster-256.png"
}

const users = {
  0: {
    name: "Даниил", 
    lastname: "Чайкин", 
    id: 3, 
    email: "chaiydan@ty.tu", 
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80"},
  1: {
    name: "Борис", 
    lastname: "Буровцев", 
    id: 5, 
    email: "burbor@tru.ru", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80"},
  2: {
    name: "Мария", 
    lastname: "Легкова", 
    id: 11, 
    email: "legko@mail.tu", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80" },
  3: {
    name: "Арина", 
    lastname: "Масинa", 
    id: 2, 
    email: "masiya@mail.tu", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80"},
  4: {
    name: "Агния", 
    lastname: "Марьина",
    id: 7, 
    email: "agmar@tru.ru", 
    avatar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80"},
};

export function getUser(userId) {
  // console.log(userId);
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export function getUsers() {
  return users;
}