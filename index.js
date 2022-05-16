function rand (a,b){
    return Math.floor(Math.random()* (b-a) + a)
  }


function makeColor(){
  hexValue = "#";
  for(let i=0;i<6;i++){
    let num = rand(10,15);
    num = num.toString(16);
    hexValue = hexValue + num;
}
  return hexValue
}


console.log(makeColor());

function changeColor(){
    document.getElementById("test").style.background = makeColor()
}