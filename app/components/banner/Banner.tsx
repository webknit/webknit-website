import { Logo } from "../layout/header/headerLogo/HeaderLogo";
import { Section } from "../layout/section/Section";

export function Banner() {
  return (
    <div className="grid grid-cols-2 justify-between">
      <div className="p-4 md:p-8">
        <h1 className="text-7xl">
          Hello{" "}
          <span className="block text-3xl">
            My name is Shane Prendergast. <br></br>I make things online.
          </span>
        </h1>
        <h2></h2>
      </div>
      <div className="h-100 flex min-h-full items-center justify-center bg-blue-100">
        <Logo />
      </div>
    </div>
  );
}
