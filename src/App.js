import React, { Component } from 'react'
import './App.css';
import { connect } from "react-redux";
import { fetchProducts, filter, search_text } from "./redux/actions/productActions";
import Input from './components/Input'
import CountryTable  from './components/CountryTable';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Categorys from './components/Categorys'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.props.text.length < 1) {
      alert("write something")
    }else{
      this.props.dispatch(filter())  
    }
  }

  handleChange = (event) => {
    this.props.dispatch(search_text(event.target.value))
  }

   render() {
    const { error, loading, products, text, filtered } = this.props;
    console.log("filtered",filtered)

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <LinearProgress />;
    }

    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <Grid>
          <Categorys 
            categorys={products} 
          />
        </Grid>
        <Grid>
         <Input 
          text={text} 
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          />
          {
            filtered === null || !filtered || filtered.length === 0 || text === "" ? (
              <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              >
                <CountryTable products={products} />
              </Grid>
              ) : (
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                >
                  <CountryTable products={filtered} />
                </Grid>
          )}
        </Grid> 

      </div>
    );
   
  }
}


const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  text: state.products.text,
  filtered: state.products.filtered,
  newChecked: state.products.newChecked
});


export default connect(mapStateToProps)(App)

