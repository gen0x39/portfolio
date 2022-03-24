import React from 'react'
import OutputCard from './OutputsCard';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 1030,
    maxWidth: '100%',
  },
});

const Outputs: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2} id='outputs'>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h4' >
            Outputs
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6' align='center'>
                ブログ
                <Grid container spacing={2}>
                  <Grid item xs={3}> 
                    <OutputCard title='Qiita' comments='Worksの実装の解説' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <OutputCard title='はてな' comments='数式はこっちで管理' license='a'/>
                  </Grid>
                  <Grid item xs={3}> 
                    <OutputCard title='ブクログ' comments='読んだ本の管理' license='a'/>
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

export default Outputs;