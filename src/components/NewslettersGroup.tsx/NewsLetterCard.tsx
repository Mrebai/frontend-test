import * as React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import Image from "next/image";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { tNewsLetter, tSubscriptions } from "@/types/newsletters";
import { USER_WITHOUT_SUBSCRIPTION } from "@/mocks/user";
import { getUserHasSubscription } from "@/utils/user";
import { NewsletterCard } from "../styledComponents/Card";

const NewsLetterCard = ({ newsLetter }: { newsLetter: tNewsLetter }) => {
  const userSubscriptions =
    USER_WITHOUT_SUBSCRIPTION.subscriptions as tSubscriptions;
  const userHasSubscription = getUserHasSubscription(
    newsLetter.subscriptions,
    userSubscriptions
  );

  return (
    <NewsletterCard>
      <Image
        src={newsLetter.image}
        alt={newsLetter.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {newsLetter.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid xs display="flex" justifyContent="center">
          <Button
            variant="contained"
            color={userHasSubscription ? "primary" : "secondary"}
          >
            {userHasSubscription ? "S'inscrire" : "S'abonner"}
          </Button>
        </Grid>
      </CardActions>
    </NewsletterCard>
  );
};

export default NewsLetterCard;
