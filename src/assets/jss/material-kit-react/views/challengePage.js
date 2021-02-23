import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const challengePageStyle = {
    container,
    main: {
        background: "#FFFFFF",
        borderRadius: "10px"
    },
    mainRaised: {
    // margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
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
    profile: {
        margin: "auto auto ",
        textAlign: "center",
        "& img": {
          borderRadius: "50% !important",
          maxWidth: "160px",
          width: "100%",
          margin: "0 auto",
        }
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "300px",
        color: "#999",
        textAlign: "center !important"
    },
    challenge: {
        margin: "50px auto",
        maxWidth: "400px",
        width: "70vh"
    },
    rank: {
        width: "100%",
        height: "50px",
        padding: "8px",
        marginBottom: "5px",
        borderRadius: "3px",
        boxShadow: "0 6px 4px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 1px -5px rgba(0, 0, 0, 0.2)",
        "& img": {
            marginRight:"20px",
            borderRadius: "50% !important"
        },
        "& h3, h4, h5": {
        display: "inline",
        },
        "& h3": {
            margin: "0 31px 0 10px"    
        },
        "& h4": {
            marginLeft: "60px"    
        }
    },
};

export default challengePageStyle;
