var L = prompt("Enter the number of lines in your message:");
var N, symbol; // N is the number of symbols you will print across that line
var line = ''; // a string that will hold each line of your result (/n for new line in string)
var i;
var messageLine;
var components = [];

for (i = 0; i < L; i += 1) {
    messageLine = prompt("Enter your message(s):");
    components = messageLine.split(" ");
    N = components[0];
    symbol = components[1];
    line += symbol.repeat(N) + "\n";
}
console.log(line);
