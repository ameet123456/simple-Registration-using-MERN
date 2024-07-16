import React from "react";
import { useAuth } from "./Contex/State";
import { Link } from "react-router-dom";


function HomePAge() {
  const {auth,setAuth}=useAuth();
  return (
    <div className="home">
      <h1 className="home-head-1"> Hello and welcome to MyApp! </h1>
      <h2 className="home-head-2">
        Log in to manage your account or sign up to join us.
      </h2>
      <div>
        
        {
          !auth.user?(<><div>
            <Link to="/login">
              <button>login</button>
            </Link>
          </div>
          <div>
            <Link to="/signin">
              <button>signin</button>
            </Link>
          </div></>):(<>
            <div>
            <Link to="/login">
              <button >Logout</button>
            </Link>
          </div>
          </>)
        }
     <pre>{JSON.stringify(auth,null,4)}</pre>
      </div>
    </div>
  );
}

export default HomePAge;