import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-background mb-2">
              Piyush Kumar
            </p>
            <p className="text-sm text-background/60">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Github className="h-5 w-5 text-background" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-background" />
            </a>
            <a
              href="mailto:piyush@example.com"
              className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Mail className="h-5 w-5 text-background" />
            </a>
          </div>

          {/* Built with love */}
          <p className="text-sm text-background/60 flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
