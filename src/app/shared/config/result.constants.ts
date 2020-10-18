export const ANXIETY_TITLES: string[] = [
  'Brak zespołu lęków uogólnionych',
  'Depresja',
  'Zaawansowana depresja'
];

export const ANXIETY_DESCRIPTIONS: string[] = [
  'Emocje które towarzyszyły ci przez ostatni tydzień nie wskazują na zaburzenie psychiczne lęków uogulnionych, NIE oznacza to jednak że wcale ich nie ma.\n Jeżeli posiadasz podejrzenie że możesz cierpieć na zaburzenia lękowe skontaktuj się z psychologiem aby potwierdzić swoje przypuszczenia.',
  'Emocje które towarzyszyły ci przez ostatni tydzień wskazują na zaburzenia lękowe, NIE jest to jednak diagnozą.\nZalecamy kontakt z psychologiem w celu potwierdzenia rezultatu i rozpoczęcia ewentualnej terapii.',
  'Emocje które towarzyszyły ci przez ostatni tydzień wskazują na ciężkie zaburzenia lękowe, NIE jest to jednak diagnozą.\nZalecamy kontakt z psychologiem w celu potwierdzenia rezultatu i rozpoczęcia ewentualnej terapii.'
];

export const DEPRESSION_TITLES: string[] = [
  'Brak depresji',
  'Depresja',
  'Zaawansowana depresja'
];

export const DEPRESSION_DESCRIPTIONS: string[] = [
  'Na podstawie twoich emocji które wypełniałeś przez ostatni tydzień nie stwierdziliśmy u ciebie depresji, NIE oznacza to jednak że wcale jej nie ma.\nJeżeli posiadasz podejrzenie że możesz cierpieć na depresję skontaktuj się z psychologiem aby potwierdzić twoje przypuszczenia.',
  'Na podstawie twoich emocji które wypełniałeś przez ostatni tydzień nasz system zakwalifikował cię jak chorego na depresję, NIE jest to jednak diagnoza.\nZalecamy kontakt z psychologiem w celu potwierdzenia rezultatu i rozpoczęcia ewentualnej terapii.',
  'Na podstawie twoich emocji które wypełniałeś przez ostatni tydzień nasz system zakwalifikował cię jak chorego na ciężką depresję, NIE jest to jednak diagnoza.\nZalecamy kontakt z psychologiem w celu potwierdzenia rezultatu i rozpoczęcia ewentualnej terapii.'
];

export class ResultUtils {

  static getDepressionResultName(depressionResult: string): string {
    switch (depressionResult) {
      case 'NEGATIVE':
        return DEPRESSION_TITLES[0];
      case 'MILD_DEPRESSION':
        return DEPRESSION_TITLES[1];
      case 'SEVERE_DEPRESSION':
        return DEPRESSION_TITLES[2];
    }
  }

  static getDepressionResultDescription(depressionResult: string): string {
    switch (depressionResult) {
      case 'NEGATIVE':
        return DEPRESSION_DESCRIPTIONS[0];
      case 'MILD_DEPRESSION':
        return DEPRESSION_DESCRIPTIONS[1];
      case 'SEVERE_DEPRESSION':
        return DEPRESSION_DESCRIPTIONS[2];
    }
  }

  static getAnxietyResultName(anxietyResult: string): string {
    switch (anxietyResult) {
      case 'NEGATIVE':
        return ANXIETY_TITLES[0];
      case 'MILD_DEPRESSION':
        return ANXIETY_TITLES[1];
      case 'SEVERE_DEPRESSION':
        return ANXIETY_TITLES[2];
    }
  }

  static getAnxietyResultDescription(anxietyResult: string): string {
    switch (anxietyResult) {
      case 'NEGATIVE':
        return ANXIETY_DESCRIPTIONS[0];
      case 'MILD_DEPRESSION':
        return ANXIETY_DESCRIPTIONS[1];
      case 'SEVERE_DEPRESSION':
        return ANXIETY_DESCRIPTIONS[2];
    }
  }
}
