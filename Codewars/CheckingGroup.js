function groupCheck(s) {
    if(s.length===0) return true;
    if (s.length % 2 !== 0) {
        return false;
    } else {
        for (let i = 0, j = s.length-1; i <= s.length / 2, j >= s.length / 2; i++, j--) {
            if(fabrique(s.charAt(i))===s.charAt(i+1)){
                i=i+1;
                continue;
            }
            if(fabrique(s.charAt(j-1))===s.charAt(j)){
                j=j-1;
                continue;
            }
            if(fabrique(s.charAt(i))!==s.charAt(j)){
                return false;
            }
        }
    }
    return true;
}

function fabrique(c) {
    switch (c) {
        case '(':
            res = ')';
            break;
        case '{':
            res = '}';
            break;
        case '[':
            res = ']';
            break;
    }
    return res;
}

console.log(groupCheck('[[](()())]'));