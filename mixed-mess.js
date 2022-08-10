//Global Arrays
let messageObj = {
    array1: ['Bad', 'Terrible', 'Mean', 'Good', 'Great', 'Excellent'],
    array2: ['Dirty', 'Smelly', 'Ugly', 'Beautiful', 'Attractive', 'Kind'],
    array3: ['Idiot', 'Dumby', 'Joker', 'Queen', 'King', 'Hero']
}

//Randomizer function
const random1 = (arr) => {
    let i = Math.floor(Math.random() * (arr.length));
    return arr[i];
};
//console.log(random1(array1));

//Message Randomizer function
const mixedMessages = () => {
    let a = random1(messageObj.array1);
    let b = random1(messageObj.array2);
    let c = random1(messageObj.array3);
    if (a[0] === 'A' || a[0] === 'E' || a[0] === 'I' || a[0] === 'O' || a[0] === 'U') {
        console.log(`You are an ${a.toLowerCase()} ${b.toLowerCase()} ${c.toLowerCase()}!`);
    } else {console.log(`You are a ${a.toLowerCase()} ${b.toLowerCase()} ${c.toLowerCase()}!`)};
};

//Function test 
mixedMessages();

