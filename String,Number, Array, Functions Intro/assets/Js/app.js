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
  

}





  



