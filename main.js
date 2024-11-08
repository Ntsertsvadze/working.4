// დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს ● არ გამოიყენო string.replace() ფუნქცია

const replaceString = (string, valueToReplace, valueToReplaceWith) => {
    const index =string.indexOf(valueToReplace)
    const newSrting = string.substr(0,index) + valueToReplaceWith + string.substr(index + valueToReplace.length)
    return newSrting
}
console.log(replaceString('my  is great', 'street', 'city'))   //citys great
  


//   დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას


function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(' ');
  }
  let sentence = "hello world, world is great";
  let result = capitalizeWords(sentence);
  console.log(result);   //Hello World, World Is Great



//   დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}] ● შეგიძლია გამოიყენო sort() ფუნქცია
  


function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
  let users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
  ];
  let sortedUsers = sortUsersByAge(users);
  console.log(sortedUsers);  // [{ name: 'Saba', age: 20 }, { name: 'Lasha', age: 30 }]
  