import { Logo } from "../layout/header/headerLogo/HeaderLogo";
import { Section } from "../layout/section/Section";

export function Banner() {
  return (
    <Section>
      <h1 className="mx-auto mb-16 max-w-[80%] text-center text-2xl md:text-5xl">
        Hello I'm Shane. I make things online.
      </h1>

      <div className=" container mx-auto grid grid-cols-3 items-center gap-4 md:grid-cols-5">
        <div className="">
          <div className="flex min-h-[100px] items-center justify-center rounded-sm bg-green-200">
            <svg
              className="c-ql__icon"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 167.52 109.22"
            >
              <path
                data-v-523492f0=""
                d="M37.18 10h44.55a61 61 0 018.88-5.84A75.85 75.85 0 0199.36 0H37.18a5 5 0 100 10z"
                fill="#a798c9"
              ></path>{" "}
              <path
                data-v-523492f0=""
                d="M65.68 76.55c-.27-.7-.52-1.4-.77-2.11H21a5 5 0 100 10h48.45a62.12 62.12 0 01-3.77-7.89zM21 34.78h43.43c.36-1.09.75-2.16 1.18-3.21a60.32 60.32 0 013.25-6.75H21a5 5 0 100 10z"
                fill="#6dc4cb"
              ></path>{" "}
              <path
                data-v-523492f0=""
                d="M90.85 105a65 65 0 01-8.44-5.75H37.18a5 5 0 100 9.95H99.4a70.15 70.15 0 01-8.55-4.2z"
                fill="#a798c9"
              ></path>{" "}
              <path
                data-v-523492f0=""
                d="M61.56 53.83c0-1.43 0-2.82.11-4.2H4.2c-2.32 0-4.2 2.23-4.2 5s1.88 5 4.2 5h57.56c-.13-1.93-.2-3.85-.2-5.8z"
                fill="#ed6a60"
              ></path>{" "}
              <path
                data-v-523492f0=""
                d="M154.41 75q-2 0-7 2.91l-2.62 1.9a22.61 22.61 0 01-5.75 2.33 30.61 30.61 0 01-8.52 1.16q-9.61 0-18.5-6.41a25.12 25.12 0 01-7.42-9.17 29 29 0 01-2.92-13.18 29 29 0 012.92-13.18 24.57 24.57 0 017.28-9q9.18-6.55 18.64-6.55 10.18 0 16.31 4.95c3.2 2.14 5.68 3.2 7.43 3.2q4.5 0 10.19-7.86a13.93 13.93 0 003.07-8.1c0-2.58-1.26-4.88-3.79-6.92q-1.46-1-4.08-2.62l-3.49-2a48.91 48.91 0 00-10.7-4.3A48.69 48.69 0 00131.55 0q-14.42 0-28.69 7.86A55.37 55.37 0 0089.39 18a47.27 47.27 0 00-9.69 15.28 54 54 0 00-3.78 20.6 56.21 56.21 0 003.86 21.05 48 48 0 009.83 15.87 60.25 60.25 0 0013.47 10.49 59.13 59.13 0 0014.56 6.11 55.57 55.57 0 0014 1.82 47.72 47.72 0 0014.36-2.33q7.42-2.33 9.83-3.78l5-3.06a22.93 22.93 0 004.59-3.64 7.06 7.06 0 002-5.1c0-2-1.07-4.75-3.2-8.15q-5.3-8.16-9.81-8.16z"
                fill="#3d5afe"
              ></path>
            </svg>
            <h2 className="mb-0">Black Diamond</h2>
          </div>
        </div>
        <div className=" grid grid-rows-1">
          <div className="mb-2 flex min-h-[100px] items-center justify-center rounded-sm bg-red-200">
            <h2 className="mb-0">Black Diamond</h2>
          </div>
          <div className="flex min-h-[100px] items-center justify-center rounded-sm bg-blue-200">
            <h2 className="mb-0">Black Diamond</h2>
          </div>
        </div>
        <div className="h-full">
          <div className="flex h-full items-center justify-center rounded-sm bg-purple-200">
            <h2 className="mb-0">Black Diamond</h2>
          </div>
        </div>
        <div className="">
          <div className="mb-2 flex min-h-[100px] items-center justify-center rounded-sm bg-red-200">
            <h2 className="mb-0">Black Diamond</h2>
          </div>
          <div className="flex min-h-[100px] items-center justify-center rounded-sm bg-blue-200">
            <h2 className="mb-0">Black Diamond</h2>
          </div>
        </div>
        <div className="">
          {" "}
          <div className="flex min-h-[100px] items-center justify-center rounded-sm bg-green-200">
            <h2 className="mb-0">Black Diamond</h2>
          </div>
        </div>
      </div>
    </Section>
  );
}
