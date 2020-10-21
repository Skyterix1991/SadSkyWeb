export const ANXIETY_TITLES: string[] = [
  'Brak zespołu lęków uogólnionych',
  'Zespół lęków uogólnionych',
  'Zaawansowany zespół lęków uogulnionych'
];

export const ANXIETY_DESCRIPTIONS: string[] = [
  'Z przyjemnością i spokojem informujemy że nie zarejestrowano żadnych zaburzeń psychicznych! Jeżeli wynik testu zmartwił cię lub nadal nie jesteś pewien rezultatu, koniecznie nawiąż kontakt ze specjalistą.',
  'Samopoczucie jakie przez ostatni tydzień udało się nam zaobserwować są wystarczającą podstawą aby sądzić że osoba badana cierpi na Zespół Lęków Uogulnionych.',
  'Zaobserwowany w ostatnim czasie nastrój, obawy i lęki mogą wskazywać na zaawansowany zespół lęków uogólnionych.'
];

export const DEPRESSION_TITLES: string[] = [
  'Brak depresji',
  'Depresja',
  'Ciężka depresja'
];

export const DEPRESSION_DESCRIPTIONS: string[] = [
  'Z przyjemnością i spokojem informujemy że nie zarejestrowano żadnych zaburzeń psychicznych! Jeżeli wynik testu zmartwił cię lub nadal nie jesteś pewien rezultatu, koniecznie nawiąż kontakt ze specjalistą.',
  'W oparciu o powtarzające się przez ostatni tydzień dane, dotyczące samopoczucia, które użytkownik regularnie wprowadzał do systemu. Występuje podejrzenie zaburzenia psychicznego: depresji. Zaleca się możliwie jak najszybszy kontakt z profesjonalistą (psychologiem/psychiatrą).',
  'Informacje jakie na podstawie ankiet wypełnianych przez użytkownika udało się zebrać w minionym tygodniu sugerują wysokie ryzyko zapadnięcia na ciężką depresje.'
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
      case 'MILD_ANXIETY':
        return ANXIETY_TITLES[1];
      case 'SEVERE_ANXIETY':
        return ANXIETY_TITLES[2];
    }
  }

  static getAnxietyResultDescription(anxietyResult: string): string {
    switch (anxietyResult) {
      case 'NEGATIVE':
        return ANXIETY_DESCRIPTIONS[0];
      case 'MILD_ANXIETY':
        return ANXIETY_DESCRIPTIONS[1];
      case 'SEVERE_ANXIETY':
        return ANXIETY_DESCRIPTIONS[2];
    }
  }
}
