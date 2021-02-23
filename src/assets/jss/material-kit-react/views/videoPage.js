import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container: {
    ...container,
    marginTop: "100px"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "& footer li a,& footer li a:hover,& footer li a:active": {
        color: "#FFFFFF"
    },
    "& footer": {
        position: "absolute",
        bottom: "0",
        width: "100%"
    }
  },
  vedio: {
    zIndex: "3",
    height: "1000px",
    margin: "10px 10px",
    borderRadius: "6px 0 0 6px",
  },
  profile: {  
    zIndex: "2",
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
      borderRadius: "50% !important"
    }
  },
  name: {
    marginTop: "-80px"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default profilePageStyle;
