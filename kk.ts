///////////////// KINZA KHAN ///////////////////////

// TASK 2

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string=  "ERIC";
console.log("Hello ${ERIC}` would you like to learn some Python today?")

//  TASK 3

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_Name = "Kinza"
console.log("lowercase:",personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toUpperCase());

// Tittle case
console.log("titlecase:", personName.replace(/\kw/g,c => c.toUpperCase()));

// TASK 4

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

let quote: string ="A person who never made a mistake never tried anything new"
let author: "Albert Einstein"
console.log (`${author} once said,"${quote}"`)

//  TASK 5

let famous_person: string= "Albert Einstein" 
let msg: string = `${famous_person} once said,"${quote}"`

console.log(msg);

// TASK 6 


 let person_name: string = `\n\t BABAR AZAM\t\n`;
console.log(person_Name);
 let stripped: string = person_Name .trim();
console.log(stripped);


//  TASK 7

console.log(5 +3);
console.log(11 -3);
console.log(4 *2);
console.log(16 /2);

//Q(8)

console.log(4 +4);
console.log(10 -2);
console.log(8 *1);
console.log(16 /2);

//Q(9)
let favouriteNumber: number = 4;
console.log(`My favourite number is ${favouriteNumber}`);

//Q(10)
// my name is kinza khan
// Date: 22/02/2024
// this program will run simple code just like Hello Karachi
console.log("Hello Karachi simple program");

//Q(11)
 let names : string[] =['wareesha','bisma','yamna','asma'];

const message :string = ['I hope you are having a good day:] '

// for(let i=0; i<names.length; i++){

console.log(message + names [i]); {

}

//Q(12)
 let  members = ['wareesha', 'bisma', 'yamna', 'asma']
 let message = ["Hello, {}! I hope you're having a wonderful day."]


//Q(13)
 let transportation : string [] = ['Bike','Civic','Bus','cycle'];
 for(let i=0; i<transportation.length; i++){
   console.log('i would like to own a ' + 'transportation'[i]);

{
}

//Q(14)
let guest_list : string [] = ['kamran','ali','yamna','fahad','ayesha','saniya','bisma','zain'];
for(let i=0; i<guest_list.length; i++){
 console.log('Respected Sir/Madam ' +'guest_list'[i] + ',\nwe are invited you on dinner tomorrow. \nThank You so much\n')

}
export{guest_list} 

// Question 15 
let not_present : string = 'ali';
let new_guest : string = 'Kohli';
'guest_list[1] = new_guest'
for(let i=0; i<'guest_list'.length; i++){
     console.log('Respected Sir/Madam ' +'guest_list'[i] + ',\nwe are invited you on dinner tomorrow. \nThank You So Much\n')}
     console.log(`Mr. ${not_present} will not coming tomorrow on dinner.`)



    // Question 16
    guest_list.unshift('mehrin','hammad','tabish','asma','muskan','iqra','zain','talha');
    for(let i=0; i<guest_list.length; i++){
         console.log('Respected Sir/Madam ' + 'guest_list'[i] + `,\nwe are invited you on dinner tomorrow. \nThank You So Much\n`) {
  
  }


// Question 17

console.log('\nUnfortunatly we can not arrange big table,only two people allowed.')
while(guest_list.length>2){
     let remove_guest = guest_list.pop();
     console.log('Sorry Sir/Medam.${remove_guest} you are not invited for the dinner.');{

}
// for(let i=0; i<guest_list.length; i++){
console.log('Respected Sir/Medam  ' + 'guest_list' [i] +`,\nyes you are still invited on tomorrow dinner. \nThank You\n`) {
}
 guest_list.splice(0,2) 
console.log('guest_list')


//Q(18)
 let places : string [] = ['LalQila','ClockTower','LuckyOne','Dehli','Bankok']
console.log('orignal ' + 'places');

// Store the locations in a array. Make sure the array is not in alphabetical order

let locations : ["Karachi", "Karachi", "Karachi", "India", "Thailand"]
console.log('location ');

//  Print your array in its original order
console.log('copy ' + [...'places'].sort());

// Print your array in alphabetical order without modifying the actual list
 let Original_list
 let original_list = ['biryani', 'golgappay', 'ice-cream', 'black_cofee'];
console.log('orignal ')

// Show that your array is still in its original order by printing it
 console.log('orignal ' + places);

// show yor array in reverse alphabetical order without changing the order of the orignal list.
console.log('copy ' + [...'places'].sort().reverse());


// show that your array is still in its orignal order by printing it again.
console.log('copy ' + [...'places'].sort().reverse());


// Reverse the order of your list. Print the array to show that its order has changed
console.log('copy ' + [...'places'].sort());


// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log('copy ' + [...'places'].sort().reverse());

// sort your array so its stored in alphabetical order.print the array to show that its order has been changed.
console.log('copy ' + [...'places'].sort());

//Q(19)
// import{ guest_list } from '../Q14,15.16,17/kk'
console.log(`n\ PRINTING NUMBER OF GUEST INVITED`);
console.log(`we had finally invited ${guest_list.length} from question 14`);

//Q(20)
let Fruits : string [] = ['Mango','Pear','Cherry'];
console.log("list of fruits:")
 for(let top of Fruits){
console.log(top)

}

//Q(21)

// object is consist ofe key + value
 let studentfatima = {
     Name: "Fatima",
    //  Key value
     Age: "20",
    Gender: "Female",
    RollNo: "545"
};
console.log('studentdetail');

//  TASK 22


// creating array
let newArray :string[] = ['Thomas','Anthony','Charles','David'];
//  Accessing array by inbox
console.log('newArray[6]');

// correct the array
console.log(newArray);
        

//  TASK 23

let car = "BMW";
  console.log("is car ==`BMW`??i predict true");
 console.log("car ==BMW"); 


 console.log(`is car !='honda city'? predict true`)
 console.log("car !='honda city");


 console.log("is car == 'BMW'? predict false ")

 console.log(car == 'BMW');


 console.log('is car.length == 6? predioct true')
 console.log("car,length == 10");

 console.log ('is 10 > 45 ? predict false')
 console.log('10 > 45')


 console.log(" is 3<= 63 ? predict false")
 console.log(3 <-2)

 console.log("is 72 >= 83 predict false")
 console.log("72 >= 83")

 console.log("is car == `BMW` && car.length == 8? predict false")

 console.log('car == `BMW` && car.length == 8')


// TASK 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// •Tests for equality and inequality with strings..
let name_1 : string = "kinza"
 let name_2 : string = "kinza khan"
 let name_3 : string = "Miss kinza khan"

if (name_1 == name_3){
console.log("names are equal")
} else {
    console.log("name are not equal")

}

if (name_1 != name_2){

} else {
    console.log("names are not equal")
}


let age_1 : number = 18
let age_2 : number = 25
 if (age_1 ==18){
console.log("eligible for vote")
 }
if (age_1 != 25){
    console.log("eligible for vote in older category")


}

if (age_1 <= age_2){ 
console.log("younger")
}


if (age_2 <= age_1){
    console.log("older")
    
}


 let country : string[] = ["Pakistan","China","Algeria","Albania"]
if (country.includes("pakistan")){
 console.log("pakistan is in country list")
 }

if (!country.includes ("America")){
console.log("america is not include in array")

  

}



{



}



// TASK 25

  let alien_color = 'green'

  if (alien_color == "green")
 console.log ("you earn 5 points ")

 let alien_Color : string = "red"
 if (alien_color == "green")
 console.log('no output')

//  TASK 26

let Alien_color = 'green'

if (alien_color == "green")  {
console.log ("player just earned 5 points for shooting the alien. ")
} else {
console.log('player just earn 10 points.')
}

let AlienColor = 'red'

if (alien_color == "green")  {
console.log ("player just earned 5 points for shooting the alien. ")
} else {
console.log('player just earn 10 points.')
}

//  TASK 27

let alienColor : string = "yellow"

if (alien_color == "green") {
console.log("5 points")

} else if (alien_color == "yellow") {
console.log("10 points")
} else {
console.log("15 points")



}

// TASK 28

let age : number = 85

if (age < 2) {
console.log("You are a baby")

} else if (age < 4){

    console.log("you are a toddler")

} else if (age < 13){
    console.log("you are a kid")

}  else if (age < 20){
    console.log("you are a teenager") 

}else if (age < 65){
        console.log("you are older") 

}




// TASK 29

var favourite_fruit = ['kivi', 'cherry', 'mango', 'orange'];
if (favourite_fruit.includes("kivi")) {
    console.log("i really like kivi");
}
if (favourite_fruit.includes("peach")) {
    console.log("i really like bananas");
}
if (favourite_fruit.includes("orange")) {
    console.log("orange");
}
if (favourite_fruit.includes("apple")) {
    console.log("i really like bananas");
}
if (favourite_fruit.includes("guava")) {
    console.log("apple");
}


// 30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.




let users : string [] = ['Admin','Fatima','Kamran','Kinza']

for(let user of  users) {
if (user === "Admin") {
console.log("Hello admin,would you like to see a status report??")
} else { 
console.log(` Hello ${users}, thank you for logging in again`)
}

}



// TASK 31

// let users : string [] = ['Eric','Zaid','Talha','Nouman'];

// if (users.length ===0) {
// console.log('we need to find some users!')
// } else {
//     for (let user of users) {
// if ( user === "admin") {
//     console.log("Hello admin,would you like to see the status report ")
    
// } else {
//      console.log("Hello ${users}, Thank you for logging in again")
//     }

// }


// }

// users = []
// if (users.length ===0 ) {
// console.log(`we need to find some users!`)



// }


let current_user : string [] = ['Admin','Hamza','Sharib','fareed','Zaid']
let new_user : string [] = ['Admin','Hamza','Sharib','Bisma','Shahjee']

let current_users_lower : string [] =current_user.map(user => user.toLowerCase()) 

for (let new_users of new_user) {

}
if (current_users_lower.includes (new_user.toLowerCase())   {
    console.log(`Sorry ${new_user}, that name is taken`)



} else {


    console.log(`Yes ${new_user}, is still in available list`)

}

// TASK 32

let current_users :string [] = ['Admin','Ali','Fatima','Noman','Talha']

let new_users :string [] = ['Admin','Fatima','Aleena','Hareem','Arbish']

let current_user_lower : string [] =current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
}


if (current_user_lower.includes (new_user.toLowerCase())) {

     console.log(`Sorry ${new_users}, that name is taken`)
} else {
    console.log('yes ${new_user}, is still in availaible list')
} 


// TASK 33

let numbers : number [] =[1,2,3,4,5,6,7,8,9]
for (let number of numbers) 

if (number ===1) {
    console.log(`${numbers}st`)

} else if (number ===2) {

    console.log(`${numbers}nd`)

} else if (number ===3) {

    console.log(`${numbers}rd`)

} else if (number ===4) {

    console.log(`${numbers}th`)

} else if (number ===5) {

    console.log(`${numbers}th`)

 } else if (number ===6) {
    console.log(`${numbers}th`)

} else if (number ===7) {

    console.log(`${numbers}th`)

} else if (number ===8) {

    console.log(`${numbers}th`)

} else if (number ===9) {

    console.log(`${numbers}th`)

}

// TASK 34

let favorite_pizza : string [] = ['peproni','chicken','vegetable']

for (let pizza of favorite_pizza)  {
console.log('pizza')
}
console.log(`/n`)

for (let pizza of favorite_pizza) {
console.log('i really like ${`pizza`} pizza!')

}
console.log("\nI really love pizza")



// TASK 35

let animals :  string [] = ['Panda','lion','fish']

for (let animal of animals) {
console.log('animal')

}
console.log("\n")
{

console.log(`  A ${animals}panda is a innocent animal`) 

}


console.log(` A ${animals}lion is a wild animal`) 



console.log(` A${animals}fish is a pet`) 

// TASK 36

function describe_city(city: string, country: string = 'Pakistan'): void{

console.log(`${city} is in ${country}`) 
}

describe_city('Karachi')
describe_city('France','euroupe')
describe_city('Lahore','Punjab')


// TASK 37

    function makeShirt(size: string = 'large', text: string = ' I love TS'): void {

console.log(`you have order a ${size}, shirt that says ${text}`)

}

makeShirt();   
makeShirt('standard')

// diffrent msg

makeShirt('small',' I need a big shirt to wear')

// TASK 38

function describeCity(city: string, country: string = 'Pakistan'): void{
console.log(`${'city'} is in ${country}`)
}

describe_city('karachi')
describe_city('france','europe')
describe_city('lahore','punjab')



// TASK 39

function cityCountry(city: String, country: string): string{
return `${city}, ${country}`

}
let c1 = cityCountry('Lahore','Pakisatn');
let c2 = cityCountry('Tokyo','Japan');
let c3 = cityCountry('Paris','France');

console.log('c1')
console.log('c2')
console.log('c3')


// TASK 40

function makeAlbum (artist: string, title: string): { artist: string; title: string} {
  const dictionaries = {


artist: artist.charAt(0).toUpperCase() + artist.slice(1),
title: title.charAt(0).toUpperCase() + artist.slice(1)
   
};


  return dictionaries;
  }

  let album =  makeAlbum("ali","ligt")
  console.log(album)

  album =  makeAlbum("bilal","red wave")
  console.log(album)

  album =  makeAlbum("hamza","seebreez")
  console.log(album)





// TASK 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array


function show_magicians(magicians: string[]): void {
for (const magician of magicians) {
console.log(magician.charAt(0).toUpperCase() + magician.slice(1));

}

}

const magician: string[] = ['Ali','Hussain','Kamran','Bilal'];
show_magicians(magician)

// TASK 42

function make_great(magicians: string[]): void {
for (let i = 0; i < magicians.length; i ++) {
    magicians[i] = magicians[i]    +         'The graet'

} 
}

const magicians2: string[] = ['Ali','Hussain','Kamran']
make_great(magicians2)
show_magicians(magicians2)

// TASK 43

function make_great2(magicians: string[]): string[] {
const greatMagicians: string[] = [];
for (let i = 0; i < magicians.length; i++) {

    greatMagicians.push(magicians[i] + 'The great');
    }
    return greatMagicians;
}

const magicians3: string[] = ['Ali','Hussain','Kamran','Bilal'];

// //////////////////////////////////////////////////////////

const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);


// TASK 44

function sandwich(...items: string[]): void {
console.log("sandwich order:")

for (let i = 0; i < items.length; i ++) {
console.log(`- ${items[i]}`)

}

}

console.log('Enjoy your sandwich Kinza Khan')

sandwich('capsicam','tomato','chicken')
sandwich('garlic','chicken','mayo sauce')


// TASK 45

type car = {
manufacture: string
model: string
[key: string]: any;
}


function createCAr(manufacture: string, optional: Record<string, any>): car {
return }
          
        'manufacture'
        'model'
        'optional';

{

}

const my_car: car = createCAr("BMW","Corolla", {color:"Silver"}  {year:"2024"});
console.log(my_car)




















































































































































