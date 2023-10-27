const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet ="abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890";
const symbolSet = "`!@#$%^&*+_/";


// creating selectors for generate password function
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

//function to get random index number for random password  generation for data set
const getRandomData = (dataSet) =>
{
    return dataSet[Math.floor(Math.random() *dataSet.length)]
} 

const generatePassword = ()=>{
    const numchecked = (upperInput.checked ? 1:0)+ (lowerInput.checked ? 1:0 ) + (numberInput.checked ? 1:0) + (symbolInput.checked ? 1:0);
    if(numchecked>totalChar.value)
    {
        alert("Number of check box checked should not exceed number of character of password");
    }
    else 
    {
        let password="";
        if (upperInput.checked)
        {
            password+=getRandomData(upperSet);
        }
        if(lowerInput.checked)
        {
            password+= getRandomData(lowerSet);
        }
        if(numberInput.checked)
        {
            password+=getRandomData(numberSet);
        }
        if(symbolInput.checked)
        {
            password+=getRandomData(symbolSet);
        }
        while (password.length < totalChar.value)
          {
            const randomSet = getRandomData([upperSet, lowerSet, numberSet, symbolSet]);
            password += getRandomData(randomSet);
          }
          passBox.innerText = truncateString(password, totalChar.value);
    }
}      
generatePassword();
document.getElementById("btn").addEventListener("click", function(){
    generatePassword();
})


// function to trim the password upto max length asked by user of password



function truncateString(str , maxLength){
        if (str.length>maxLength){
            return str.slice (0,maxLength);
        }
        else {
            return str;
        }
}

