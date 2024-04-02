"use client";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const HeadingPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));
