import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function NavList() {
    return (
      <ul className="mt-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <NavLink to={'/interview-tips'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Interview Tips</NavLink>
        <NavLink to={'/success-stories'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Success Stories</NavLink>
        <NavLink to={'/reviews'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Reviews</NavLink>
      </ul>
    );
  }
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className=" px-3 py-3 border-2 w-full shadow">
      <nav className="max-w-screen-xl mx-auto font-Quicksand">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div>
            <NavLink to={"/"} className="text-2xl font-bold">
              OnSiteBestReview
            </NavLink>
            <p className="tracking-wider">know about your Industry</p>
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </nav>
      {/* <div>
        <NavLink to={'/'} className='text-2xl font-bold'>OnSiteBestReview</NavLink>
        <p className='tracking-wider'>know about your Industry</p>
        </div>

      <div className='flex gap-5 self-end'>
        <NavLink to={'/interview-tips'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Interview Tips</NavLink>
        <NavLink to={'/success-stories'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Success Stories</NavLink>
        <NavLink to={'/reviews'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Reviews</NavLink>
      </div> */}
    </div>
  );
};

export default Nav;
