import React, {useCallback, useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Grid} from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";

import styles from "assets/jss/material-kit-react/views/challengePage.js";

import profile from "assets/img/faces/christian.jpg";
import image from "assets/img/challenge_bg.png";
import thumnail from "assets/img/bg7.jpg";
import rank from "assets/img/rank.png";
import rank1 from "assets/img/rank1.png";
import rank2 from "assets/img/rank2.png";
import rank3 from "assets/img/rank3.png";

import axios from "axios"


const useStyles = makeStyles(styles);

export default function ChallengePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const viedoImgClasses = classNames(classes.imgCardTop);

    const [challengeData, setChallengeData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const {data} = await axios.get("http://ec2-54-180-165-194.ap-northeast-2.compute.amazonaws.com/api/v1/challenge/1")
            console.log(data)
            setChallengeData(data.data)
            await axios.post("http://ec2-54-180-165-194.ap-northeast-2.compute.amazonaws.com/api/v1/action/challenge/1",{
                score: 1.5,
                userName: "사용자 이름"
            })
        }
        loadData()
    }, [])

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
                <div className={classes.main}>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <Card plain="true" style={{marginLeft: "20px"}}>
                                    <img
                                        alt="video"
                                        src={thumnail}
                                        className={classes.imgCardTop}>
                                    </img>
                                    <div align="right">
                                        <Badge color="primary">primary</Badge>
                                        <Badge color="info">info</Badge>
                                    </div>
                                    <Grid container spacing={12} style={{marginTop: "20px"}}>
                                        <Grid item xs={5}>
                                            <div className={classes.profile}>
                                                <div>
                                                    <img src={profile} alt="..." className={classes.imageClasses}/>
                                                </div>
                                                <h6 className={classes.title}>Christian Louboutin</h6>
                                            </div>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <div className={classes.description}>
                                                <Muted>영상 소개</Muted>
                                                <Divider/>
                                                <p>
                                                    You can write here details about one of your team members. You
                                                    can give more details about what they do. Feel free to add
                                                    some <a href="#pablo">links</a> for people to be able to
                                                    follow them outside the site.
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.challenge}>
                                    <Card plain="true">
                                        <div align="left">
                                            <h5>도전자 평균 점수</h5>
                                        </div>
                                        <div align="center">

                                            <h1>{challengeData ? challengeData.averageScore.toFixed(2) : 0} / 100</h1>
                                        </div>
                                        <Button
                                            color="twitter"
                                        >
                                            도 전 !
                                        </Button>
                                    </Card>
                                    <div style={{margin: "100px 0"}}>
                                        <Card>
                                            <CardHeader>
                                                <img
                                                    alt="rank"
                                                    src={rank}
                                                    width="35px"
                                                ></img>
                                                <h3 style={{display: "inline"}}>도전자 랭킹</h3>
                                            </CardHeader>
                                            <CardBody>
                                                <div style={{overflow: "auto", height: "200px"}}>
                                                    {challengeData && challengeData.rankings.map((data, index) => (
                                                        <div className={classes.rank} style={{display: "flex"}}>
                                                            {index <= 2 ? <img
                                                                src={index === 0 ? rank1 : index === 1 ? rank2 : rank3}
                                                                width="35px"
                                                            /> : <h3>{index + 1}</h3>}
                                                            <h5 style={{flex: "1"}}>{data.userName}</h5>
                                                            <h4 style={{marginRight: "10px", fontWeight: "bolder"}}>{data.score}</h4>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
