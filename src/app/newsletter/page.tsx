import { map, compose, toPairs } from "ramda";
import { NEWSLETTER_ITEMS } from "../../mocks/newsletters";
import { groupNewsletters } from "./utils";
import {
  newsLettersKeyValuePairs,
  tNewsLettersArray,
} from "@/types/newsletters";
import NewslettersGroup from "@/components/NewslettersGroup.tsx";

const Newsletters = () => {
  return (
    <div>
      <h1>newsletters</h1>
      {compose(
        map(
          ([newsLettersTitle, newsLettersValue]: newsLettersKeyValuePairs) => {
            return (
              <NewslettersGroup
                key={newsLettersTitle}
                newsLettersTitle={newsLettersTitle}
                newsLettersValue={newsLettersValue}
              />
            );
          }
        ),
        toPairs
      )(groupNewsletters(NEWSLETTER_ITEMS as tNewsLettersArray))}
    </div>
  );
};

export default Newsletters;
