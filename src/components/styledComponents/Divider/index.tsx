"use client";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

export const TitleDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  paddingTop: theme.spacing(1),
  width: "20px",
}));
