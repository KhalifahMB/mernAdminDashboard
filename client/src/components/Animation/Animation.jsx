import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import "./Animation.css";

const Animation = () => {
  const theme = useTheme();
  let elArr = [];
  const spans = () => {
    for (let i = 0; i < 21; i++) {
      elArr.push(i);
    }
  };
  spans();

  return (
    <Box
      m="1rem"
      position="absolute"
      top="50%"
      left="50%"
      sx={{
        backgroundColor: theme.palette.primary[500],
        borderRadius: "50%",

        "& > span::before": {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      <div className="loader">
        {elArr.map((item, index) => {
          return <span key={index} style={{ "--i": index }}></span>;
        })}
        <Box
          margin="auto"
          position="absolute"
          top="50%"
          left="30%"
          width="100%"
        >
          <Typography
            className="textAnimate"
            color={theme.palette.secondary[500]}
          >
            Loading
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default Animation;
