var x = 10;
var y = x;

if(x==10){
    while (y>1){
        y--;
        x= x*y;
        if(x==1){
            break;
        }
    }
    
}


console.log(x)