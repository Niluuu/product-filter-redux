import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import CategoryType from './CategoryType';


const useStyles = makeStyles(theme => ({
  categoryRow: {
    minWidth: 627,
    margin: 10
  }
}));

const Categorys = ({categorys,checkedProduct, toggleCheck }) => {
  const classes = useStyles();

  return (
    <div className={classes.categoryRow}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={ <ListSubheader component="div" id="nested-list-subheader">Categorys</ListSubheader> }
        className={classes.root}
        >
        <CategoryType categorys={categorys} checkedProduct={checkedProduct} toggleCheck={toggleCheck} />
      </List>
    </div>
  )
}


export default Categorys
