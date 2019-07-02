import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class CountryTable extends Component {
  render() {
    const { products } = this.props
    return (
      <div>
         { 
          products.map(country => (
            <Card  key={country.population} >
            <CardActionArea>
              <CardMedia
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
            {/* <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions> */}
          </Card>
          ))}
      </div>
    )
  }
}

export default CountryTable
