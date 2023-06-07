'use client';

import Container from "../Container";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-10 shadow-sm">
      <div className="py-3 border-t border-gray-300">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-lg mr-4 font-bold">
                Connect with me
            </h2>
            <div className="flex gap-4">
              <a href="mailto:example@example.com" className="icon-link">
                <img src="/images/gmail.png" alt="Email" className="w-6 h-6 icon" />
              </a>
              <hr className="vertical-line" />
              <a href="https://github.com/shrutika-07" className="icon-link">
                <img src="/images/github.png" alt="GitHub" className="w-6 h-6 icon" />
              </a>
              <hr className="vertical-line" />
              <a href="https://www.linkedin.com/in/shrutika-gade-860774226/" className="icon-link">
                <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6 icon" />
              </a>
              <hr className="vertical-line" />
              <a href="https://instagram.com" className="icon-link">
                <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6 icon" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
