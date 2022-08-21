import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

export default function ContactList(props){
    
    return(
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.contactList.map((contact) => {
          const labelId = `checkbox-list-label-${contact.id}`;
  
          return (
            <React.Fragment key={contact.id}>
                <ListItem
                    key={contact.id}
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={()=>props.changeToUser(contact.id)}>
                            <CommentIcon />
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "lightseagreen"}}>
                            {contact.name[0]}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={contact.name} secondary={contact.number} />
                </ListItem>
                <Divider component="li" />
            </React.Fragment>
          );
        })}
      </List>
    );
}