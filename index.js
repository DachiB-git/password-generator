const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pswField1 = document.querySelector("#password-field-1");
const pswField2 = document.querySelector("#password-field-2");


const generate = () => {
    let psw1 = "";
    let psw2 = "";
  for(let i = 0; i < 15; i++) {
      psw1 += characters[Math.floor(Math.random()* characters.length)];
  }
  for(let j = 0; j < 15; j++) {
      psw2 += characters[Math.floor(Math.random()* characters.length)];
  }
 pswField1.textContent = psw1; 
 pswField2.textContent = psw2; 
}


