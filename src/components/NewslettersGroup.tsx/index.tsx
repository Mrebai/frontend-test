import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { tNewsLetter } from "@/types/newsletters";
import NewsLetterCard from "./NewsLetterCard";

const NewslettersGroup = ({
  newsLettersValue,
  newsLettersTitle,
}: {
  newsLettersValue: tNewsLetter[];
  newsLettersTitle: string;
}) => {
  return (
    <Grid container spacing={2} direction="column" style={{ marginTop: "8px" }}>
      <Grid item>
        <Typography variant="h5" component="h5">
          {newsLettersTitle}
        </Typography>
      </Grid>
      <Grid item container spacing={2} direction="row">
        {newsLettersValue.map((newsLetter: tNewsLetter) => (
          <Grid key={newsLetter.title} item xs={4}>
            <NewsLetterCard newsLetter={newsLetter} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NewslettersGroup;
