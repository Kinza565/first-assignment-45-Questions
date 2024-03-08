///////////////// KINZA KHAN ///////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// TASK 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "ERIC";
console.log("Hello ${ERIC}` would you like to learn some Python today?");
//  TASK 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_Name = "Kinza";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// Tittle case
console.log("titlecase:", personName.replace(/\kw/g, function (c) { return c.toUpperCase(); }));
// TASK 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
var quote = "A person who never made a mistake never tried anything new";
var author;
console.log("".concat(author, " once said,\"").concat(quote, "\""));
//  TASK 5
var famous_person = "Albert Einstein";
var msg = "".concat(famous_person, " once said,\"").concat(quote, "\"");
console.log(msg);
// TASK 6 
var person_name = "\n\t BABAR AZAM\t\n";
console.log(person_Name);
var stripped = person_Name.trim();
console.log(stripped);
//  TASK 7
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//Q(8)
console.log(4 + 4);
console.log(10 - 2);
console.log(8 * 1);
console.log(16 / 2);
//Q(9)
var favouriteNumber = 4;
console.log("My favourite number is ".concat(favouriteNumber));
//Q(10)
// my name is kinza khan
// Date: 22/02/2024
// this program will run simple code just like Hello Karachi
console.log("Hello Karachi simple program");
//Q(11)
var names = ['wareesha', 'bisma', 'yamna', 'asma'];
var message = ['I hope you are having a good day:] '
    // for(let i=0; i<names.length; i++){
    ,
    // for(let i=0; i<names.length; i++){
    console.log(message + names[i])];
{
}
//Q(12)
var members = ['wareesha', 'bisma', 'yamna', 'asma'];
var message = ["Hello, {}! I hope you're having a wonderful day."];
//Q(13)
var transportation = ['Bike', 'Civic', 'Bus', 'cycle'];
for (var i = 0; i < transportation.length; i++) {
    console.log('i would like to own a ' + 'transportation'[i]);
    {
    }
    //Q(14)
    var guest_list_1 = ['kamran', 'ali', 'yamna', 'fahad', 'ayesha', 'saniya', 'bisma', 'zain'];
    for (var i_1 = 0; i_1 < guest_list_1.length; i_1++) {
        console.log('Respected Sir/Madam ' + 'guest_list'[i_1] + ',\nwe are invited you on dinner tomorrow. \nThank You so much\n');
    }
    export { guest_list };
    // Question 15 
    var not_present = 'ali';
    var new_guest = 'Kohli';
    'guest_list[1] = new_guest';
    for (var i_2 = 0; i_2 < 'guest_list'.length; i_2++) {
        console.log('Respected Sir/Madam ' + 'guest_list'[i_2] + ',\nwe are invited you on dinner tomorrow. \nThank You So Much\n');
    }
    console.log("Mr. ".concat(not_present, " will not coming tomorrow on dinner."));
    // Question 16
    guest_list_1.unshift('mehrin', 'hammad', 'tabish', 'asma', 'muskan', 'iqra', 'zain', 'talha');
    for (var i_3 = 0; i_3 < guest_list_1.length; i_3++) {
        console.log('Respected Sir/Madam ' + 'guest_list'[i_3] + ",\nwe are invited you on dinner tomorrow. \nThank You So Much\n");
        {
        }
        // Question 17
        console.log('\nUnfortunatly we can not arrange big table,only two people allowed.');
        while (guest_list_1.length > 2) {
            var remove_guest = guest_list_1.pop();
            console.log('Sorry Sir/Medam.${remove_guest} you are not invited for the dinner.');
            {
            }
            // for(let i=0; i<guest_list.length; i++){
            console.log('Respected Sir/Medam  ' + 'guest_list'[i_3] + ",\nyes you are still invited on tomorrow dinner. \nThank You\n");
            {
            }
            guest_list_1.splice(0, 2);
            console.log('guest_list');
            //Q(18)
            var places = ['LalQila', 'ClockTower', 'LuckyOne', 'Dehli', 'Bankok'];
            console.log('orignal ' + 'places');
            // Store the locations in a array. Make sure the array is not in alphabetical order
            var locations = void 0;
            console.log('location ');
            //  Print your array in its original order
            console.log('copy ' + __spreadArray([], 'places', true).sort());
            // Print your array in alphabetical order without modifying the actual list
            var Original_list = void 0;
            var original_list = ['biryani', 'golgappay', 'ice-cream', 'black_cofee'];
            console.log('orignal ');
            // Show that your array is still in its original order by printing it
            console.log('orignal ' + places);
            // show yor array in reverse alphabetical order without changing the order of the orignal list.
            console.log('copy ' + __spreadArray([], 'places', true).sort().reverse());
            // show that your array is still in its orignal order by printing it again.
            console.log('copy ' + __spreadArray([], 'places', true).sort().reverse());
            // Reverse the order of your list. Print the array to show that its order has changed
            console.log('copy ' + __spreadArray([], 'places', true).sort());
            // Reverse the order of your list again. Print the list to show it’s back to its original order
            console.log('copy ' + __spreadArray([], 'places', true).sort().reverse());
            // sort your array so its stored in alphabetical order.print the array to show that its order has been changed.
            console.log('copy ' + __spreadArray([], 'places', true).sort());
            //Q(19)
            // import{ guest_list } from '../Q14,15.16,17/kk'
            console.log("n PRINTING NUMBER OF GUEST INVITED");
            console.log("we had finally invited ".concat(guest_list_1.length, " from question 14"));
            //Q(20)
            var Fruits = ['Mango', 'Pear', 'Cherry'];
            console.log("list of fruits:");
            for (var _i = 0, Fruits_1 = Fruits; _i < Fruits_1.length; _i++) {
                var top_1 = Fruits_1[_i];
                console.log(top_1);
            }
            //Q(21)
            // object is consist ofe key + value
            var studentfatima = {
                Name: "Fatima",
                //  Key value
                Age: "20",
                Gender: "Female",
                RollNo: "545"
            };
            console.log('studentdetail');
            //  TASK 22
            // creating array
            var newArray = ['Thomas', 'Anthony', 'Charles', 'David'];
            //  Accessing array by inbox
            console.log('newArray[6]');
            // correct the array
            console.log(newArray);
            //  TASK 23
            var car = "BMW";
            console.log("is car ==`BMW`??i predict true");
            console.log("car ==BMW");
            console.log("is car !='honda city'? predict true");
            console.log("car !='honda city");
            console.log("is car == 'BMW'? predict false ");
            console.log(car == 'BMW');
            console.log('is car.length == 6? predioct true');
            console.log("car,length == 10");
            console.log('is 10 > 45 ? predict false');
            console.log('10 > 45');
            console.log(" is 3<= 63 ? predict false");
            console.log(3 < -2);
            console.log("is 72 >= 83 predict false");
            console.log("72 >= 83");
            console.log("is car == `BMW` && car.length == 8? predict false");
            console.log('car == `BMW` && car.length == 8');
            // TASK 24
            // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
            // •Tests for equality and inequality with strings..
            var name_1 = "kinza";
            var name_2 = "kinza khan";
            var name_3 = "Miss kinza khan";
            if (name_1 == name_3) {
                console.log("names are equal");
            }
            else {
                console.log("name are not equal");
            }
            if (name_1 != name_2) {
            }
            else {
                console.log("names are not equal");
            }
            var age_1 = 18;
            var age_2 = 25;
            if (age_1 == 18) {
                console.log("eligible for vote");
            }
            if (age_1 != 25) {
                console.log("eligible for vote in older category");
            }
            if (age_1 <= age_2) {
                console.log("younger");
            }
            if (age_2 <= age_1) {
                console.log("older");
            }
            var country = ["Pakistan", "China", "Algeria", "Albania"];
            if (country.includes("pakistan")) {
                console.log("pakistan is in country list");
            }
            if (!country.includes("America")) {
                console.log("america is not include in array");
            }
            {
            }
            // TASK 25
            var alien_color = 'green';
            if (alien_color == "green")
                console.log("you earn 5 points ");
            var alien_Color = "red";
            if (alien_color == "green")
                console.log('no output');
            //  TASK 26
            var Alien_color = 'green';
            if (alien_color == "green") {
                console.log("player just earned 5 points for shooting the alien. ");
            }
            else {
                console.log('player just earn 10 points.');
            }
            var AlienColor = 'red';
            if (alien_color == "green") {
                console.log("player just earned 5 points for shooting the alien. ");
            }
            else {
                console.log('player just earn 10 points.');
            }
            //  TASK 27
            var alienColor = "yellow";
            if (alien_color == "green") {
                console.log("5 points");
            }
            else if (alien_color == "yellow") {
                console.log("10 points");
            }
            else {
                console.log("15 points");
            }
            // TASK 28
            var age = 85;
            if (age < 2) {
                console.log("You are a baby");
            }
            else if (age < 4) {
                console.log("you are a toddler");
            }
            else if (age < 13) {
                console.log("you are a kid");
            }
            else if (age < 20) {
                console.log("you are a teenager");
            }
            else if (age < 65) {
                console.log("you are older");
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
            var users = ['Admin', 'Fatima', 'Kamran', 'Kinza'];
            for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
                var user = users_1[_a];
                if (user === "Admin") {
                    console.log("Hello admin,would you like to see a status report??");
                }
                else {
                    console.log(" Hello ".concat(users, ", thank you for logging in again"));
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
            var current_user = ['Admin', 'Hamza', 'Sharib', 'fareed', 'Zaid'];
            var new_user = ['Admin', 'Hamza', 'Sharib', 'Bisma', 'Shahjee'];
            var current_users_lower = current_user.map(function (user) { return user.toLowerCase(); });
            for (var _b = 0, new_user_1 = new_user; _b < new_user_1.length; _b++) {
                var new_users_2 = new_user_1[_b];
            }
            if (current_users_lower.includes(new_user.toLowerCase())) {
                console.log("Sorry ".concat(new_user, ", that name is taken"));
            }
            else {
                console.log("Yes ".concat(new_user, ", is still in available list"));
            }
            // TASK 32
            var current_users = ['Admin', 'Ali', 'Fatima', 'Noman', 'Talha'];
            var new_users = ['Admin', 'Fatima', 'Aleena', 'Hareem', 'Arbish'];
            var current_user_lower = current_users.map(function (user) { return user.toLowerCase(); });
            for (var _c = 0, new_users_1 = new_users; _c < new_users_1.length; _c++) {
                var new_user_2 = new_users_1[_c];
            }
            if (current_user_lower.includes(new_user.toLowerCase())) {
                console.log("Sorry ".concat(new_users, ", that name is taken"));
            }
            else {
                console.log('yes ${new_user}, is still in availaible list');
            }
            // TASK 33
            var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (var _d = 0, numbers_1 = numbers; _d < numbers_1.length; _d++) {
                var number = numbers_1[_d];
                if (number === 1) {
                    console.log("".concat(numbers, "st"));
                }
                else if (number === 2) {
                    console.log("".concat(numbers, "nd"));
                }
                else if (number === 3) {
                    console.log("".concat(numbers, "rd"));
                }
                else if (number === 4) {
                    console.log("".concat(numbers, "th"));
                }
                else if (number === 5) {
                    console.log("".concat(numbers, "th"));
                }
                else if (number === 6) {
                    console.log("".concat(numbers, "th"));
                }
                else if (number === 7) {
                    console.log("".concat(numbers, "th"));
                }
                else if (number === 8) {
                    console.log("".concat(numbers, "th"));
                }
                else if (number === 9) {
                    console.log("".concat(numbers, "th"));
                }
            }
            // TASK 34
            var favorite_pizza = ['peproni', 'chicken', 'vegetable'];
            for (var _e = 0, favorite_pizza_1 = favorite_pizza; _e < favorite_pizza_1.length; _e++) {
                var pizza = favorite_pizza_1[_e];
                console.log('pizza');
            }
            console.log("/n");
            for (var _f = 0, favorite_pizza_2 = favorite_pizza; _f < favorite_pizza_2.length; _f++) {
                var pizza = favorite_pizza_2[_f];
                console.log('i really like ${`pizza`} pizza!');
            }
            console.log("\nI really love pizza");
            // TASK 35
            var animals = ['Panda', 'lion', 'fish'];
            for (var _g = 0, animals_1 = animals; _g < animals_1.length; _g++) {
                var animal = animals_1[_g];
                console.log('animal');
            }
            console.log("\n");
            {
                console.log("  A ".concat(animals, "panda is a innocent animal"));
            }
            console.log(" A ".concat(animals, "lion is a wild animal"));
            console.log(" A".concat(animals, "fish is a pet"));
            // TASK 36
            function describe_city(city, country) {
                if (country === void 0) { country = 'Pakistan'; }
                console.log("".concat(city, " is in ").concat(country));
            }
            describe_city('Karachi');
            describe_city('France', 'euroupe');
            describe_city('Lahore', 'Punjab');
            // TASK 37
            function makeShirt(size, text) {
                if (size === void 0) { size = 'large'; }
                if (text === void 0) { text = ' I love TS'; }
                console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
            }
            makeShirt();
            makeShirt('standard');
            // diffrent msg
            makeShirt('small', ' I need a big shirt to wear');
            // TASK 38
            function describeCity(city, country) {
                if (country === void 0) { country = 'Pakistan'; }
                console.log("".concat('city', " is in ").concat(country));
            }
            describe_city('karachi');
            describe_city('france', 'europe');
            describe_city('lahore', 'punjab');
            // TASK 39
            function cityCountry(city, country) {
                return "".concat(city, ", ").concat(country);
            }
            var c1 = cityCountry('Lahore', 'Pakisatn');
            var c2 = cityCountry('Tokyo', 'Japan');
            var c3 = cityCountry('Paris', 'France');
            console.log('c1');
            console.log('c2');
            console.log('c3');
            // TASK 40
            function makeAlbum(artist, title) {
                var dictionaries = {
                    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
                    title: title.charAt(0).toUpperCase() + artist.slice(1)
                };
                return dictionaries;
            }
            var album = makeAlbum("ali", "ligt");
            console.log(album);
            album = makeAlbum("bilal", "red wave");
            console.log(album);
            album = makeAlbum("hamza", "seebreez");
            console.log(album);
            // TASK 41
            // Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
            function show_magicians(magicians) {
                for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
                    var magician_1 = magicians_1[_i];
                    console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
                }
            }
            var magician = ['Ali', 'Hussain', 'Kamran', 'Bilal'];
            show_magicians(magician);
            // TASK 42
            function make_great(magicians) {
                for (var i_4 = 0; i_4 < magicians.length; i_4++) {
                    magicians[i_4] = magicians[i_4] + 'The graet';
                }
            }
            var magicians2 = ['Ali', 'Hussain', 'Kamran'];
            make_great(magicians2);
            show_magicians(magicians2);
            // TASK 43
            function make_great2(magicians) {
                var greatMagicians = [];
                for (var i_5 = 0; i_5 < magicians.length; i_5++) {
                    greatMagicians.push(magicians[i_5] + 'The great');
                }
                return greatMagicians;
            }
            var magicians3 = ['Ali', 'Hussain', 'Kamran', 'Bilal'];
            // //////////////////////////////////////////////////////////
            var greatMagicians2 = make_great2(magicians3);
            show_magicians(magicians3);
            show_magicians(greatMagicians2);
            // TASK 44
            function sandwich() {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                console.log("sandwich order:");
                for (var i_6 = 0; i_6 < items.length; i_6++) {
                    console.log("- ".concat(items[i_6]));
                }
            }
            console.log('Enjoy your sandwich Kinza Khan');
            sandwich('capsicam', 'tomato', 'chicken');
            sandwich('garlic', 'chicken', 'mayo sauce');
            function createCAr(manufacture, optional) {
                return;
            }
            'manufacture';
            'model';
            'optional';
            {
            }
            var my_car = createCAr("BMW", "Corolla", { color: "Silver" }, { year: "2024" });
            console.log(my_car);
        }
    }
}
