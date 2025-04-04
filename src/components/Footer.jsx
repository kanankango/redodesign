import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center bg-gray-700 text-white py-4"> {/* Tailwind classes for footer styling */}
      <p className="mb-1 text-sm"> {/* Tailwind classes for margin-bottom and font size */}
        © 2025 Anuj Gupta | All Rights Reserved
      </p>
      <p className="mb-1 text-sm"> {/* Tailwind classes for margin-bottom and font size */}
        I’m always excited to meet new people. Let’s connect and see where it takes us!
      </p>
      <div className="page__footer-follow"> {/* Container for social icons */}
        <ul className="social-icons flex justify-center space-x-4 mt-2"> {/* Flex layout for icons, spacing, margin-top */}
          <li>
            <strong className="text-sm font-bold">STAY CONNECTED</strong> {/* Tailwind classes for strong text */}
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;