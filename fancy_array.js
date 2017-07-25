function fancyArray(symbol, rev){
    var arr = ["James", "Jill", "Jane", "Jack"]
    if(rev){
        indx = (arr.length - 1);
        incr = -1;
    }else{
        indx = 0;
        incr = 1;
    }
    for(var i = indx; i < arr.length && i >= 0; i += incr){
        console.log(i + ' ' + symbol + ' ' + arr[i]);
    }
}

var symbol = '->'
var rev = true;

fancyArray(symbol, rev);