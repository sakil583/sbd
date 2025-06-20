import { useState } from "react"

const SignUp = () => {

  const [showPassword,setShowPassword]=useState(false);

  const showPasswordFunction=(e)=>{
      setShowPassword(e.target.checked)
  }

  const signUp=(e)=>{
   e.preventDefault()

  }
  return (
    <div>
      <div >
          <form onSubmit={signUp} className="w-96  border-2  border-indigo-400 hover:border-indigo-300 bg-red-300 rounded-xl mx-auto mt-6 p-8 mb-6 " >
            <label htmlFor="name" className="block  text-white text-xl font-semibold">Name</label>
            <input type="text" name="name" placeholder="Your Name..." id="name"className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md " ></input>

            <label htmlFor="email" className="block text-white text-xl font-semibold">Email</label>
            <input type="text" name="email" placeholder="Your Email..." id="email" className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md " ></input>

             <label htmlFor="phone" className="block  text-white text-xl font-semibold">Phone Number</label>
            <input type="text" name="phone" placeholder="Your Phone Number..." id="phone" className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md " ></input>

            <label htmlFor="accounttype" className="block  text-white text-xl font-semibold">Account Type</label>
            <select name="accounttype" id="accounttype" className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md" >
              <option>Bkash</option>
              <option>Roket</option>
              <option>Nogod</option>
            </select>

             <label htmlFor="password" className="block  text-white text-xl font-semibold">Password</label>
            <input type={showPassword?"text":"password"} name="password" placeholder="Password..." id="password" className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md " ></input>

             <label htmlFor="conpass"className="block mt-1 text-white text-xl font-semibold">Confirme Password</label>
            <input type={showPassword?"text":"password"} name="conpass" placeholder="Confirme Password..." id="conpass" className="w-full block mx-auto bg-gray-600 text-white font-semibold px-4 text-lg rounded-md " ></input>
            <div className="flex  justify-between mt-2">
                <div>
                      <input type="checkbox" onChange={showPasswordFunction} name="showpass" id="showpass"></input>
                       <label htmlFor="showpass" > {showPassword ? "Hide Password" : "Show Password"}</label>
                </div>


                <div>
                     <input type="checkbox" name="terms" id="terms"></input>
                     <label htmlFor="terms">Terms & Condition</label>
                </div>
            </div>
           <button type="submit" className="block w-52  mx-auto mt-6 px-6 py-2 text-center bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">SignUp</button>
          </form>
      </div>
    </div>
  )
}

export default SignUp