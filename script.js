// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];
// - Have a prompt that adds your last name to the array
const lastName = names.push(prompt("What is your last name?"));

// - Have an output that has the names sorted alphabetically
names.sort();
// - Have an output that tells you what is the position of your name in the sorted array
let postion = names.indexOf(lastName);

// - Have an output that Uppercase's all names in the array
for (let i = 0; i < names.length; i++) {
  console.log([names[i], names[i].toUpperCase()]);
}

// for (const name of names) {
//   console.log([name, name.toUpperCase()]);
// }

console.log(postion);
