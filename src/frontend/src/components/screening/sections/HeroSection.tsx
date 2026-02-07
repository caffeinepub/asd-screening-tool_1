import { Button } from '@/components/ui/button';
import { Waves } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="relative px-4 py-12 md:py-20">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Waves className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">M-CHAT-R Screening</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Deteksi Dini Tumbuh Kembang Anak
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Skrining risiko autisme (ASD) dengan metode M-CHAT-R yang akurat dan mudah.
            </p>
            
            <div className="pt-4">
              <Button
                onClick={onStart}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Cek Risiko Sekarang
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src="/assets/generated/hero-underwater-kids.dim_1200x600.png"
                alt="Ilustrasi anak-anak bermain di bawah air"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
