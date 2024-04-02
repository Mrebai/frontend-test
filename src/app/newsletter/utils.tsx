import { flatten, groupBy, compose, head, keys, values } from "ramda";

import {
  tNewsLettersArray,
  tGrouppedNewsLetter,
  tNewsLetter,
} from "@/types/newsletters";

export const groupNewsletters = (
  newsletters: tNewsLettersArray
): tGrouppedNewsLetter =>
  compose(
    groupBy((newsletter: tNewsLetter) => newsletter.site),
    flatten
  )(newsletters);

export const getNewsLettersTitle = (newsLetter: tGrouppedNewsLetter): string =>
  compose(head, keys)(newsLetter);

export const getNewsLettersValue = (
  newsLetter: tGrouppedNewsLetter
): tNewsLetter => compose(head, values)(newsLetter);
