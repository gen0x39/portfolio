import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
    title: {
      fontSize: 20,
    },
    custom: {
        backgroundColor: grey[50], 
        border: 'none', 
        boxShadow: 'none'
    },
});

type Props={
    title:string,
    comments:string,
    license:string,
}

function OutputCard({title, comments, license}:Props) {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.custom}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant='body1' component='h6'>
                    {comments}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default OutputCard