import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions"
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/videoPage.js";

import image from "assets/img/stage2.jpg";
import profile from "assets/img/faces/christian.jpg";

import video from "assets/video/Alone.mp4"

import videoSrc from "assets/video/example.mp4";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function ProfilePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const [classicModal, setClassicModal] = React.useState(false);
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

            <div style={{position: "relative", width: "100%", height: "100vh"}}>
                <div style={{display: "flex", position: "absolute", top: "0px", right: "10px"}}>
                    <PausePresentationIcon style={{fontSize: 80}}/>
                    <button
                        style={{border: "none", outline: "none", background: "transparent", marginLeft: "5px"}}
                        onClick={() => setClassicModal(true)}
                    >
                        <ExitToAppIcon style={{fontSize: 80}}/>
                    </button>
                </div>
                <div style={{display: "flex", height: "100%"}}>
                    <div style={{
                        flex: "1",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div style={{
                            position: "absolute",
                            left: "15px",
                            top: "140px",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div className={classes.profile} style={{marginBottom: "15px"}}>
                                <img src={profile} alt="..." className={imageClasses}
                                     style={{width: "75px", height: "75px"}}/>
                            </div>
                            <div className={classes.name}>
                                <h3 className={classes.title} style={{color: "white"}}>CLUG</h3>
                            </div>
                        </div>
                        <video width="640" height="480" controls src={video}/>
                    </div>
                    <div style={{flex: "1", position: "relative", display: "flex", alignItems: "center"}}>
                        <div style={{
                            position: "absolute",
                            right: "15px",
                            top: "140px",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div className={classes.profile} style={{marginBottom: "15px"}}>
                                <img src={profile} alt="..." className={imageClasses}
                                     style={{width: "75px", height: "75px"}}/>
                            </div>
                            <div className={classes.name}>
                                <h3 className={classes.title} style={{color: "white"}}>SOMEONE</h3>
                            </div>
                        </div>
                        <video width="640" height="480" controls src={videoSrc}/>
                    </div>
                </div>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setClassicModal(false)}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                >
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setClassicModal(false)}
                        >
                            <Close className={classes.modalClose}/>
                        </IconButton>
                        <h4 className={classes.modalTitle}>지금 종료하시겠어요?</h4>
                    </DialogTitle>
                    <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                    >
                        <p>
                            현재까지 누적하신 점수가 초기화 됩니다.
                        </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                        <Button
                            color="transparent"
                            simple
                            onClick={() => setClassicModal(false)}
                            simple
                        >
                            이어하기
                        </Button>
                        <Button color="danger">
                            종료
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
