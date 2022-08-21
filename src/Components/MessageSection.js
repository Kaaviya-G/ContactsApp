import { Paper, Typography, Grid, TextField, IconButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import {MsgContext} from './MsgContext';

const senderMsgStyle={backgroundColor:"DodgerBlue", padding:"5px 20px", color:"white", textAlign:"initial"};
const receiverMsgStyle={backgroundColor:"green", padding:"5px 20px", color:"white", textAlign:"initial"};

export default function MessageSection(props) {

    const [newMsg, setNewMsg] = useState("");
    const [msgContext, setMsgContext] = useContext(MsgContext);
    const [conv, setConv] = useState([]);

    useEffect(()=>{
        let conversation = msgContext.filter((msg)=>(((msg.from===props.fromUser)&&(msg.to===props.toUser))||((msg.to===props.fromUser)&&(msg.from===props.toUser))));
        setConv(conversation);
    },[props,msgContext]);
    
    const handleMsgTyping = (e) => {
        setNewMsg(e.target.value);
    }

    const handleSend = () => {
        setNewMsg("");
        let newMsgDetail = {
            from:props.fromUser,
            to:props.toUser,
            message:newMsg
        };
        let curMsgs = [...msgContext,newMsgDetail];
        setMsgContext(curMsgs);
        let conversation = curMsgs.filter((msg)=>(((msg.from===props.fromUser)&&(msg.to===props.toUser))||((msg.to===props.fromUser)&&(msg.from===props.toUser))));
        setConv(conversation);
        console.log(JSON.stringify(curMsgs));
    }

    return(
        <Paper elevation={3} style={{height:"100%"}}>
            <Grid container style={{height:"100%"}}>
                <Grid item xs={12}>
                    <Typography component="div" sx={{bgcolor:"#3399FF", color:"white"}}>
                        Messages
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{height:"100%", padding:"0px 20px"}}>
                    <Grid
                        container
                        direction="row"
                        style={{width:"100%", height:"90%"}}
                    >
                        <Grid container alignSelf="flex-start" direction="column" flexWrap="nowrap" style={{height:"90%",overflow:"auto"}}>
                            {conv.length!==0?
                               conv.map((msgDetails,index)=>{
                                    return(
                                        <Grid item key={index} alignSelf={msgDetails.from===props.fromUser?"flex-end":"flex-start"} 
                                        style={{ padding:"5px", maxWidth:"45%"}}>
                                            <Typography align={msgDetails.from===props.fromUser?"right":"left"}
                                            sx={{fontSize:"12px"}}>
                                                {msgDetails.from}
                                            </Typography>
                                            <Paper elevation={3} style={msgDetails.from===props.fromUser?senderMsgStyle:receiverMsgStyle}>
                                                {msgDetails.message}
                                            </Paper>
                                        </Grid>
                                    );
                                })
                                :
                                <p>No Messages to display.</p>
                            }
                        </Grid>
                        <Grid item alignSelf="flex-end" style={{width:"100%"}}>
                            <div style={{display:"flex"}}>
                                <div style={{width:"100%", margin:"5px"}}>
                                    <TextField id="message" value={newMsg}
                                    variant="outlined" fullWidth 
                                    size="small" placeholder="Type the message here..."
                                    onChange={(e)=>handleMsgTyping(e)}
                                    onKeyPress={(e) => {
                                      if (e.key === 'Enter') {
                                        handleSend();
                                      }
                                    }} />
                                </div>
                                <div>
                                    <IconButton edge="end" aria-label="comments" color="primary" size="large" disabled={newMsg.length===0} onClick={handleSend}>
                                        <SendIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}