// Single line comment

/*
    Multi-line comment,
    spanning across four lines
*/

// /// //// /// // / // /// //// /// // / // /// //// /// // / 
// Playing with a try/catch block.
function tryCatchFun() {
    try {
        //eval(' 5 + / 3 ');
        var a = undefinedVariable;
        throw new ReferenceError('Hello', 'a-file.js');
    } catch (error) {
        if (error.constructor == SyntaxError) {
            return error.constructor.name
        } else if (error.constructor == ReferenceError) {
            return error.constructor.name
        }
    }
}
console.log(tryCatchFun() + ', the output of an if condition, testing various exceptions.');

// /// //// /// // / // /// //// /// // / // /// //// /// // / 
// Playing with a switch-case construct
function returnsDate() {
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;                        
        case 6:
            day = "Saturday";
            break;            
    }
        return day
}
console.log('Today is ' + returnsDate() + '. This function is dynamic, realizing a switch-case construct.');
console['log'](new Date().getDate())

// /// //// /// // / // /// //// /// // / // /// //// /// // / 
// Changing variable types
// It looks so good!
//testingArray();
function testingArray() {
    var anArray = [32767, '\'a string\'', true, null, undefined, 12 + 'a', '12' + 4 + 2 + 'a', [] + {}, 'array + array' + [] + []]; 

    for (var i = 0; i <= anArray.length; i++) {
        console.log('Array item #' + i +  '\n\tVALUE: ' + anArray[i] + '\n\tTYPE: ' + typeof(anArray[i]) + '\n');
    }
}

// /// //// /// // / // /// //// /// // / // /// //// /// // / 
//Testing code block. wtf is this output
// a.call(null);
function a() {
    console.log(this);
}