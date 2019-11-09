function genPassword(){
    var length;
    var newChar;
    var password;
    var picker;
    var specChars = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","_","{","|","}","~"];
    var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
    var pass = document.getElementById("pass")

    //generate a random number between 8 and 128 characters
    length = numGen(8,128);

    //until i = length
    for(i = 0; i < length;){

        //generate a random number between one and 4
        newChar = numGen(1,4);
        
        if(newChar === 1){
            //for special characters generate a random number between 1 and 25
            picker = numGen(0,24);
            //using the randomly generated number pick a character from the array
            newChar = specChars[picker];
            //add the character to the password variable
            password = password + newChar;
            
            i++;
        }else if(newChar === 2){
            //for letters generate a random number between 1 and 26
            picker = numGen(0,25);
            newChar = caps[picker];
            password = password + newChar;
            i++;
        }else if(newChar === 3){
            picker = numGen(0,25);
            newChar = lowerCase[picker];
            password = password + newChar;
            i++;
        }else{
            //for numbers generate a random number between 1 and 10
            picker = numGen(0,9);
            newChar = numbers[picker];
            password = password + newChar;
            i++;
        }

    }
    
    //assign the newly generated password to the HTMl
    pass.value = password;
}

function copy(){
    //copy the password to the clipboard
    var copyText = document.getElementById("pass");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function numGen(min,max){
    //generate some numbers
    return (Math.floor(Math.random() * (max - min + 1))+min);
}