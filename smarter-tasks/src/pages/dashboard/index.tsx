import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const userDataStr = localStorage.getItem("userData");
  const navigate = useNavigate();
  let userData;
  if(userDataStr)
  {
     userData= JSON.parse(userDataStr);
  }


  const handleLogout =()=>{
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    navigate("/signin")
  }

  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <p className="text-xl text-center text-gray-800 mb-8">Name :  <span className='font-bold'>{userData.name}</span></p>
      <p className="text-xl text-center text-gray-800 mb-8">Email ID : <span className='font-bold'>{userData.email}</span></p>
      <button
        id='logout-link'
        onClick={handleLogout}
        className='text-white px-4 py-2 bg-gray-800 rounded-lg'
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
