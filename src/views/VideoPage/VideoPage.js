import React, {useCallback, useState} from "react";
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

import {animated, useTransition} from 'react-spring';

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

    const [visible, setVisible] = useState(false);
    const [emojiIndex, setEmojiIndex] = useState(0);

    const slideUpTransition = useTransition(visible, null, {
        from: {
            transform: `translateY(75px) scale(0.6)`,
            opacity: 0
        },
        enter: {
            transform: `translateY(0px) scale(1)`,
            opacity: 1
        },
        leave: {
            transform: `translateY(75px) scale(0.6)`,
            opacity: 0
        },
        config: {
            tension: 150,
            friction: 10
        }
    });

    const emojiArray = [
        {
            name: "Good",
            value: "😀"
        },
        {
            name: "Something",
            value: "🙂"
        },
        {
            name: "asdf",
            value: "🙁"
        },
    ]

    // 이거 위에 적절하게 넣어서 맞는 번호 호출하면 뜹니당
    const showEmoji = useCallback((index) => {
        setVisible(true);
        setEmojiIndex(index);
        setTimeout(() => {
            setVisible(false)
        }, 1000)
    }, []);

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
                <div style={{display: "flex", position: "absolute", top: "0px", right: "10px", zIndex: 500}}>
                    <PausePresentationIcon style={{fontSize: 80}}/>
                    <button
                        style={{border: "none", outline: "none", background: "transparent", marginLeft: "5px"}}
                        onClick={() => setClassicModal(true)}
                    >
                        <ExitToAppIcon style={{fontSize: 80}}/>
                    </button>
                    <button onClick={() => showEmoji(0)} style={{zIndex:100}}>1</button>
                    <button onClick={() => showEmoji(1)} style={{zIndex:100}}>2</button>
                    <button onClick={() => showEmoji(2)} style={{zIndex:100}}>3</button>
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
                    <div style={{flex: "1", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                {slideUpTransition.map(({ item, key, props }) =>
                    item ? (
                        <animated.div
                            style={{...props, position:"fixed", top: "0", left:"0", width: "100%", height: "100%", zIndex: 15, display: "flex", alignItems: "center", justifyContent: "center"}}
                            key={key}
                        >
                            <div style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
                                <div style={{zIndex: 1200, fontSize: "3rem",marginBottom: "20px", textAlign: "center"}}>{emojiArray[emojiIndex].name}</div>
                                <div style={{zIndex: 1200, fontSize: "3rem",paddingBottom: "10px", textAlign: "center"}}>
                                    {emojiArray[emojiIndex].value}
                                </div>
                            </div>
                        </animated.div>
                    ) : null
                )}

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
