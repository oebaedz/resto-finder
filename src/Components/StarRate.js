import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({rate}) {
    const [value, setValue] = React.useState();
  
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating name="read-only" value={rate} precision={0.1} size="small" readOnly />
      </Box>
    );
  }