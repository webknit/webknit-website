import { Link } from "@remix-run/react";

export function Nav() {
  return (
    <nav>
      {/* <Link to="/">Home</Link> */}
      <Link to="/" className="ml-2 sm:ml-6">
        About
      </Link>
      <Link to="/" className="ml-2 sm:ml-6">
        Blog
      </Link>
    </nav>
  );
}
