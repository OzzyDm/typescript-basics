// const person: {
//     name: string,
//     age: number
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Oguzhan",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
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
