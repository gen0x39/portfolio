import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
    title: {
      fontSize: 20,
    },
    license: {
      fontSize: 2,
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

function SkillCard({title, comments, license}:Props) {
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
                <Typography className={classes.license} variant='body2' component='h6'>
                    {license}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SkillCard