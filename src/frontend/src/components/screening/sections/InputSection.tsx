import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { type Demographics } from '../ScreeningFlow';

interface InputSectionProps {
  onSubmit: (data: Demographics) => void;
  onBack: () => void;
}

export function InputSection({ onSubmit, onBack }: InputSectionProps) {
  const [ageMonths, setAgeMonths] = useState<number | null>(null);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  const handleSubmit = () => {
    if (ageMonths && gender) {
      onSubmit({ ageMonths, gender });
    }
  };

  const isValid = ageMonths !== null && gender !== null;

  // Generate age options from 16 to 30 months
  const ageOptions = Array.from({ length: 15 }, (_, i) => i + 16);

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-2xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        <Card className="shadow-soft border-2 border-primary/10">
          <CardHeader className="space-y-4">
            <CardTitle className="font-heading text-3xl text-primary">
              Informasi Anak
            </CardTitle>
            <CardDescription className="text-base">
              Mohon isi informasi berikut untuk memulai skrining
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Disclaimer */}
            <Alert className="bg-secondary/10 border-secondary/30">
              <AlertCircle className="h-5 w-5 text-secondary" />
              <AlertDescription className="text-sm font-medium ml-2">
                Alat ini adalah skrining awal, bukan diagnosis medis.
              </AlertDescription>
            </Alert>

            {/* Age Selection */}
            <div className="space-y-3">
              <Label htmlFor="age" className="text-base font-semibold">
                Usia (Bulan)
              </Label>
              <Select
                value={ageMonths?.toString()}
                onValueChange={(value) => setAgeMonths(parseInt(value))}
              >
                <SelectTrigger id="age" className="h-12 text-base">
                  <SelectValue placeholder="Pilih usia anak dalam bulan" />
                </SelectTrigger>
                <SelectContent>
                  {ageOptions.map((age) => (
                    <SelectItem key={age} value={age.toString()}>
                      {age} bulan
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Gender Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Jenis Kelamin
              </Label>
              <RadioGroup
                value={gender || ''}
                onValueChange={(value) => setGender(value as 'male' | 'female')}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="text-base font-medium cursor-pointer flex-1">
                    Laki-laki
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="text-base font-medium cursor-pointer flex-1">
                    Perempuan
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!isValid}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 rounded-xl"
              >
                Lanjut
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
