import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'
import { green, blue, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  grey: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  const redirectToTwitter = () => {
    window.location.href = 'https://twitter.com/gen0x39';
  };

  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/gen0x39';
  };

  const redirectToMail = () => {
    window.location.href = 'mailto:shinji@bbo.cs.tsukuba.ac.jp';
  };

  return (
    <>
      <Box p={2} id='contact'>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h4' >
            Contact
          </Typography>
        </Box>
        <Box className={classes.root} display='flex' justifyContent='center' p={1}>
          <Link href='mailto:shinji@bbo.cs.tsukuba.ac.jp' color='inherit' onClick={redirectToMail}>
            <Avatar className={classes.green}>
              <MailIcon />
            </Avatar>
          </Link>
          <Link href='https://twitter.com/gen0x39' color='inherit' onClick={redirectToTwitter}>
            <Avatar className={classes.blue}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link href='https://github.com/gen0x39' color='inherit' onClick={redirectToGitHub}>
            <Avatar className={classes.grey}>
              <GitHubIcon />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Contact;