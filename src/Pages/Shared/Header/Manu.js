import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import auth from '../../../firebase.init';
const Manu = () => {
    const logOut = () => {
        signOut(auth)
    }
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div className="navbar bg-base-100 container m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            < Link to="/">Home</ Link>
                            {user ? <Link to='/service'>Service</Link> : <Link to='/login'>Login</Link>}
                            {user ? <p>{user.displayName}</p> : <></>}
                            {user ? <button onClick={logOut} className="btn btn-outline btn-warning ml-4">Log Out</button> : <Link to='/signup'>SignUp</Link>}
                            
                        </li>
                        
                        
                        


                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ED TECH</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    <li>
                        < Link to="/">Home</ Link>
                        {user ? <Link to='/service'>Service</Link> : <Link to='/login'>Login</Link>}
                        {user ? <p>{user.displayName}</p> : <></>}
                        {user ? <button onClick={logOut} className="btn btn-outline btn-warning ml-4">Log Out</button> : <Link to='/signup'>SignUp</Link>}
                        

                    </li>
                    
                        
                </ul>
            </div>

        </div>
    );
};

export default Manu;