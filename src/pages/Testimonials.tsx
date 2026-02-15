import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { testimonials } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Client Testimonials
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Hear from the teams and leaders we've partnered with to deliver transformative AI solutions.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <Card key={t.name} className="border-border/50">
                  <CardContent className="p-6">
                    <Quote className="mb-4 h-8 w-8 text-primary/20" />
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                          {t.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.title}, {t.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
