function a() {
  setTimeout(function(){
    console.log(123);
  },2000)
}
function b(){
  console.log(789);
}
a();
b();
console.log(456);
