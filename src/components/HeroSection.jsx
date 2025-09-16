import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Eian</span>
            <span className="text-gradient ml-2 opacity-2 animate-fade-in-delay-2"> Ferba</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create out of this world web experiences, and applications.
            I am a full-stack developer not only dealing with the front-end but also the back-end. Combining both to create seamless and efficient web applications.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            {/* add bg + text color so the button is visibly colored */}
            <a href="#projects" className="cosmic-button bg-primary text-primary-foreground">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* fix className casing + keep the centering + bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
