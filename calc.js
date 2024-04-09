function add(){
  var current, sub;
  current = f.campoNumero.value;
  sub = current.charAt(current.length -1);
  if (sub == '+' || sub == '-' || sub == '*' || sub == '/'){
    f.campoNumero.value=current.substring(0, current.length-1);
  } 
  f.campoNumero.value+='+';
}
function minus(){
  var current, sub;
  current = f.campoNumero.value;
  sub = current.charAt(current.length -1);
  if (sub == '+' || sub == '-' || sub == '*' || sub == '/'){
    f.campoNumero.value=current.substring(0, current.length-1);
    f.campoNumero.value+='-';
  } else {
    f.campoNumero.value+='-';
  }
}
function multi(){
  var current, sub;
  current = f.campoNumero.value;
  sub = current.charAt(current.length -1);
  if (sub == '+' || sub == '-' || sub == '*' || sub == '/'){
    f.campoNumero.value=current.substring(0, current.length-1);
    f.campoNumero.value+='*';
  } else {
    f.campoNumero.value+='*';
  }
}
function divide(){
  var current, sub;
  current = f.campoNumero.value;
  sub = current.charAt(current.length -1);
  if (sub == '+' || sub == '-' || sub == '*' || sub == '/'){
    f.campoNumero.value=current.substring(0, current.length-1);
    f.campoNumero.value+='/';
  } else {
    f.campoNumero.value+='/';
  }
}