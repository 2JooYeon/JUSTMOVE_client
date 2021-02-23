import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import Palette from "@material-ui/icons/Palette";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/videoPage.js";

import image from "assets/img/stage2.jpg";
import profile from "assets/img/faces/christian.jpg";

import videoSrc from "assets/video/example.mp4";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          display: "flex"
        }}
        >
            <div className={classes.container}>
                <GridContainer justify="center" align="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <div className={classes.video}>
                            {/* <video
                            loop={false}
                            >
                                <source src={videoSrc}></source>
                            </video> */}
                        <div className={classes.profile}>
                            <div>
                                <img src={profile} alt="..." className={imageClasses}/>
                            </div>
                            <div className={classes.name}>
                                <h3 className={classes.title} style={{display:"inline"}}>클러그 가자</h3>
                            </div>
                        </div>
                        </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                        <div className={classes.video}>
                            {/* <video
                            loop={false}
                            >
                                <source src={videoSrc}></source>
                            </video> */}
                        <div className={classes.profile}>
                            <div>
                                <img src={profile} alt="..." className={imageClasses}/>
                            </div>
                            <div className={classes.name}>
                                <h3 className={classes.title} style={{display:"inline"}}>클러그 가자</h3>
                            </div>
                        </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
