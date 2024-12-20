import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "my-6 py-2 text-2xl md:text-3xl lg:text-5xl font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "mb-12 text-lg text-primary-text md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};