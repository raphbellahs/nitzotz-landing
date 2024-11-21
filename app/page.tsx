import classNames from "classnames";
import { Container } from "../components/container";
import { StarsIllustration } from "../components/icons/stars";
// import { BuildMomentum } from "../components/sections/build-momentum";
// import { Clients } from "../components/sections/clients";
// import { EnjoyIssueTracking } from "../components/sections/enjoy-issue-tracking";
import { HomepageHero } from "../components/sections/homepage-hero";
import { UnlikeAnyTool } from "../components/sections/unlike-any-tool";
// import { SetDirection } from "../components/sections/set-direction";
// import { UnlikeAnyTool } from "../components/sections/unlike-any-tool";

export default function Homepage() {
  return (
    <>
      <div className="pb-[20rem] md:pb-[30rem] relative">
        <Container className="pt-[6.4rem] relative z-[1]">
          <HomepageHero />
        </Container>

        <div
          className={classNames(
            "mask-radial-faded pointer-events-none absolute z-[-1] w-full",
            "top-[60%]",
            "[--color:#4DA16E] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[192.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(182,182,193,0.4)] after:bg-background"
          )}
        >
          <StarsIllustration />
        </div>
      </div>

      <Container className="relative z-[1] mx-auto px-6 md:px-8 max-w-[140rem]">
        <UnlikeAnyTool />
      </Container>
    </>
  );
}