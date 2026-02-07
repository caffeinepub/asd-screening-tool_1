import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="px-4 py-12 md:py-16 bg-primary/5">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* About Section */}
        <Card id="tentang-kami" className="shadow-soft border-2 border-primary/10">
          <CardHeader>
            <CardTitle className="font-heading text-2xl md:text-3xl text-primary">
              Tentang Kami
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-secondary">
              Inisiatif Mahasiswa FK UNSRI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Platform ini dikembangkan oleh mahasiswa Fakultas Kedokteran Universitas Sriwijaya (FK UNSRI) 
              di bawah supervisi ketat Dokter Spesialis Anak FK UNSRI dan bertujuan mempermudah akses orang tua 
              terhadap deteksi dini autisme.
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card id="faq" className="shadow-soft border-2 border-primary/10">
          <CardHeader>
            <CardTitle className="font-heading text-2xl md:text-3xl text-primary">
              FAQ - Pertanyaan yang Sering Diajukan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Apa itu Skrining M-CHAT-R/F?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  M-CHAT-R/F adalah alat skrining deteksi dini risiko Autism Spectrum Disorder (ASD) 
                  untuk anak usia 16-30 bulan. Instrumen ini BUKAN alat diagnosis medis, melainkan 
                  langkah awal untuk memantau tumbuh kembang anak.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Untuk usia berapa alat ini digunakan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Alat ini divalidasi khusus untuk balita usia 16 bulan sampai 30 bulan. Jika anak Anda 
                  di luar rentang usia ini, silakan konsultasikan langsung dengan Dokter Spesialis Anak.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Jika hasilnya 'Risiko Tinggi', apakah anak saya pasti autis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  TIDAK. Hasil 'Risiko Tinggi' berarti anak Anda memerlukan evaluasi lebih lanjut. 
                  Segera bawa hasil skrining ini ke Dokter Anak atau Klinik Tumbuh Kembang untuk 
                  pemeriksaan diagnostik yang lebih mendalam.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Apakah data saya aman?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Kami tidak menyimpan data identitas pribadi secara permanen. Skrining ini bersifat 
                  rahasia dan hanya digunakan untuk kepentingan deteksi dini Anda.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p className="flex items-center justify-center gap-2">
            © 2026. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
