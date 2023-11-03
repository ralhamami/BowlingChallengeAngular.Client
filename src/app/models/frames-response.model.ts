export interface Frame {
  shots: (number | null)[];
  totalScore: number | null;
  frameTotalScore: number | null;
  isComplete: boolean;
  isStrike: boolean;
  isSpare: boolean;
  isOpenFrame: boolean;
  isLastFrame: boolean;
  isCurrentFrame: boolean;
}
