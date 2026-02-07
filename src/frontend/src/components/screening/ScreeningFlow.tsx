import { useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { InputSection } from './sections/InputSection';
import { QuestionnaireSection } from './sections/QuestionnaireSection';
import { ResultsSection } from './sections/ResultsSection';
import { FooterSection } from './sections/FooterSection';
import { ScreeningLayout } from './ScreeningLayout';
import { calculateRiskLevel, type RiskLevel } from './scoring/mchatScoring';

type Step = 'hero' | 'input' | 'questionnaire' | 'results';

export interface Demographics {
  ageMonths: number;
  gender: 'male' | 'female';
}

export function ScreeningFlow() {
  const [currentStep, setCurrentStep] = useState<Step>('hero');
  const [demographics, setDemographics] = useState<Demographics | null>(null);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null);

  const handleStartScreening = () => {
    setCurrentStep('input');
  };

  const handleDemographicsSubmit = (data: Demographics) => {
    setDemographics(data);
    setCurrentStep('questionnaire');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionIndex: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleNext = (totalQuestions: number) => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate risk and show results
      const risk = calculateRiskLevel(answers);
      setRiskLevel(risk);
      setCurrentStep('results');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setCurrentStep('input');
    }
  };

  const handleRestart = () => {
    setCurrentStep('hero');
    setDemographics(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setRiskLevel(null);
  };

  return (
    <ScreeningLayout>
      {currentStep === 'hero' && <HeroSection onStart={handleStartScreening} />}
      
      {currentStep === 'input' && (
        <InputSection
          onSubmit={handleDemographicsSubmit}
          onBack={() => setCurrentStep('hero')}
        />
      )}
      
      {currentStep === 'questionnaire' && (
        <QuestionnaireSection
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 'results' && riskLevel && (
        <ResultsSection
          riskLevel={riskLevel}
          onRestart={handleRestart}
        />
      )}
      
      <FooterSection />
    </ScreeningLayout>
  );
}
