export type RiskLevel = 'low' | 'medium' | 'high';

// M-CHAT-R scoring logic
// Critical items: 1, 3, 5, 6, 7, 9, 10, 14
const criticalItems = [0, 2, 4, 5, 6, 8, 9, 13]; // 0-indexed

export function calculateRiskLevel(answers: Record<number, boolean>): RiskLevel {
  let totalScore = 0;
  let criticalScore = 0;

  // Calculate scores
  Object.entries(answers).forEach(([indexStr, answer]) => {
    const index = parseInt(indexStr);
    
    // For M-CHAT-R, "TIDAK" (false) answers indicate risk
    // Questions 2 and 12 are reverse-scored (YA indicates risk)
    const isRiskAnswer = (index === 1 || index === 11) ? answer : !answer;
    
    if (isRiskAnswer) {
      totalScore++;
      if (criticalItems.includes(index)) {
        criticalScore++;
      }
    }
  });

  // M-CHAT-R scoring criteria:
  // High risk: Total score >= 8 OR Critical score >= 2
  // Medium risk: Total score 3-7 with Critical score < 2
  // Low risk: Total score 0-2
  
  if (totalScore >= 8 || criticalScore >= 2) {
    return 'high';
  } else if (totalScore >= 3) {
    return 'medium';
  } else {
    return 'low';
  }
}
