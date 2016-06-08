myname problem
```JavaScript
/*jshint multistr:true */
var text = "David. There's a Donald bat in the kitchen. Oh, jeez. David.";
var myName = "David";
var hits = [];
var final = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        };
        //Want to test if (hits === myName), but hits is an array, not a string. The test would render false. We need to TEMPORARILY convert hits into a string in order to test.
        var test = ""
        for (var k = 0; k < hits.length; k++) {
            test += hits[k];
        };
        if (test === myName) {
            //We don't want to push to hits because we need to clear hits after every test.
            final.push(hits);
            //If hits matches myName, we can add hits to the final, then delete it.
            hits = [];
        } else {
            hits =[];
        }
    }
}


if (final != "") {
    console.log(final);
}
else
    console.log("Your name wasn't found!");
```
