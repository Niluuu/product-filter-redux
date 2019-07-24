import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function OutlinedChips({chips}) {
  const classes = useStyles();

  if (chips === null || !chips || chips.length === 0 ) {
    return null
  }

  else
  
  {
    return (
      <div className={classes.root}>
      {
        chips.map(chip => 
          <Chip
            label={`${chip}`}
            className={classes.chip}
            color="primary"
            variant="outlined"
          />
      )}
      </div>
    );
  }  
}
