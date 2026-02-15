import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCases } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedUseCases() {
  const featured = useCases.slice(0, 3);

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Proven Results Across Industries
          </h2>
          <p className="text-muted-foreground">
            See how we've helped leading organizations transform their operations with AI.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((uc) => (
            <Link key={uc.id} to={`/use-cases/${uc.id}`}>
              <Card className="group h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col p-6">
                  <Badge variant="secondary" className="mb-4 w-fit text-xs">
                    {uc.industry}
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
                    {uc.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    {uc.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/use-cases">
            <Button variant="outline" className="gap-2">
              View All Use Cases
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
