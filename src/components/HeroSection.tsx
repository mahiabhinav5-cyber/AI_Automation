import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
            <Play className="h-3 w-3" />
            Trusted by 50+ enterprises worldwide
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Automate Smarter with{" "}
            <span className="underline decoration-white/30 decoration-4 underline-offset-4">
              AI-Powered
            </span>{" "}
            Solutions
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 sm:text-xl">
            We help businesses transform operations, reduce costs, and scale effortlessly
            with custom AI automation solutions built for real-world impact.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold shadow-lg">
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/use-cases">
              <Button size="lg" variant="ghost" className="gap-2 text-base text-white hover:bg-white/10 hover:text-white">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
