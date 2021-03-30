//https://www.javascripttutorial.net/javascript-callback/#:~:text=In%20JavaScript%2C%20a%20callback%20is,argument%20to%20be%20executed%20later.&text=When%20you%20pass%20a%20callback,name%20without%20the%20parentheses%20()%20.

let numbers = [1, 2, 4, 7, 3, 5, 6];

//Call Back Function
function isOddNumber(number) {
    return number % 2;
}
const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers);

//Same thing using Anonymous function
let oddNos = numbers.filter(function (number) {
    return number % 2;
});
console.log(oddNos);

//Using Arrow function
let o1 = numbers.filter(numbers => numbers % 2);
console.log(o1);

//https://www.javascripttutorial.net/es6/javascript-promises/
//Asynchronous callback functions - Using Promise
let learnJS = makePromise(true);
function makePromise(completed) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (completed) {
                resolve("I have completed learning JS.");
            } else {
                reject("I haven't completed learning JS yet.");
            }
        }, 3 * 1000);
    });
}

function createApp() {
    // ...
}

learnJS
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => createApp());

//Asynchronous callback functions - Using Async Await
async function showServiceCost() {
    try {
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The service cost is ${cost}`);
    } catch (error) {
        console.log(error);
    }
}

showServiceCost();

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}