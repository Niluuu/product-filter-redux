import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  card: {
    maxWidth: 240,
    margin: 10
  },
  media: {
    height: 140,
  },
});


const CountryTable = ({ products }) =>{
    const classes = useStyles();

    return (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
           >
          { 
            products.map(country => (
              <Card  className={classes.card} key={country.population} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={country.flag}
                  title={country.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {country.capital}-{country.alpha3Code}
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
          </Grid>

    )
}


export default CountryTable
