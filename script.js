// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];
// - Have a prompt that adds your last name to the array
const lastName = prompt("What is your last name?");
names.push(lastName);
// - Have an output that has the names sorted alphabetically
names.sort();
// - Have an output that tells you what is the position of your name in the sorted array
let postion = names.indexOf(lastName);

// - Have an output that Uppercase's all names in the array
for (let i = 0; i < names.length; i++) {
  names[i] = names[i].toUpperCase();
}

console.log(names);
console.log(postion);
