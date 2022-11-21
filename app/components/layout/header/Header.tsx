import { LinksFunction } from "@remix-run/server-runtime";
import { Logo, links as logoLinks } from "~/components/branding/logo/Logo";
import { Nav } from "../nav/nav";

type Props = {
  children?: React.ReactNode;
};

export const links: LinksFunction = () => [...logoLinks()];

export function Header({ children }: Props) {
  return (
    <header className="border-grey-100 flex items-center justify-between border-b border-solid p-4">
      <Logo />
      <Nav />
    </header>
  );
}
