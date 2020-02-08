// alert("wellcome");
// var deposit = prompt("How much would you like to")
// alert("you're deposited: "+deposit)
// console.log("you are a cool person!")

// function timeFive(numInput) {
//     var result = numInput * 5
//     return result
// }

// var stuff = "aaa"

// function fun(stuff) {
//     stuff = "bbb"
//     console.log(stuff)
// }
// fun()
// console.log( stuff)

// function addAwsome(name) {
//     console.log(name+"is Awsome!")
// }

var roster = []

function addNew() {
    var newName = prompt("どの名前を追加しますか?")
    roster.push(newName)
}

function remove() {
    var remName = prompt("どの名前を消しますか?")
    var index = roster.indexOf(remName);
    roster.splice(index,1)
}

function display() {
    console.log(roster)
}

var start = prompt("始めますか? y/n")
var request = "empty";

if ( start === 'y') {
    while(request != 'quit') {
        request = prompt("add/remove/display/quit")
        if (request === "add") {
        addNew();
        }else if(request == 'display') {
            display();
        }else if(request == 'remove') {
            remove();
        }
    }
}
alert( "thanks")


var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    report:function() {
        console.log("Name is "+this.name.split(" ")[1]+"\njob is "+this.job+"\nage is "+this.age)
    }
}