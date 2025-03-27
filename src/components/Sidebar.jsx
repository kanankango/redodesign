import React from 'react';
import AnujGupta from '../assets/images/anuj_gupta_pro.jpg'

function Sidebar() {
  return (
    <aside className="sidebar w-1/5 mr-10 bg-white p-5 text-center rounded-lg shadow-md font-medium"> {/* Tailwind classes for width, background, padding, etc. */}
      <div className="author__avatar">
        <img
          src={AnujGupta}
          className="author__avatar rounded-full border-4 border-gray-100" // Tailwind classes for rounded image and border
          alt="Anuj Gupta"
        />
      </div>
      <div className="author__content mt-4"> {/* Tailwind class for margin-top */}
        <h3 className="author__name text-lg font-bold">Anuj Gupta</h3> {/* Tailwind classes for author name text */}
        <p className="author__bio text-sm font-bold text-gray-700"> {/* Tailwind classes for bio text */}
          Executive Advisor on AI | Fractional Head of AI        </p>
        <p className="author__bio text-sm text-gray-700"> {/* Tailwind classes for bio text */}
          Helping businesses unlock the full potential of AI | Coaching leadership teams | Author of major AI books | Angel Investor | Board Member
        </p>
      </div>
      <div className="author__urls-wrapper mt-6"> {/* Tailwind class for margin-top */}
        <button className="btn btn--inverse bg-gray-200 text-gray-800 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300 transition-colors duration-300">Follow</button> {/* Tailwind classes for button styling */}
        <ul className="author__urls social-icons mt-2"> {/* Tailwind class for margin-top */}
          <li>
            <a href="https://www.linkedin.com/in/anujgupta-82/" className="text-gray-700 hover:text-gray-700 transition-colors duration-300"> {/* Tailwind classes for link text and hover */}
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/anujgupta82" className="text-gray-700 hover:text-gray-700 transition-colors duration-300">
              <i className="fa fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://gradient-advisors.ai/" className="text-gray-700 hover:text-gray-700 transition-colors duration-300">
              <i className="fa-solid fa-globe"></i> Gradient Advisors
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;