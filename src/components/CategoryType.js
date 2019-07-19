import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import { filterCategory } from "../redux/actions/productActions";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  categoryRow: {
    minWidth: 400,
    maxWidth: 400,
    margin: 10
  }
}));

const CategoryType = ({categorys, checkedProduct, toggleCheck  }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState([]);
  
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      toggleCheck(checkedProduct = newChecked);
    } else {
      newChecked.splice(currentIndex, 1);
      toggleCheck(checkedProduct.filter(crI=> checkedProduct.splice(crI, 1)));
    }

    setChecked(newChecked);

    toggleCheck(checkedProduct = newChecked)
  }

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className={classes.categoryRow}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="By Name" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List dense className={classes.root}>
            {categorys.map(value => {
              const labelId = `checkbox-list-secondary-label-${value.name}`;
              return (
                <ListItem key={value.name} button> 
                  <ListItemText id={labelId} primary={`${value.name}`} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      color="default"
                      onChange={handleToggle(value.name)}
                      checked={checked.indexOf(value.name) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
    </div>
  )
}


export default  CategoryType
