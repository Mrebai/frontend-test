import { Metadata } from "next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { HeadingPaper } from "@/components/styledComponents/Paper";

export const metadata: Metadata = {
  title: "Newsletters",
  description: "our latest newsletters",
};

const NewslettersLayout = ({ children }: { children: React.ReactNode }) => (
  <Container maxWidth="md">
    <HeadingPaper elevation={0}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h4" component="h4">
            Newsletters
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1" component="p">
            Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
            et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
            newsletters selon vos centres d’intérêt et gérer plus facilement
            l’inscription à vos newsletters.
          </Typography>
        </Grid>
      </Grid>
    </HeadingPaper>

    {children}
  </Container>
);

export default NewslettersLayout;
