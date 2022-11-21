import { Link } from "@remix-run/react";

export function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/" className="ml-2">
        About
      </Link>
      <Link to="/" className="ml-2">
        Blog
      </Link>
    </nav>
  );
}
