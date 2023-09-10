import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import usaIcon from './usa.png';
import franceIcon from './france.png';
import israelIcon from './israel.png'
import italyIcon from './italy.png'
import spainIcon from './spain.png';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuLan() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
        
        onClick={handleClick}
      >
       <img src={usaIcon} alt="" width="28px"  />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
          <img src={israelIcon} alt="" width="28px"  />
          </ListItemIcon>
          {/* <ListItemText primary="Sent mail" /> */}
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <img src={franceIcon} alt="" width="28px"  />
          </ListItemIcon>
          {/* <ListItemText primary="Drafts" /> */}
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <img src={spainIcon} alt="" width="28px"  />
          </ListItemIcon>
          {/* <ListItemText primary="Inbox" /> */}
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <img src={italyIcon} alt="" width="28px"  />
          </ListItemIcon>
          {/* <ListItemText primary="Inbox" /> */}
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}