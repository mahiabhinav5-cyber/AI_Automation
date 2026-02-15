import { Link } from "react-router-dom";
import { Sparkles, Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="gradient-text">AutomateAI</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Transforming businesses through intelligent automation and AI-powered solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Chatbots</li>
              <li>Process Automation</li>
              <li>Predictive Analytics</li>
              <li>NLP Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">hello@automateai.com</p>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AutomateAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
