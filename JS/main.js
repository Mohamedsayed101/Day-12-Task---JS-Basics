// This Task made by Mohamed Sayed Omar El-sayed

/*

! We will explain some topics in js let's go

TODO:
  - console object
  - Window object
  - Data Types 
  - Math Methods
  - String Methods
  - Escaping
  - Arithmetic && Comparison Operators
  - Control flow
  - Logical Operators
  - condations
    -> if
    -> else if
    -> else
  - Loops 
    -> for
    -> while
    -> do while
  -Functions
    -> Arrow functions
    -> Regular Functions
    -> Anonymous functions
  - Scope
  -Objects        
*/

// =================================

/*
    ? 1- console object

    Explain:
        هو كائن موجود داخل window.
        يُستخدم لـ الاختبار (Testing) وتصحيح الأخطاء (Debugging) فقط، وليس في بناء الصفحة.
        أهم الدوال:
            log(), warn(), error(), info(), debug()
            table(), group(), groupEnd()
            time(), timeEnd(), clear()
*/

// console commands

console.log(10 + 20);
console.log("Hello world");
console.table(["Mohamed", "Sayed", "Omar"]);
console.error("%cError %cin file", "color:blue;", "");
console.warn("This is last warn for you");
console.info("This is Info");
console.group("User Info");
console.log("Name: Mohamed");
console.log("Age: 20");
console.groupEnd();
console.time(); // no action because that without name of timer
console.time("timer");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("timer");
console.clear();

console.log("#".repeat(20));

// =================================

/*
    ? 2- window object

    Explain:
        هو (Big Boss) اللي بيحتوي على كل شيء في صفحة الويب: document, console, والمتغيرات العامة.
        يمثل نافذة المتصفح نفسها.
        واى حاجة بعملها فى ملف ال js بتضاف جواه
        يحتوي على دوال مهمة مثل:
            alert(), confirm(), prompt()
            setTimeout(), setInterval()
            open(), close(), print()
            onload, scrollTo() 
*/

window.onload = function () {
  document.querySelector("h1").style.backgroundColor = "blue";
};

window.console.log("hello from consle into window");
window.document.writeln("hello from document into window");
window.alert("hello from alert into window");

window.close();

console.log("#".repeat(20));
// =================================

/*
    ? 3- Data Types

    Explain:
        فيه نوعين رئيسيين من ال Data Types
          -Primitive data type
            ->String
            -> Number
            -> Boolean
            -> Undefined
            -> Null
          -Non Primitive data type
            -> Array
            -> object
            -> Function
*/

// Data Types Examples

console.log("Hello", typeof "Hello"); //string
console.log(10, typeof 10); //number
console.log(false, typeof false); //boolean
console.log(undefined, typeof undefined); //undefined
console.log(null, typeof null); //object (This is mistake of js mistakes , HHH)

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 4- Math Methods

    Explain:
        Math have some methods and attributes that used to done something
        such Math.E , Math.abs() ,Math.sqrt(),.....
*/

// Math Methods Examples

Math.abs(-10); // 10
Math.sqrt(4); // 2
console.log(Math.max(10, 20)); //20

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 5- String Methods

    Explain:
    Math have some methods and attributes that used to done something
    such "ayKalam".at(), "ayKalam".charAt() ,"ayKalam".indexOf(),.....
*/

// Math Methods Examples

var userName = "mOhamed";

console.log(userName.charAt(1)); // "O"
console.log(userName.at(1)); // "O"
console.log(userName.at(-1)); // "d"
console.log(userName.charAt(-1)); // "" (لا شيء)

console.log("#".repeat(20));
// =================================

// =================================

/*
    5- String Methods

    Explain:
        any string have some methods that used to done something
        such Math.E , Math.abs() ,Math.sqrt(),.....
*/

// Math Methods Examples

Math.abs(-10); // 10
Math.sqrt(4); // 2
console.log(Math.max(10, 20)); //20

console.log("#".repeat(20));
// =================================
// =================================

/*
    ? 6- Escaping

    Explain:
        Escaping يحدث لما يبقى عندى رمز او علامة معينه بتعمل close او بتدى error 
        such 
            \\
            “
            ‘
            \n
            \t
*/
// Escaping Examples

// console.log(""This is Error in code"") //it take error
console.log('"This is Error in code"'); //it ture

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 6- Arithmetic && Comparison Operators

    Explain:
        Arithmetic:
            it use operators such + / * - % ** ++ --,.....
        Comparison:
            it use operators such < > >= <= == === != !==,.... 
            
            ? difference between == vs === :
               == is conditional operator ده بيقارن بين القيمتين بغض النظر عن النوع 
               بمعنى أن 10 =="10" => true

                === is identical operator 
                انما ده يقارن النوع والقيمة يعني المثال السابق سيعطي false
*/
// Escaping Examples

console.log(10 + 20); // 30
console.log(20.2 * -1); //-20.2
console.log(1 > 2); //false
console.log(2 > 1); //true
console.log(2 >= 2); //true

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 7- Data Flow

    Explain:
        Control flow refers to the order in which statements are executed in a script.
        ● In JavaScript, control flow is achieved through conditional statements and loops.
        ● It helps in making decisions and executing different code blocks based on certain conditions.
*/
// Escaping Examples

/*
    statement1
    statement2
    statement3 if true skip 4 then 5 is excute
    statement4
    statement5
*/

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 8- Logical Operators

    Explain:
        Logical Operators refers to Operators taht use to combination between more than conditions
        such &&(AND), ||(OR), !(Not)
*/
// Logical Examples with condations to more simplefiy

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 9- condations

    Explain:
    -IF Statement
        The if statement in JavaScript allows for basic decisions based on conditions.
        
        If Else Syntax
        
        The if-else statement in JavaScript allows for branching based on conditions.
        
        The else if statement extends the decision-making process to handle multiple conditions.
        
        It provides a way to create a series of conditions and execute the     corresponding block of code for the first true condition encountered.

    -Switch Statement
        The switch statement is an alternative to multiple if-else if statements.

        It evaluates an expression against multiple possible case values and executes the code block associated with the first matching case.

        It provides a cleaner structure when dealing with multiple conditions.
*/
//
// condations Examples

/*
  TODO:
    - get input form user 
    - check two inputs with this rules 
      -Rock less than paper and storng than scissors
      -scissors storng than paper and less than Rock
      -papers less than scissors and storng than Rock
      -in case the same type then it draw
      
    !This is a clean code
    ?Are you ready to review my code      
*/

var PlayerOneChoice = "scissors";
var PlayerTwoChoice = "paper";

if (PlayerOneChoice === PlayerTwoChoice) console.log("It's Draw");
else if (
  (PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") ||
  (PlayerOneChoice === "paper" && PlayerTwoChoice === "Rock") ||
  (PlayerOneChoice === "scissors" && PlayerTwoChoice === "paper")
)
  console.log("Player One is winner");
else console.log("Player Two is winner");

// Another Ex

let job = "Manager";
let salary = 0;

// var job = "Support";
switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`Your Salary Is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`Your Salary Is ${salary}`);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`Your Salary Is ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`Your Salary Is ${salary}`);
}

// others
let a = 10;

a < 20
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log(">40")
  : console.log("Unknown");

console.log("#".repeat(20));
// =================================

// =================================

/*
    ? 9- Loops

    Explain:
        الحلقات (Loops) تُستخدم لتكرار تنفيذ جزء من الكود عدة مرات طالما أن هناك شرط معين يتحقق.

        - for loop
        تُستخدم عندما تعرف عدد التكرارات.
        EX

        for (let i = 0; i < 5; i++) {
            console.log(i);
            }

        - while loop
        تُستخدم عندما لا تعرف عدد التكرارات، وتريد التكرار طالما أن الشرط صحيح.     
        Ex
        
        let i = 0;
        while (i < 5) {
            console.log(i);
            i++;
        }

        -do...while loop
        مثل while، لكن تضمن تنفيذ الكود مرة واحدة على الأقل.
        EX

        let i = 0;
        do {
            console.log(i);
            i++;
        } while (i < 5);
}



*/
// Logical Examples with condations to more simplefiy

console.log("#".repeat(20));
// =================================

/*
    ? 10- Functions

    Explain:
        is a containter that use resuabiltiy concept and make it easy to maintance and usefull

*/

// function Examples

// add function to addation
function add(num1, num2) {
  var n = 6;
  return num1 + num2;
}

// calcAvg to calculation Avg of them
function calcAvg(num1, num2) {
  console.log(add(num1, num2) / 2);
}

console.log(n); Error

calcAvg(50, 100);

// Anonymous function without parameter
(function () {
  console.log(100 + 200);
})();

// Anonymous function with parameter
var nameOne = function (num1, num2) {
  return num1 + num2;
};
console.log(nameOne(10, 10));

// Arrow function
var nameOne = (num1, num2) => num1 + num2;
console.log(nameOne(10, 10));

console.log("#".repeat(20));

// =================================

// =================================

/*
    ? 12- Scope 

    Explain:
        for var is functional scope
        var is function scope وتسمح بكل شيء سواء redeclaration or reassignment
        وأيضًا متاحة خارج الـ scope وهذا بيسبب مشاكل و كوارث كتييييييير 😂 
        لو استخدمتها قبل التعريف تعطي undefined
 
*/

// Scope Examples

function testScope(){
    var x = 10;
    console.log(x);//10
}
console.log(x);//error (غير معرف)

// =================================

// =================================

/*
    ? 13- Hosting  

    Explain:
        "رفع" تعريف المتغيرات أو الدوال إلى أعلى النطاق (Scope) أثناء وقت الترجمة (Compile Time)، قبل تنفيذ الكود."
 
*/

// Scope Examples

console.log(x); // undefined
var x = 5;

// js is done with 
var x;        // hoisted
console.log(x); // undefined
x = 5;


// =================================

// =================================

/*
    ? 14- Object  

    Explain:
        هو نوع غير بدائي (Non-Primitive) يُستخدم لتخزين بيانات على شكل أزواج (مفتاح:قيمة).        
*/

// Scope Examples

let person = {
  name: "Mohamed",
  age: 20,
  country: "Egypt",
  natitonalId: 123456789,
  sayHello: function () {
    return `Hello ${this.name}`;
  },
  employee: {
    name: "Ahmed",
    age: 30,
    country: "KSA",
    natitonalId: 987654321,
    sayHello: function () {
      return `Hello ${this.name}`;
    },
    Worker: {
      name: "Ali",
      age: 25,
      country: "UAE",
      natitonalId: 456789123,
      sayHello: function () {
        return `Hello ${this.name}`;
      },
    }
  }
};
console.log(person); // {...}
console.log(person.name); // Mohamed
console.log(person.age); // 20
console.log(person.country); // Egypt
console.log(person.natitonalId); // 123456789
console.log(person.sayHello()); // Hello Mohamed
console.log(person.employee.name); // Ahmed
console.log(person.employee.age); // 30
console.log(person.employee.country); // KSA
console.log(person.employee.natitonalId); // 987654321
console.log(person.employee.sayHello()); // Hello Ahmed
console.log(person.employee.Worker.name); // Ali
console.log(person.employee.Worker.age); // 25
console.log(person.employee.Worker.country); // UAE
console.log(person.employee.Worker.natitonalId); // 456789123
console.log(person.employee.Worker.sayHello()); // Hello Ali
console.log(person.employee.Worker.natitonalId); // 456789123
console.log(person.employee.Worker.sayHello()); // Hello Ali

// =================================



