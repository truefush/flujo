/*input dates of school */
alert("0 to 2 lose | 3 to 5 pass");
let firstName = prompt("add your complete name");
let nameCollage =prompt("add name of your school"); 
let rating = parseInt(prompt("add your rating from 0 to 5"));
/*algorit and print */
if (rating >= 3 && rating <= 5){
    alert("PASS SUBJECT");
    console.log("PASS SUBJECT");
    document.write('<h1>PASS SUBJECT</h1>');
    document.write(firstName + " ");
    document.write(nameCollage);
}else if(rating >= 0 && rating <= 2){
    alert("LOSE SUBJECT");
    console.log("LOSE SUBJECT");
    document.write('<h1>LOSE SUBJECT</h1>');
    document.write(firstName + " ");
    document.write(nameCollage);
}else{
    alert("It's not valid add rating again");
}
