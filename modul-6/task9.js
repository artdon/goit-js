

import users from "./users.js";

const getNamesSortedByFriendsCount = users => users.sort((friend1, friend2) => friend1.friends.length-friend2.friends.length).map(users => users.name)

    // твой код
  
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]