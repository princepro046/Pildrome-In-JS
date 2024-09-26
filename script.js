var input = prompt("Palindrome In JS");
function palindrome(mystring){
var serverinput = mystring.replace(/[^A-Z0-9]/ig,"").toLowerCase()

var reversedInput = serverinput.split('').reverse().join('');
if (input === reversedInput){
    document.write("<div>" + mystring + "is a palindrome <div>")
                                                     }
else{
      document.write("<div>" + mystring + "is not a palindrome <div>")
}                                               
                                                    }
palindrome(input)