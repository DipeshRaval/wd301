import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 localStorage.setItem("authenticated", "false");

 function handleSignin(e: React.FormEvent<HTMLFormElement>) {
   e.preventDefault();
   if (username === "admin" && password === "admin") {
     localStorage.setItem("authenticated", "true");
     navigate("/");
   } else {
     alert("Invalid username or password");
   }
 }

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
       <form onSubmit={handleSignin}>
         <div>
           <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
             Username
           </label>
           <input
             type="text"
             id="username"
             name="username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             placeholder="Enter your username"
             className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
           />
         </div>
         <div className="mt-4">
           <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
             Password
           </label>
           <input
             type="password"
             id="password"
             name="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter your password"
             className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
           />
         </div>
         <div className="mt-8">
           <button
             type="submit"
             className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
           >
             Sign In
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default Signin;
