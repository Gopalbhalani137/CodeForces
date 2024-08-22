import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const NavBar = () => {
  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken");
        window.location.reload();
      }
    });
    
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      {localStorage.getItem("accessToken") ?(
        <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </div>
      ):(
          <div className="flex-none">
          <a href="/auth/github">
            <div className="btn bg-black text-white hover:bg-gray-900">
              Log In
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
