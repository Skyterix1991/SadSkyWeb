export const PositiveEmotions: string[] = [
  'ACTIVE',
  'AMUSED',
  'ENERGIZED',
  'EXCITED',
  'ENTHUSIASTIC',
  'HAPPY',
  'INTERESTED',
  'PROUD',
  'PEACEFUL',
  'FULFILLED',
  'SAFE',
  'CONFIDENT',
  'RELAXED',
];

export const NegativeEmotions: string[] = [
  'NERVOUS',
  'SCARED',
  'APATHETIC',
  'ASHAMED',
  'GUILTY',
  'HATE',
  'BRUNT',
  'DISHEARTENED',
  'HOLLOW',
  'HELPLESS',
  'HOPELESS',
  'LONELY',
  'SAD',
  'TIRED',
  'EXHAUSTED'
];

export class EmotionUtils {
  static getEmotionTranslation(emotion: string): string {
    switch (emotion) {
      case 'ACTIVE':
        return 'AKTYWNY';
      case 'AMUSED':
        return 'ROZBAWIONY';
      case 'ENERGIZED':
        return 'ENERGETYCZNY';
      case 'EXCITED':
        return 'PODEKSCYTOWANY';
      case 'ENTHUSIASTIC':
        return 'ENTUZJASTYCZNY';
      case 'HAPPY':
        return 'SCZĘŚLIWY';
      case 'INTERESTED':
        return 'ZAINTERESOWANY';
      case 'PROUD':
        return 'DUMNY';
      case 'PEACEFUL':
        return 'SPOKOJNY';
      case 'FULFILLED':
        return 'SPEŁNIONY';
      case 'SAFE':
        return 'BEZPIECZNY';
      case 'CONFIDENT':
        return 'PEWNY SIEBIE';
      case 'RELAXED':
        return 'ZRELAKSOWANY';
      case 'NERVOUS':
        return 'NERWOWY';
      case 'SCARED':
        return 'PRZESTRASZONY';
      case 'APATHETIC':
        return 'APATYCZNY';
      case 'ASHAMED':
        return 'ZAWSTYDZONY';
      case 'GUILTY':
        return 'WINNY';
      case 'HATE':
        return 'NIENAWIDZIĆ';
      case 'BRUNT':
        return 'WYPALONY';
      case 'DISHEARTENED':
        return 'ZNIECHĘCONY';
      case 'HOLLOW':
        return 'PUSTY';
      case 'HELPLESS':
        return 'BEZRADNY';
      case 'HOPELESS':
        return 'BEZNADZIEJNY';
      case 'LONELY':
        return 'SAMOTNY';
      case 'SAD':
        return 'SMUTNY';
      case 'TIRED':
        return 'ZMĘCZONY';
      case 'EXHAUSTED':
        return 'WYKOŃCZONY';
      default:
        return emotion;
    }
  }

  static getNegativeEmotions(emotions: string[]): string[] {
    return emotions.filter(emotion => NegativeEmotions.includes(emotion));
  }

  static getPositiveEmotions(emotions: string[]): string[] {
    return emotions.filter(emotion => PositiveEmotions.includes(emotion));
  }
}
