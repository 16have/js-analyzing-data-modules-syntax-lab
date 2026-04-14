require('datejs');
// const UsersA = [{"name": "john doe"}, {"name": "jane smith"}, {"name": "alice johnson"}, {"name": "bob brown"}, {"name": "charlie davis"}, {"name": "dave evans"}, {"name": "eve franklin"}, {"name": "frank green"}, {"name": "grace hall"}, {"name": "henry irwin"}];
//  const UsersB = [{"name": "peter jones"}, {"name": "joe bloggs"}, {"name": "mary davis"}, {"name": "lisa wilson"}, {"name": "mike thompson"}, {"name": "helen martinez"}, {"name": "kelley garcia"}, {"name": "sinatra stone"}, {"name": "harley fin"}, {"name": "justin bid"}];
// function combineUsers(usersA, usersB) {
//   const combinedUsers = [...usersA, ...usersB];
//   return combinedUsers;
// }
// const combinedUsers = combineUsers(UsersA, UsersB);
// console.log(combinedUsers);

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString('M/d/yyyy')
  }
  for (const users of args) {
    combinedObject.users.push(...users);
  }
  return combinedObject;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};