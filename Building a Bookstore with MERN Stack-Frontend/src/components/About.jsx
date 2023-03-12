import { Box } from "@mui/material";
import React from "react";
import "./About.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; //importing icons from Font Awesome

const About = () => {
  return (
    <div className="about-container">
      <Box display="flex" flexDirection="column" alignItems="center">
        <h2 className="about-title" sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </h2>
        <h2 className="about-subtitle" sx={{ fontFamily: "fantasy" }} variant="h3">
          By Building a Bookstore with MERN Stack
        </h2>
         <br></br>
        <h3> Created By : Janindu Gayanga</h3>
        <br></br>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/janindu-gayanga-02ba60217/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color="black" size={30}  />
            <br></br>
          </a>
        
          <a href="https://twitter.com/JaninduGayanga" target="_blank" rel="noopener noreferrer">
            <FaTwitter color="black" size={30} />
          </a>
          <br></br>
          
          <a href="https://github.com/jani358" target="_blank" rel="noopener noreferrer">
            <FaGithub color="black" size={30} />
          </a>
        </div>
        <br></br>
        <h4>All rights reserved | 2023</h4>
      </Box>
    </div>
  );
};

export default About;






























// import { Box, IconButton } from "@mui/material";
// import React from "react";
// import "./About.css";



// const SocialLinks = () => {
//   return (
//     <Box display="flex" justifyContent="center" color={"black"}>
//       <IconButton
//         href="https://www.linkedin.com/in/janindu-gayanga-02ba60217/"
//         target="_blank"
//         rel="noopener"
//       >
//         <i className="fab fa-linkedin-in"></i>
//       </IconButton>
//       <IconButton
//         href="https://github.com/jani358"
//         target="_blank"
//         rel="noopener"
//       >
//         <i className="fab fa-github"></i>
//       </IconButton>
//       <IconButton
//         href="https://twitter.com/JaninduGayanga"
//         target="_blank"
//         rel="noopener"
//       >
//         <i className="fab fa-twitter"></i>
//       </IconButton>
//     </Box>
//   );
// };




// const About = () => {
//   return (
//     <div className="about-container">
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <h2 className="about-title" sx={{ fontFamily: "fantasy" }} variant="h2">
//           This is a CRUD Application
//         </h2>
//         <h2 className="about-subtitle" sx={{ fontFamily: "fantasy" }} variant="h3">
//           By Building a Bookstore with MERN Stack
//         </h2>
//          <br></br>
//         <h3> Created By : Janindu Gayanga</h3>
//         <br></br>
//         <SocialLinks />
//         <br></br>
//         <h4>2023</h4>
//       </Box>
//     </div>
//   );
// };

// export default About;
