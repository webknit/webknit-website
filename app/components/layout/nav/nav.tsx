import { NavLink } from "@remix-run/react";

export function Nav() {
  const classes = "ml-2 sm:ml-6";
  const activeClassName = `${classes} underline`;

  return (
    <nav>
      {/* <Link to="/">Home</Link> */}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeClassName : classes)}
      >
        About
      </NavLink>
      <NavLink to="/" className="ml-2 sm:ml-6">
        Blog
      </NavLink>
    </nav>
  );
}
