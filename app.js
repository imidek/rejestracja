const clear = document.querySelector(".clear");
const send = document.querySelector(".send");
const popup = document.querySelector(".popup");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");


let inputArr = [username, password, password2, email];

let errors = 0;

const removeError = (input) => {
	input.parentElement.classList.remove("error");
};

const checkForm = (input) => {
	input.forEach((inp) => {
		if (inp.value) {
			removeError(inp);
		} else {
			showError(inp, inp.placeholder);
      errors++;
		}
	});
};

const checkLength = (input, min) => {
  let a =input.value.length;
  if(a<min){
    if(min>4){
    showError(input, `${input.previousElementSibling.textContent.slice(0,-1)} musi zawierać minimum ${min} znaków!`)} else {
      showError(input, `${input.previousElementSibling.textContent.slice(0,-1)} musi zawierać minimum ${min} znaki!`)
    }
  }
};

const checkPassword = (p1,p2) => {
  if(p1.value!==p2.value){
    showError(password2,'Hasła są różne!')
  }
}

const checkMail = (email) =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!re.test(email.value)){
    showError(email,'niepoprawny adres email')
  }

}

const showError = (input, msg) => {
	let box = input.parentElement;
	box.classList.add("error");
	box.querySelector(".error-text").textContent = msg;
  errors ++;
};



send.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm(inputArr);
  checkLength(username,5)
  checkLength(password,8)
  checkPassword(password,password2)
  checkMail(email)
  const err = document.querySelectorAll('.error')
  console.log(err.length);
  if(err.length===0){
    popup.classList.add('show-popup')
  }
});

clear.addEventListener("click", (e) => {
	e.preventDefault();
	inputArr.forEach((input) => {
		let box = input.parentElement;
		box.classList.remove("error");
		input.value = "";
	});
});

// const checkLength = (input, min) => {
//     if(input.value.length>=min){
//       console.log('dobre hasło');
//     } else {
//       console.log('za krótkie hasło')
//       showError(input,input.previousElementSibling.textContent)
//     }
// }

// const showError = (input, msg) =>{
//   console.log(msg);
//   const errorMsg = input.parentElement.querySelector('.error-text')
//   input.parentElement.classList.add('error')
//   errorMsg.textContent = `${msg}`
// }

// const hideError = input =>{
//   input.parentElement.classList.remove('error')
// }

// const checkForm = (input) => {
// input.forEach(i=>{
//   if(i.value){
//     hideError(i)
//     popup.classList.add('show-popup')
//   } else {
//     showError(i,i.placeholder)

//   }
// })
// }

// const checkMail = (email) => {

//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//     if(re.test(email.value)){
//       console.log('correct mejl');
//     } else {
//       console.log('wroNG!!!')
//     }

// }

// send.addEventListener('click',e=>{
//   e.preventDefault()
//   let inputs =[username,password,password2,email]
//   checkForm(inputs)
//   checkLength(username, 3)
//   checkLength(password, 8)
//   checkMail(email)

// })

// // send.addEventListener('click',e=>{
// //   e.preventDefault()
// //   let z =[username,password,password2,email]
// //   // console.log(username.id);
// //   z.forEach(e=>{
// //     if(e.value){
// //       console.log(`${e.id} = ${e.value}`)
// //       e.parentElement.classList.add('success')
// //     } else {
// //       e.parentElement.classList.add('error')
// //     }
// //   })

//   // if(username.value){
//   //   console.log('coś tam jest wpisane...');
//   //   console.log(username.value)
//   // }else{
//   //   console.log('huja wpisałes...');
//   //   username.parentElement.classList.add('error')
//   // }
// // })

// clear.addEventListener('click',e=>{
//   e.preventDefault()
//   let z =[username,password,password2,email]
//   z.forEach(z=>{
//     z.value = ''
//     z.parentElement.classList.remove('error')
//     z.parentElement.classList.remove('success')
//   })
// })
