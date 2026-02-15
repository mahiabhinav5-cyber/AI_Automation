import { testimonials } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it — hear from the teams we've helped.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((t) => (
            <Card key={t.name} className="border-border/50">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary/10">
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
  );
}
