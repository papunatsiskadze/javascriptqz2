// 1)))) 

// var cifrebi= [
//     ["erti","ori","sami","otxi","xuti"],
//     [1,2,3,4,5,6,7]
// ];
// for (i=0; i<cifrebi.length; i++){
//     document.write(cifrebi[i] + "</br>");
// }


// 3))))
// var cifrebi= [ 15,53,22,198,10,28,16,70,33,951 ];
// var result=cifrebi.filter ((n) => n%2  >0);
// document.write(result);



// 2))))

function display(x,secondfunc){
    var shefaseba =secondfunc(x);
    document.write(shefaseba);
}
function shefasebisfunc(price){
    if (price <20)
    return "იაფია" ;
    else if (price <50)
    return "საშუალო ფასი" ;
    else if (price >50)
    return "ძვირია" ;
}

display (30,shefasebisfunc)