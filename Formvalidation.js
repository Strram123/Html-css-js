const formel=document.forms.feedbackform;
//console.log(formel);
const{fullname,type,email,description,terms}=formel.elements;
//console.log(fullname.placeholder,type,email.placeholder,description.placeholder,terms);

formel.addEventListener("submit",(e)=>{
   e.preventDefault();
   console.log("submitted");
   console.log(fullname.value,type.value,email.value,description.value,terms.value);

})
