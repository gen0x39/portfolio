import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Card, CardContent, Paper, Typography } from '@material-ui/core'
import SkillCard from './SkillCard';

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
      <Box p={2} id='skills'>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h4' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6' align='center'>
                言語
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <SkillCard 
                      title='Python' 
                      comments='3-years' 
                      license='Copyright © 2001-2022 Python Software Foundation; All Rights Reserved'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <SkillCard title='C' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <SkillCard title='TypeScript' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <SkillCard title='Rust' comments='comment' license='a'/>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6' align='center'>
                フレームワーク
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <SkillCard title='PyTorch' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <SkillCard title='pytest' comments='comment' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <SkillCard title='React' comments='comment' license='a'/>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6' align='center'>
                資格
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <SkillCard title='TOEIC 660' comments='comment' license=''/>
                  </Grid>
                  <Grid item xs={3}> 
                    <SkillCard title='第二級陸上無線技術師' comments='comment' license=''/>
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