import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Background: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            ****です！<br />
            高専から筑波大学に3年次編入しました！<br />
            大学では，Neural Architecture Searchの研究をしています．<br />
            PyTorchとTypeScriptが好きです．
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Background;