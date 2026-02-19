import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCases } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UseCaseDetail = () => {
  const { id } = useParams();
  const useCase = useCases.find((uc) => uc.id === id);

  if (!useCase) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-4 text-2xl font-bold">Case study not found</h1>
          <Link to="/use-cases">
            <Button variant="outline">Back to Use Cases</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/use-cases"
              className="mb-6 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Use Cases
            </Link>
            <Badge variant="secondary" className="mb-4">
              {useCase.industry}
            </Badge>
            <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              {useCase.title}
            </h1>
            <p className="text-lg text-white/80">{useCase.client}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto max-w-3xl px-4 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 className="mb-3 text-xl font-semibold">The Challenge</h2>
                <p className="leading-relaxed text-muted-foreground">{useCase.challenge}</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold">Our Solution</h2>
                <p className="leading-relaxed text-muted-foreground">{useCase.solution}</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold">Results</h2>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {useCase.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCaseDetail;
