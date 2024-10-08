import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";


// ... existing imports ...
// ... existing imports ...

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex items-center">
          <Logo className="mr-4 h-4 w-4" />
          <span className="text-grey">Nitzotz Team - 2024</span>
        </div>
        
        <div className="my-8 flex space-x-6 text-grey lg:my-0">
          <TwitterIcon />
          <GithubIcon />
          <SlackIcon />
        </div>
        
        <div>
          <Logo className="h-8 w-8" />
        </div>
      </div>
    </Container>
  </footer>
);