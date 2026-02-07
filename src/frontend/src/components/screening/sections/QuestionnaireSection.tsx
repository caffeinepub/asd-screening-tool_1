import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { mchatQuestions } from '../data/mchatQuestions';
import { ProgressBar } from '../components/ProgressBar';

interface QuestionnaireSectionProps {
  currentQuestionIndex: number;
  answers: Record<number, boolean>;
  onAnswer: (questionIndex: number, answer: boolean) => void;
  onNext: (totalQuestions: number) => void;
  onBack: () => void;
}

export function QuestionnaireSection({
  currentQuestionIndex,
  answers,
  onAnswer,
  onNext,
  onBack
}: QuestionnaireSectionProps) {
  const currentQuestion = mchatQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex];
  const totalQuestions = mchatQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerClick = (answer: boolean) => {
    onAnswer(currentQuestionIndex, answer);
  };

  const handleNextClick = () => {
    onNext(totalQuestions);
  };

  const isAnswered = currentAnswer !== undefined;

  return (
    <section className="px-4 py-8 md:py-12 min-h-screen flex flex-col">
      <div className="container mx-auto max-w-3xl flex-1 flex flex-col">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-primary">
              Pertanyaan {currentQuestionIndex + 1} dari {totalQuestions}
            </span>
            <span className="text-sm font-semibold text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
          <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
        </div>

        {/* Question Card */}
        <Card className="shadow-soft border-2 border-primary/10 flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
              {currentQuestion.text}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
            {/* Answer Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Button
                onClick={() => handleAnswerClick(true)}
                variant={currentAnswer === true ? 'default' : 'outline'}
                size="lg"
                className={`h-24 text-xl font-bold rounded-2xl transition-all duration-200 ${
                  currentAnswer === true
                    ? 'bg-success hover:bg-success/90 text-success-foreground border-success shadow-lg scale-105'
                    : 'border-2 border-success/50 text-success hover:bg-success/10 hover:border-success hover:scale-105'
                }`}
              >
                YA
              </Button>
              
              <Button
                onClick={() => handleAnswerClick(false)}
                variant={currentAnswer === false ? 'default' : 'outline'}
                size="lg"
                className={`h-24 text-xl font-bold rounded-2xl transition-all duration-200 ${
                  currentAnswer === false
                    ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground border-destructive shadow-lg scale-105'
                    : 'border-2 border-destructive/50 text-destructive hover:bg-destructive/10 hover:border-destructive hover:scale-105'
                }`}
              >
                TIDAK
              </Button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 pt-6">
              <Button
                onClick={onBack}
                variant="outline"
                size="lg"
                className="flex-1 md:flex-none md:min-w-[140px] border-2"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Kembali
              </Button>
              
              <Button
                onClick={handleNextClick}
                disabled={!isAnswered}
                size="lg"
                className="flex-1 md:flex-none md:min-w-[140px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {currentQuestionIndex === totalQuestions - 1 ? 'Selesai' : 'Lanjut'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
