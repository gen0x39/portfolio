import React from 'react'
import BodyCard from './BodyCard'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 1030,
    maxWidth: '100%',
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                言語
              </Typography>
              <Typography color="textSecondary">
                Python / C / TypeScript / Rust
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                言語
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <BodyCard title='Python' comments='comment' license='Copyright © 2001-2022 Python Software Foundation; All Rights Reserved'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <BodyCard title='C' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <BodyCard title='TypeScript' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <BodyCard title='Rust' comments='comment' license='a'/>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                フレームワーク
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <BodyCard title='PyTorch' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <BodyCard title='React' comments='comment' license='a'/>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                資格
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <BodyCard title='TOEIC 660' comments='comment' license=''/>
                  </Grid>
                  <Grid item xs={3}> 
                    <BodyCard title='第二級陸上無線技術師' comments='comment' license=''/>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Skills;