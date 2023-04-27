let num = document.querySelectorAll(".num span");
let esl_1 = document.querySelector("input");

let A = "1234567890000.";
let Arr =[];
let value_1 = [];
let value_2 = [];
 esl_1.value = 0;


num.forEach((e, index)=>{
  e.addEventListener("click", (k)=>{
      console.log(e);
      // dk.target
      // k.target.style.color="red"
      Arr[0] == 0 && Arr.length > 0?Arr.shift() :"";
//....................................................................
      if (Arr.length === 0) {
        if(A.includes(e.innerHTML) && e.innerHTML !== "="){
          Arr.push(e.innerHTML)
           esl_1.value = Arr.join("");
          }
        }else if(A.includes(Arr[Arr.length -1]) && e.innerHTML !== "="){
         Arr.push(e.innerHTML)
          esl_1.value = Arr.join("");
       }else if(!A.includes(Arr[Arr.length -1]) && e.innerHTML !== "="){
        if(A.includes(e.innerHTML)){
          Arr.push(e.innerHTML)
           esl_1.value = Arr.join("");
          }
       };
//.......................................................................
if(e.innerHTML == "C"){
  Arr = [];
  value_2 =[]
   esl_1.value = 0;
  }
  if(e.innerHTML == "Del"){ 
    value_2 =[];
    Arr.pop()
    Arr.pop()
    esl_1.value = Arr.join("").length > 0 ? Arr.join(""):0;
   console.log(Arr);
  }
  //******* */
// esl_1.addEventListener("change", ()=>{
//   Arr = esl_1.value.split("");
//   value_2 = [];
// })

//.......................................................................
  
  if(e.innerHTML == "="){
    value_2 = [];
    value_1 = [];
    Arr = esl_1.value.split("");

Arr.forEach((r)=>{
  if (A.includes(Arr[Arr.length -1])) {
    if (A.includes(r)) {
      value_1.push(r)
    }else{
      value_2.push(value_1.join(""), r)

      value_1 = [];
    }
    
  }
  
});

value_2.push(value_1.join(""));

 for (let i = 0; i < value_2.length; i++) {

   if (value_2.includes("/")) {
     let vv = value_2.indexOf("/");
     let v = (value_2[vv-1] ) / (+value_2[vv + 1]);
     value_2[vv-1]  = v
     value_2.splice(vv, 2);
    };

   if (value_2.includes("*")) {
     let vv = value_2.indexOf("*");
     let v = (value_2[vv-1]) * (+value_2[vv + 1]);
     value_2[vv-1]  = v
     value_2.splice(vv, 2);
    };

   if (!value_2.includes("*") && !value_2.includes("/") && value_2.includes("+") ) {
     let vv = value_2.indexOf("+");
     let v = (value_2[vv-1]) + (+value_2[vv + 1]);
     value_2[vv-1]  = v
     value_2.splice(vv, 2);
    };

   if (!value_2.includes("*") && !value_2.includes("/") && value_2.includes("-")) {
     let vv = value_2.indexOf("-");
     let v = (value_2[vv-1]) - (+value_2[vv + 1]);
     value_2[vv-1]  = v
     value_2.splice(vv, 2);
    };

   if (value_2.includes("%")) {
     let vv = value_2.indexOf("%");
     if ((+value_2[vv + 1])) {
       let v = ((value_2[vv-1]) * (+value_2[vv + 1])) / 100;
       value_2[vv-1]  = v
       value_2.splice(vv, 2);
     }else{
       let v = (value_2[vv-1])  / 100;
       value_2[vv-1]  = v
       value_2.splice(vv, 2);
    }

    };

 }
             esl_1.value = value_2[0];
             Arr = value_2[0].toString().split("");
             console.log(value_2);
             console.log(Arr);
    }
  })
});
//.......................................................................

  


  
  
  
  
