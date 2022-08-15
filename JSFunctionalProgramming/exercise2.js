let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black", }
];
let fullnameList = users.map(user => {
    return user.firstName + "" + user.lastName
})
console.log(fullnameList)