import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import NotFound from "./NotFound";
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from "./pages/dashboard"
import { ProtectedRoute } from './ProtectedRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<ProtectedRoute element={ <Dashboard/> } />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
};
export default App;

// import React from "react";
// import { Routes, Route, useLocation,Navigate } from "react-router-dom";

// import Form from "./Form";
// import Header from "./Header";
// import HomePage from "./HomePage";
// import TaskApp from "./TaskApp";
// import TaskDetailsPage from "./TaskDetailsPage";
// import Signin from "./Signin";
// import { ProtectedRoute } from "./ProtectedRoute";
// import NotFound from "./NotFound";
// import Signup from "./pages/signup";
// // import ReactPlayground from "./ReactPlayground"

// function App() {

//  const location = useLocation();

//  return (
//    <div>
//      {location.pathname !== "/signin" && location.pathname !== "/notfound" && <Header />}
//      {/* <ReactPlayground /> */}
//      {/* <Form /> */}
//      <Routes>
//        <Route path="/signup" element={<Signup/>} />
//        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
//        <Route path="/tasks" element={<ProtectedRoute element={ <TaskApp/> } />} />
//        <Route path="/tasks/:id" element={<ProtectedRoute element={ <TaskDetailsPage/> } />} />
//        <Route path="/signin" element={ <Signin/>} />
//        <Route path="/notfound" Component={NotFound} />
//        <Route
//         path="*"
//         element={<Navigate to="/notfound" replace />}
//         />
//      </Routes>
//    </div>
//  );
// }

// export default App;
