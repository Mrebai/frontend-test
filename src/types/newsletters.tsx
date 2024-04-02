export type tNewsLetter = {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: tSubscriptions;
};

export type tSubscriptions = ("RIGHT_1" | "RIGHT_2" | undefined)[];

export type tNewsLettersArray = tNewsLetter[][];

export type tGrouppedNewsLetter = Record<string, tNewsLetter[]>;

export type newsLettersKeyValuePairs = [string, tNewsLetter[]];
