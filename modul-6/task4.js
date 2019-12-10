import users from "./users.js";



const getInactiveUsers = users => users.filter(users => users.isActive === false)
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]