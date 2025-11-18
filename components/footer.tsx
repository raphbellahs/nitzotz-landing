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
        <div className="flex flex-col items-center lg:items-start">
          <Logo className="mb-4 h-4 w-4" />
          <span className="text-grey">raph.bellahs@gmail.com</span>
          <span className="text-grey">+33 6 95 07 85 29</span>
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