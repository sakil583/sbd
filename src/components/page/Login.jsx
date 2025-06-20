import { useState } from "react";
const Login = () => {


   const[formData,setFormData]=useState({
   
     email:'',
     password:'',
     showPassword: false,
 
   });
  const handleChange = (e) => {
   const { name, value, type, checked } = e.target;
    setFormData((prevData)=>({
       ...prevData,
       [name]:type==="checkbox"?checked : value,
    })
 
   )};


   const formSubmit = async (e) => {
  e.preventDefault();
  
};

 

   return (
     <>
     <form onSubmit={formSubmit} className="w-96 h- border-2  border-indigo-400 hover:border-indigo-300 bg-red-300 rounded-xl mx-auto mt-6 p-8 mb-6 ">

         <label htmlFor="email" className="block text-white text-xl font-semibold">Email</label>
        <input type="text" className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md mb-1" onChange={ handleChange} value={formData.email} name="email" placeholder="Email..." id="email"></input>
        
        

 
         <label htmlFor="password" className="block text-white text-xl font-semibold">Password </label>
         <input type={formData.showPassword ? "text" : "password"} className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md mb-1" onChange={ handleChange} name="password" value={formData.password}placeholder="password..." id="password"></input>
          

 
         <div className="flex justify-between mt-2">
           <div>
               <input type="checkbox"onChange={ handleChange}  name="showPassword"  checked={formData.showPassword} id="checkbox"></input>
               <label htmlFor="checkbox" className="text-white cursor-pointer font-semibold">Show Password</label>
           </div>
           <p className="text-white hover:underline cursor-pointer font-semibold">Forget Password?</p>
         </div>



         <button type="submit"   className="block w-52  mx-auto mt-6 px-6 py-2 text-center bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">Login</button>
 
     </form>





     </>
   )
 }
 




export default Login