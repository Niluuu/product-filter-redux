import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export class CountryTable extends Component {

  render() {
    const classes = useStyles();
    const { products } = this.props

    return (
      <div>
         { 
          products.map(country => (
            
            // <TableRow >
            //   <TableCell component="th" scope="row"></TableCell>
            //   <TableCell align="right">{country.capital}</TableCell>
            //   <TableCell align="right">{country.alpha3Code}</TableCell>
            //   <TableCell 
            //     style={{backgroundImage: `url(${country.flag})`, backgroundSize: "cover", height: "30px", width: "50px" }} align="right">
            //   </TableCell>
            // </TableRow>
            <Card className={classes.card} key={country.population} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title={country.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          ))}
         {/* <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name of country</strong></TableCell>
                <TableCell align="right">Capitals</TableCell>
                <TableCell align="right">Algha code</TableCell>
                <TableCell align="right">Flags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
            </TableBody>
          </Table>
        </Paper> */}
      </div>
    )
  }
}

export default CountryTable
