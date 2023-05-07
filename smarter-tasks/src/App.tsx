import React from "react";
import { Routes, Route, useLocation,Navigate } from "react-router-dom";


import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";

function App() {

 const location = useLocation();

 return (
   <div>
     {location.pathname !== "/signin" && location.pathname !== "/notfound" && <Header />}
     <Routes>
       <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
       <Route path="/tasks" element={<ProtectedRoute element={ <TaskApp/> } />} />
       <Route path="/tasks/:id" element={<ProtectedRoute element={ <TaskDetailsPage/> } />} />
       <Route path="/signin" element={ <Signin/>} />
       <Route path="/notfound" Component={NotFound} />
       <Route
        path="*"
        element={<Navigate to="/notfound" replace />}
        />
     </Routes>
   </div>
 );
}

export default App;
