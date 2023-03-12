import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReactEmoji from "react-emoji-render";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#FF69B4", height: "100vh" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">
            <ReactEmoji text=":book:" />
            View All products
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
