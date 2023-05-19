// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Oguzhan",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("admin"); this works!

//person.role[1] = 10; error!
//person.role = [0, 'admin', 'user'] error!

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
