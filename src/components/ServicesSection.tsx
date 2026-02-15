import { services } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            End-to-End AI Automation Services
          </h2>
          <p className="text-muted-foreground">
            From strategy to deployment, we deliver custom AI solutions that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
