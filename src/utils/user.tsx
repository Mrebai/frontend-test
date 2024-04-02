import { isEmpty, intersection } from "ramda";
import { tSubscriptions } from "@/types/newsletters";

export const getUserHasSubscription = (
  newsLetterSubscriptions: tSubscriptions,
  userSubscriptions: tSubscriptions
): boolean =>
  !isEmpty(intersection(newsLetterSubscriptions, userSubscriptions)) ||
  isEmpty(newsLetterSubscriptions);
