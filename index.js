function display(symbol){
    document.getElementById('val').textContent+=symbol;
}
function clear(){
    document.getElementById('val').textContent='';
    document.getElementById("new").textContent = '';

}
function del(){
    var y= document.getElementById('val').textContent
    y=y.slice(0,y.length-1)
    document.getElementById('val').textContent=y
}
function calculate() {
    var com = document.getElementById("val").textContent;
    document.getElementById("new").textContent = com;
    com = +eval(com).toPrecision(13);
    document.getElementById("val").textContent = com;
  }
// function equaal(){
//     var y= document.getElementById('val').textContent;
//     document.getElementById('new').textContent=y;
//     y= +eval(y).toPrecision(13);
//     document.getElementById('val').textContent=y;
// }