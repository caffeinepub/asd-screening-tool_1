import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertTriangle, Hospital, RotateCcw } from 'lucide-react';
import { type RiskLevel } from '../scoring/mchatScoring';

interface ResultsSectionProps {
  riskLevel: RiskLevel;
  onRestart: () => void;
}

export function ResultsSection({ riskLevel, onRestart }: ResultsSectionProps) {
  const getRiskConfig = () => {
    switch (riskLevel) {
      case 'low':
        return {
          icon: CheckCircle2,
          title: 'Risiko Rendah',
          description: 'Lakukan skrining ulang saat usia 2 tahun.',
          bgColor: 'bg-success/10',
          borderColor: 'border-success/30',
          iconColor: 'text-success',
          textColor: 'text-success'
        };
      case 'medium':
        return {
          icon: AlertTriangle,
          title: 'Risiko Sedang',
          description: 'Disarankan Follow-up.',
          bgColor: 'bg-warning/10',
          borderColor: 'border-warning/30',
          iconColor: 'text-warning',
          textColor: 'text-warning'
        };
      case 'high':
        return {
          icon: Hospital,
          title: 'Risiko Tinggi',
          description: 'Segera rujuk ke fasilitas kesehatan.',
          bgColor: 'bg-destructive/10',
          borderColor: 'border-destructive/30',
          iconColor: 'text-destructive',
          textColor: 'text-destructive'
        };
    }
  };

  const config = getRiskConfig();
  const Icon = config.icon;

  return (
    <section className="px-4 py-12 md:py-16 min-h-screen flex items-center">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-soft border-2 border-primary/10">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="font-heading text-3xl md:text-4xl text-primary">
              Hasil Skrining
            </CardTitle>
            <CardDescription className="text-base">
              Berikut adalah hasil skrining M-CHAT-R untuk anak Anda
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Risk Level Alert */}
            <Alert className={`${config.bgColor} ${config.borderColor} border-2`}>
              <Icon className={`h-6 w-6 ${config.iconColor}`} />
              <AlertTitle className={`text-2xl font-bold ${config.textColor} ml-2`}>
                {config.title}
              </AlertTitle>
              <AlertDescription className="text-lg font-medium mt-2 ml-2">
                {config.description}
              </AlertDescription>
            </Alert>

            {/* Additional Information */}
            <div className="bg-muted/50 rounded-xl p-6 space-y-4">
              <h3 className="font-heading text-xl font-semibold">Langkah Selanjutnya</h3>
              
              {riskLevel === 'low' && (
                <div className="space-y-2 text-muted-foreground">
                  <p>✓ Hasil skrining menunjukkan perkembangan yang baik</p>
                  <p>✓ Lanjutkan pemantauan tumbuh kembang secara rutin</p>
                  <p>✓ Ulangi skrining saat anak berusia 24 bulan</p>
                </div>
              )}
              
              {riskLevel === 'medium' && (
                <div className="space-y-2 text-muted-foreground">
                  <p>⚠ Konsultasikan hasil ini dengan dokter anak</p>
                  <p>⚠ Pertimbangkan evaluasi perkembangan lebih lanjut</p>
                  <p>⚠ Pantau perkembangan anak dengan lebih cermat</p>
                </div>
              )}
              
              {riskLevel === 'high' && (
                <div className="space-y-2 text-muted-foreground">
                  <p>🏥 Segera konsultasikan dengan Dokter Spesialis Anak</p>
                  <p>🏥 Bawa hasil skrining ini ke klinik tumbuh kembang</p>
                  <p>🏥 Evaluasi diagnostik lebih lanjut sangat direkomendasikan</p>
                </div>
              )}
            </div>

            {/* Important Note */}
            <Alert>
              <AlertDescription className="text-sm">
                <strong>Catatan Penting:</strong> Hasil skrining ini bukan diagnosis medis. 
                Konsultasikan dengan tenaga kesehatan profesional untuk evaluasi lebih lanjut.
              </AlertDescription>
            </Alert>

            {/* Restart Button */}
            <div className="pt-4">
              <Button
                onClick={onRestart}
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg py-6 rounded-xl"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Ulangi Skrining
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
