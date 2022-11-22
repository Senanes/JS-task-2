function myFunction()
 {
  let age = prompt("Yaşınızı daxil edin");
  if(age <= 17) {
    document.getElementById("demo").innerHTML = "Yaş 17-dən böyük olmalıdır"
  }
  else 
   {
    document.getElementById("demo").innerHTML = "Xoş gəlmisiniz"
  }
  
}


function myFunction1() {
  let text;
  if (confirm("Press a button!") == true) {
   document.body.style.backgroundColor = "white"
   text = "Welcome!";
  } else {
    document.body.style.display = "none"
    
  }
  document.getElementById("demo-1").innerHTML = text;
}


function Show() {

  let x = document.getElementById("test").value;
  y=x.slice(-3, -2);
  if (y==1){
    document.body.style.backgroundColor = "blue"
    text = "Səhər qrupu"
  }

  else if (y==2){
    document.body.style.backgroundColor = "yellow"
    text = "Günorta qrupu"
  }

  else if(y==3) {
    document.body.style.backgroundColor = "black"
    text = "Axşam qrupu"
  }

  document.getElementById("test").innerHTML = text
  

}





  



