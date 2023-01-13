import{a as e,u as p,r as h,j as r,H as x,L as b}from"./app-00d9a716.js";import{G as y}from"./GuestLayout-448e075e.js";import{T as l,I as d}from"./TextInput-9e6dccf0.js";import{I as c}from"./InputLabel-ccbfb7b6.js";import{P as k}from"./PrimaryButton-c6199164.js";import"./ApplicationLogo-a031ba87.js";function w({name:t,value:o,handleChange:s}){return e("input",{type:"checkbox",name:t,value:o,className:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800",onChange:m=>s(m)})}function F({status:t,canResetPassword:o}){const{data:s,setData:m,post:u,processing:g,errors:i,reset:f}=p({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const n=a=>{m(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(y,{children:[e(x,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(c,{forInput:"email",value:"Email"}),e(l,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:n}),e(d,{message:i.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(c,{forInput:"password",value:"Password"}),e(l,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:n}),e(d,{message:i.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(w,{name:"remember",value:s.remember,handleChange:n}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[o&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Forgot your password?"}),e(k,{className:"ml-4",processing:g,children:"Log in"})]})]})]})}export{F as default};
