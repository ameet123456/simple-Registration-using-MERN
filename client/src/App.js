import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Componenets/layout/layout.js';
import HomePAge from "./Pages/HomePAge.js"
import Login from './Pages/Login.js';
import SignIn from "./Pages/SignIn.js"
import Update from "./Pages/Update.js"
import NotFound from "./Pages/NotFound.js"
import Profile from './Pages/Profile.js';
import { AuthProvider } from './Pages/Contex/State.js'; 
function App() {
  return(
    <>
   
   <AuthProvider>
      
        <Layout>
          <Routes>
            <Route path="/" element={<HomePAge />} /> {/* Ensure the case matches */}
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/update" element={<Update />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      
    </AuthProvider>
    
  
    </>
  )
};

export default App