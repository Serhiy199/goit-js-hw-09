import"./assets/modulepreload-polyfill-ec808ebb.js";const o=document.querySelector("form"),l=document.querySelector("input"),s=document.querySelector("textarea"),r=localStorage.getItem("feedback-form-state"),a={email:"",message:""};if(r){const e=JSON.parse(r);let t=a.email;console.log(t),t="dcscvsdc",console.log(t),t=e.email,console.log(t),l.value=t,s.value=e.message}o.addEventListener("input",e=>{e.target===l&&(a.email=e.target.value.trim()),e.target===s&&(a.message=e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(a))});o.addEventListener("submit",e=>{if(e.preventDefault(),a.email&&a.message){const t=localStorage.getItem("feedback-form-state");console.log(JSON.parse(t)),localStorage.removeItem("feedback-form-state"),o.reset()}else alert("Please fill in the form field")});
//# sourceMappingURL=commonHelpers2.js.map