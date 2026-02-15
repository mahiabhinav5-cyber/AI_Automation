import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCases } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Use Cases & Portfolio
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Explore how we've helped organizations across industries transform with AI automation.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {useCases.map((uc) => (
                <Link key={uc.id} to={`/use-cases/${uc.id}`}>
                  <Card className="group h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {uc.industry}
                        </Badge>
                      </div>
                      <h3 className="mb-1 text-xl font-semibold group-hover:text-primary transition-colors">
                        {uc.title}
                      </h3>
                      <p className="mb-1 text-sm font-medium text-primary/70">{uc.client}</p>
                      <p className="mb-4 flex-1 text-sm text-muted-foreground">{uc.summary}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read case study
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
