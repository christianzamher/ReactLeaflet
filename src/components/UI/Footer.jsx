import { About } from "../About";
export const Footer = () => {
  return (
    <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-disc list-inside space-y-8">
                <li>
                  <a href="/" className="hover:text-sky-400 transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/about" className="hover:text-sky-400 transition">
                    About
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-sky-400 transition">
                    Guide
                  </a>
                </li> */}
                {/* <li>
                    <a href="#" className="hover:text-sky-400 transition">
                      Blocks
                    </a>
                  </li> */}
                <li>
                  <a href="https://czam.vercel.app/" className="hover:text-sky-400 transition">
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-sky-400 transition">
                    Terms of Use
                  </a>
                </li> */}
              </ul>

              <ul role="list" className="space-y-8">
                <li>
                  <a
                    href="https://github.com/christianzamher"
                    className="flex items-center space-x-3 hover:text-sky-400 transition"
                  >
                   <img
                        className="w-5 h-5"
                        src="src\assets\github.png"
                        alt="github icon"
                      />
                    <span>Github</span>
                  </a>
                </li>
                {/* <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-sky-400 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      <span>Twitter</span>
                    </a>
                  </li> */}
                {/* <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-sky-400 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                      <span>YouTube</span>
                    </a>
                  </li> */}

                {/* <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-sky-400 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      <span>Facebook</span>
                    </a>
                  </li> */}
                {/* <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-sky-400 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                      </svg>
                      <span>Medium</span>
                    </a>
                  </li> */}
                {/* <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-sky-400 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                      </svg>
                      <span>Pintrest</span>
                    </a>
                  </li> */}
                {/* <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-sky-400 transition"
                    >
                      <img
                        className="w-5 h-5"
                        src="https://c5.patreon.com/external/favicon/favicon.ico?v=69kMELnXkB"
                        alt="patreon icon"
                      />
                      <span>Patreon</span>
                    </a>
                  </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/christianzamorahermida" target="_blank"
                    className="flex items-center space-x-3 hover:text-sky-400 transition"
                  >
                    <img
                        className="w-5 h-5"
                        src="src\assets\linkedin.png"
                        alt="patreon icon"
                      />
                   
                    <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
              <span className="block text-gray-300"></span>

              <span className="flex justify-between text-white">
                <a href="#" className="font-semibold">
                  Terms of Use{" "}
                </a>
                <a href="#" className="font-semibold">
                  {" "}
                  Privacy Policy
                </a>
              </span>

              <span className="block text-gray-300">
                Need help?{" "}
                <a href="#" className="font-semibold text-white">
                  {" "}
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute h-full inset-0 flex items-center"
      >
        <div
          aria-hidden="true"
          className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
        ></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
      ></div>
    </footer>
  );
};
