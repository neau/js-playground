// noob approach
//fizzBuzz();
function fizzBuzz() {
    for ( var i = 1; i < 100; i++) {
        if (( i % 3 == 0 ) && ( i % 5 != 0 )) console.log(i + ', Fizz');
        if (( i % 3 != 0 ) && ( i % 5 == 0 )) console.log(i + ', Buzz');
        if (( i % 3 == 0 ) && ( i % 5 == 0 )) console.log(i + ', Fizzbuzz');
    }
}

// Non-univercity approach
function fizzBuzzOutput() {
    for (var i = 1; i <= 100; i++) {
        var output = '' ;
        if ( i % 3 == 0) output += "Fizz";
        if ( i % 5 == 0 ) output += "Buzz";
        if ( output == '' ) output += i;
        console.log(output);   
    }
}
//fizzBuzzOutput();

//Difficult to read, but working
//fizzTernary();
function fizzTernary(){
    for (var i = 1; i <= 100; i++) {
        var output = '';     
        console.log((i%3==0&&i%5==0)?output+=i+' FizzBuzz':(i%3==0)?output+=i+' Fizz':(i%5==0)?output+=i+' Buzz':output=i);
    }
}

// Testing short-circuit evaluation
// https://en.wikipedia.org/wiki/Short-circuit_evaluation
function shortCircuit() {
    var a = 1;
    a == 1 && fizzTernary(); // function is called
    a == 2 && fizzTernary(); //function is not called

    var result = console['log'](a);
    console['log']('result is: ' + result); //underfined

    var b=1; b==1 && console['log'](b); // 1 printed
    var b=2; b==1 && console['log'](b); // nothing printed
    var c=2; c==2 || console['log'](c); // nothing printed
    var d=3; d==2 || console['log'](d); // 3 printed     
}
shortCircuit()