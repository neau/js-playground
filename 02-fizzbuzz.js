// Non-univercity approach

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var output = '' ;
        if ( i % 3 == 0) output += "Fizz";
        if ( i % 5 == 0 ) output += "Buzz";
        if ( output == '' ) output += i;
        
        console.log(output);
        
    }
}

//fizzBuzz();

function fizzTernary(){
    for (var i = 1; i <= 100; i++) {
        var output = '';     
        console.log((i%3==0&&i%5==0)?output+=i+' FizzBuzz':(i%3==0)?output+=i+' Fizz':(i%5==0)?output+=i+' Buzz':output=i);
    }
}
fizzTernary();