import React, { useState } from 'react';
import ContactAppHeader from './ContactAppHeader';
import Grid from '@mui/material/Grid';
import ContactList from './ContactList';
import MessageSection from './MessageSection';
import {MsgContext} from './MsgContext';

export default function ContactApp(props){
  const [msgContext, setMsgContext] = useState(messages);
  const [userId, setUserId] = useState("Andrew");
  const [currentUserContactList, setCurrentUserContactList] = useState(contactList.filter((item)=>item.id!==userId));
  const [toUser, setToUser] = useState(null);

  const changeToUser=(newToUser)=>{
    setToUser(newToUser);
  }

  const getSelectedUserId=(selectedUserId)=>{
    setUserId(selectedUserId);
    let newList = contactList.filter((item)=>item.id!==selectedUserId);
    setCurrentUserContactList(newList);
    setToUser(null);
  }

  return(
    <MsgContext.Provider value={[msgContext, setMsgContext]}>
      <ContactAppHeader userId={userId} usersList={contactList} setSelectedUserId={getSelectedUserId} />
      <div style={{padding:"90px 20px 20px 20px"}}>
        <Grid container spacing={2} style={{height:"85vh"}}>
          <Grid item xs={6} md={3} style={{borderRight:"1px solid grey", height:"100%", overflow:"scroll"}}>
            <ContactList key={userId} contactList={currentUserContactList} changeToUser={changeToUser} />
          </Grid>
          <Grid item xs={6} md={9}>
            {toUser && <MessageSection fromUser={userId} toUser={toUser} />}
          </Grid>
        </Grid>
      </div>
    </MsgContext.Provider>
  );
}

const contactList = [
  {
    id:'Andrew',
    name:'Andrew',
    number:'+919132331242'
  },
  {
    id:'Batrice',
    name:'Batrice',
    number:'+918294561029'
  },
  {
    id:'Cathy',
    name:'Cathy',
    number:'+918294561029'
  },
  {
    id:'Darwin',
    name:'Darwin',
    number:'+917832991379'
  },
  {
    id:'Eric',
    name:'Eric',
    number:'+919932447820'
  },
  {
    id:'Felix',
    name:'Felix',
    number:'+919932447820'
  },
  {
    id:'George',
    name:'George',
    number:'+918870134578'
  },
  {
    id:'Helen',
    name:'Helen',
    number:'+919932447820'
  },
  {
    id:'Isabel',
    name:'Isabel',
    number:'+919932447820'
  },
  {
    id:'Jenifer',
    name:'Jenifer',
    number:'+919932447820'
  },
  {
    id:'Ken',
    name:'Ken',
    number:'+919932447820'
  },
  {
    id:'Lauren',
    name:'Lauren',
    number:'+919932447820'
  },
  {
    id:'Tessa',
    name:'Tessa',
    number:'+919345689020'
  }
];

const messages = [
  {
    "from": "Andrew",
    "to": "Cathy",
    "message": "Hello Cathy!"
  },
  {
    "from": "Cathy",
    "to": "Andrew",
    "message": "Hey Andrew! How you doing?"
  },
  {
    "from": "Darwin",
    "to": "Cathy",
    "message": "Hi Cathy!"
  },
  {
    "from": "Cathy",
    "to": "Darwin",
    "message": "Hey Darwin! How are you?"
  },
  {
    "from": "Andrew",
    "to": "Batrice",
    "message": "Good day Batrice!"
  },
  {
    "from": "Darwin",
    "to": "Andrew",
    "message": "Hey Andrew. Darwin here"
  },
  {
    "from": "Darwin",
    "to": "Isabel",
    "message": "Hi"
  },
  {
    "from": "Darwin",
    "to": "Isabel",
    "message": "Can we have a discussion now?"
  },
  {
    "from": "Isabel",
    "to": "Tessa",
    "message": "Hi Tessa! Isabel here"
  },
  {
    "from": "Isabel",
    "to": "Ken",
    "message": "Hi Ken! Isabel here"
  },
  {
    "from": "Isabel",
    "to": "Helen",
    "message": "Hi Helen! Isabel here"
  },
  {
    "from": "Isabel",
    "to": "Felix",
    "message": "Hi Felix! Isabel here"
  },
  {
    "from": "Isabel",
    "to": "Darwin",
    "message": "Sure Darwin"
  },
  {
    "from": "Isabel",
    "to": "Andrew",
    "message": "Hi Andrew! Isabel here"
  },
  {
    "from": "Andrew",
    "to": "Eric",
    "message": "Hi Eric! Andrew here"
  },
  {
    "from": "Andrew",
    "to": "George",
    "message": "Hi George! Andrew here"
  },
  {
    "from": "Andrew",
    "to": "Isabel",
    "message": "Hi Isa"
  },
  {
    "from": "Andrew",
    "to": "Ken",
    "message": "Hi Ken! Andrew here"
  },
  {
    "from": "Andrew",
    "to": "Tessa",
    "message": "Hi Tessa! Andrew here"
  },
  {
    "from": "Batrice",
    "to": "Andrew",
    "message": "Hey Andrew! Good day!"
  },
  {
    "from": "Batrice",
    "to": "Cathy",
    "message": "Hi Cathy! Batrice here"
  },
  {
    "from": "Batrice",
    "to": "Eric",
    "message": "Hi Eric! Batrice here"
  },
  {
    "from": "Batrice",
    "to": "George",
    "message": "Hi George! Batrice here"
  },
  {
    "from": "Batrice",
    "to": "Isabel",
    "message": "Hi Isabel! Batrice here"
  },
  {
    "from": "Batrice",
    "to": "Ken",
    "message": "Hi Ken! Batrice here"
  },
  {
    "from": "Batrice",
    "to": "Tessa",
    "message": "Hi Tess! Batrice here"
  },
  {
    "from": "Cathy",
    "to": "Batrice",
    "message": "Yes Batrice"
  },
  {
    "from": "Cathy",
    "to": "Eric",
    "message": "Hi Eric! Cathy here"
  },
  {
    "from": "Cathy",
    "to": "Felix",
    "message": "Hi Felix! Cathy here"
  },
  {
    "from": "Cathy",
    "to": "Helen",
    "message": "Hi Helen! Cathy here"
  },
  {
    "from": "Cathy",
    "to": "Jenifer",
    "message": "Hi Jeni! Cathy here"
  },
  {
    "from": "Cathy",
    "to": "Lauren",
    "message": "Hi Lauren! Cathy here"
  },
  {
    "from": "Darwin",
    "to": "Batrice",
    "message": "Hi"
  },
  {
    "from": "Darwin",
    "to": "Eric",
    "message": "helooo"
  },
  {
    "from": "Darwin",
    "to": "George",
    "message": "Hi Geor"
  },
  {
    "from": "Darwin",
    "to": "Jenifer",
    "message": "Hey Jeni"
  },
  {
    "from": "Darwin",
    "to": "Lauren",
    "message": "Hey Lauren"
  }
];