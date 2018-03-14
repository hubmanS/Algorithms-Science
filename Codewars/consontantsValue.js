// A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word
// "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22
// because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.
//
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
//
//     Good luck!
function solve(s) {
    s=s.toLowerCase();
    s=s.split('');
    s=deleteSpaces(s);
    array = s.match(/([^,aeiou]{1,})/gi);
    var arrayObtenido = array.map(function(elemento){
        var caracteres = elemento.split("");
        var val=0;
        caracteres.forEach(function(caracter) {
            val=val+value(caracter);
        });
        return parseInt(val);
    })
    return Math.max.apply(Math,arrayObtenido);
};

function deleteSpaces(arr) {
    arr=arr.filter(val=>
        val!==' '
    )
    var concat='';
    arr.forEach(val=>concat+=val);

    return concat;
}
function value(a) {
    let res = 26;
    switch (a) {
        case 'a':
            res = 1;
            break;
        case  'b':
            res = 2;
            break;
        case  'c':
            res = 3;
            break;
        case 'd':
            res = 4;
            break;
        case 'e':
            res = 5;
        case 'f':
            res = 6;
            break;
        case  'g':
            res = 7;
            break;
        case  'h':
            res = 8;
            break;
        case 'i':
            res = 9;
            break;
        case 'j':
            res = 10;
        case 'k':
            res = 11;
            break;
        case  'l':
            res = 12;
            break;
        case  'm':
            res = 13;
            break;
        case 'n':
            res = 14;
            break;
        case 'o':
            res = 15;
        case 'p':
            res = 16;
            break;
        case  'q':
            res = 17;
            break;
        case  'r':
            res = 18;
            break;
        case 's':
            res = 19;
            break;
        case 't':
            res = 20;
            break;
        case 'u':
            res = 21;
            break;
        case  'v':
            res = 22;
            break;
        case  'w':
            res = 23;
            break;
        case 'x':
            res = 24;
            break;
        case 'y':
            res = 25;
            break;
    }
    return res;
}

console.log(solve('chruschtschov'));