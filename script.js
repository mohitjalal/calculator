let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '☒'){
      //index=len(string);
      string=string.slice(0, -1);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '1/x'){
      string=1/string;
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTMl == 'x²'){
      string=string*string;
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '2√a'){
      string=Math.sqrt(string);
      document.querySelector('input').value=string;
    }
    else{
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})