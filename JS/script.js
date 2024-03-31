// ****Declaring Variables**** 


let male = document.getElementById("male");
let female = document.getElementById("female");
let genderChoice= document.getElementById("gender");
let calories;

// **** function to add the choice of the button clicked and use it to calculate()****
  male.addEventListener("click",function(){
    genderChoice.value="Male";

    male.style.fontWeight = "bolder";
    female.style.backgroundColor ="#adb5bd";
    female.style.borderColor ="#adb5bd";
  })   

  female.addEventListener("click",function(){
    genderChoice.value="Female";
    // add some style to the other button to tell the user that's not used
    male.style.fontWeight = "bolder";
    male.style.backgroundColor ="#adb5bd";
    male.style.borderColor ="#adb5bd";
  })


// **** function to calculate calories depending on gender ****

function calculate(){
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let age = Number(document.getElementById("age").value);

  if (genderChoice.value === "Female"){
  calories = 655.1+(9.563* weight)+(1.850*height)-(4.676* age);

  }else if (genderChoice.value === "Male"){
  calories = 66.5+(13.75*weight)+(5.003*height)-(6.755* age);
  }
  document.getElementById("result").innerText = "Calories Needed Per Day are "+ calories + " Calories";
}

// **** Giving the client a visual result



function handleKeyPress(event) {
  if (event.key === 'Enter') {
      calculate();
  }
}
