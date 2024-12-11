import { useState } from 'react';
// Import the image
import LogoImage from '../assets/HClogoN.png';

export default function Navbar() {
  // State to manage whether the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <header className="bg-white fixed top-0 left-0 right-0 z-10">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center sm:px-2 lg:px-8">
          <a className="block text-teal-600 mx-8" href="#">
            <span className="sr-only">Home</span>
            {/* Use the imported image */}
            <img className="h-8" src={LogoImage} alt="Logo" />
          </a>

          <div className="flex flex-1 px-8 items-center justify-end md:justify-between">
            {/* Desktop Menu */}
            <nav
              aria-label="Global"
              className="hidden md:block"
            >
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
                    About
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
                    Events
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
                    Gallery
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
                    Merch
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
                  Team
                  </a>
                </li>

                
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-full bg-teal-600 px-5 py-2.5 text-lg font-medium text-white transition hover:bg-teal-700"
                  href="https://www.alumni.gitam.edu/events/event/456379.dz" target='_blank'
                >
                  RSVP
                </a>
              </div>

              {/* Hamburger Button (for mobile) */}
              <button
                className="block rounded bg-gray-00 p-2.5 text-black transition hover:text-gray-600/75 md:hidden"
                onClick={toggleMenu} // Toggle the menu on click
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Sliding Menu) */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 w-64 bg-white h-full z-20 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          {/* Close Button */}
          <button onClick={closeMenu} className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 text-lg pt-24">
          <li>
            <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
              About
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
              Events
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
              Gallery
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
              Merch
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:underline hover:text-gray-500/75" href="#">
              Team
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}
