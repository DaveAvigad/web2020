// #1.0

var errNumber = 2;
var qaLine = 'helloWorld';

console.log('Great! JavaScript page is ready :)');
console.error('Error message number #', errNumber);
console.warn('Are you sure you wanna do it?');
console.debug('this line is for QA...', qaLine);


// #1.1

(function () {
    var a = b = 5;
})();


console.error('a = ', a);
console.error('b = ', b);


// #1.2

var a = 8;
var b = 2;

(function () {
    c = 10;
    d = 5;
    console.log('a + b = ', a + b)
})();

console.log('c = ', c)
console.log('d = ', d)

// #2.1

(function () {
    var text = 'Hello world ?? ';
    var button = document.getElementById('switch');
    console.log('button is:', button)
    var title = document.getElementById('hello');

    button.onclick = function () {
        title.innerText = text;
    }
})();


(function () {
    
    var text = 'Hello world 😃 ';
    var button = document.getElementById('switch');
    console.log('button is:', button)
    var title = document.getElementById('hello');

    button.onclick = change;
        
    function change() {
        title.innerText = text;
    }

})(); 

// #2.2

(function () {
    var original = document.getElementById('hello').innerText;
    var counter = 0;

    var text = 'Hello world 😃 ';
    var button = document.getElementById('switch');
    console.log('button is:', button)
    var title = document.getElementById('hello');

    button.onclick = function () {
        if (!counter) {
            title.innerText = text;
            counter = 1;
        } else {
            title.innerText = original;
            counter--;
        }
    }
})();


// 2.2

(function () {
    function changeTitle() {
        counter % 2 == 0 
        ? title.innerText = text 
        : title.innerText = oldTitle;
        counter++;
    }

    var text = 'Hello world ??';
    var button = document.getElementById('switch');    
    var title = document.getElementById('title');
    var oldTitle = title.innerText;
    var counter = 0;
    
    button.onclick = changeTitle;


})();
// #3

window.onload = function () {
    var newName = changeString('Vered'); // David
    document.getElementById('mySection').innerHTML = '<h1>' + newName + '</h1>';
}

function changeString(sName) {
    if (sName.indexOf('a') != -1) {
        // NOTE: string.substring(start, end)
        sName = 'hello ' + sName.substring(0, 1);
    } else {
        sName = 'goodbye ' + sName.substring(sName.length - 1, sName.length);
    }
    // console.log(sName)
    return sName
}


/* ************EXTRA*************** */


// #4 Hoisting

function setAllVals() {
    console.log(x);
    console.log(getIt());

    var x = 1;

    function getIt() {
        return 2;
    }
}

setAllVals();


// #5 Object, this, function, for...in

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log('1', obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log('2', test());


// #5.2 

var person = {
    firstName: 'David',
    lastName: 'Avigad',
    kids: 2,
    address: {
        city: '',
        country: 'Israel',
        zip: 78687,
    },
    // get fullName () {
    fullName: function () {
        return this.firstName + " " + this.lastName
    },
    // fullName: () => `${this.firstName} ${this.lastName}`,    
    hasKids: function () {
        return this.kids ? true : false
    }
};

console.log(person.fullName());
console.log(person.hasKids());


// #5.3 

var print = (obj) => {
    for (var field in obj)
        console.log(field);
}

print(person)


// #6 regEx

function upper_case(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}

//Method	    Description
// compile()    Deprecated in version 1.5.Compiles a regular expression
// exec()       Tests for a match in a string.Returns the first match
// test()       Tests for a match in a string.Returns true or false
// toString()   Returns the string value of the regular expression

// debugger;
upper_case('Abcd');
upper_case('abcd');


// #6.1  [0-9a-zA-Z]
// #6.2  \b\w{4}\b
// #6.3  \b(\w)?(\w)\w?\2\1
// #6.4  \b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b


// #7
function valid_email(str) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(str)) {
        console.log("Valid email address!");
    } else {
        console.log("You have entered an invalid email address!");
    }
}

valid_email('me-info@example.com'); 

