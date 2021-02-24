import React , { useCallback, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icon
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/resultPage.js";

import axios from "axios"

const useStyles = makeStyles(styles);

export default function ResultPage(props) {
    const [userName, setUserName] = useState('');
    const classes = useStyles();
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const registerAction = useCallback((userName, score) => {
        const asyncRegisterAction = async () => {
            await axios.post("http://ec2-54-180-165-194.ap-northeast-2.compute.amazonaws.com/api/v1/action/challenge/1",{
                score,
                userName
            })
        }
        asyncRegisterAction()
    }, [])
    return (
        <div
        className={classes.pageHeader}
        style={{  
        background: "-webkit-linear-gradient(-180deg, rgb(170, 142, 197), rgb(47, 58, 226))",
        background: "linear-gradient(-180deg, rgb(170, 142, 197), rgb(47, 58, 226))",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
        >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <p className={classes.divider}>도전 결과</p>
                  <CardBody>
                    <div align="center">
                        <h2 style={{display:"inline"}}>Score: </h2>
                        <h2 style={{display:"inline"}}>{props.score}</h2>
                        <h2 style={{display:"inline"}}> / 100</h2>
                    </div>
                    <CustomInput
                      labelText="이름을 입력해주세요."
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      onChange={e => setUserName(e.target.value)}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={() => registerAction( this.userName, props.score)}>
                      내 순위 확인하기
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    )
}