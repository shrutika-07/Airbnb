'use client';

import Container from "../Container";
import EmailIcon from "./EmailIcon";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";
import InstagramIcon from "./InstagramIcon";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-10 shadow-sm">
      <div className="py-3 border-t border-gray-300">
        <Container>
          <div className="flex items-center justify-between">
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css2?family=Monotype+Corsiva&display=swap"
                rel="stylesheet"
              />
            </Helmet>
            <h2 className="text-lg mr-4 font-monotype-corsiva font-bold">
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
      <style jsx>{`
        .icon {
          transition: transform 0.3s;
        }
        .icon:hover {
          transform: scale(1.2);
        }
        .vertical-line {
          height: 20px;
          width: 1px;
          background-color: #ddd;
          margin: 0 8px;
        }
        .font-monotype-corsiva {
            font-family: "Monotype Corsiva", cursive;
            font-size: 1.5rem;
          }
      `}</style>
    </div>
  );
};

export default Footer;
