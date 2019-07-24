import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchProducts, filter, search_text, filterCategory  } from "./redux/actions/productActions";
import Input from './components/Input';
import CountryTable  from './components/CountryTable';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Categorys from './components/Categorys'
import Chips from './components/Chips'


export class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts());
  }

  handleChange = (event) => {
    this.props.dispatch(search_text(event.target.value))
  }

  toggleCheck = (checkedProduct) => {
    this.props.dispatch(filterCategory(checkedProduct))
    this.props.dispatch(filter()) 
  }

   render() {
    const { error, loading, products, text, checkedProduct, items,} = this.props;
    console.log("cheked",checkedProduct)
    console.log(items)
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <LinearProgress />;
    }

    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <Grid style={{minWidth: 400, maxWidth: 400, }}>
          <Categorys 
            categorys={products} 
            checkedProduct={checkedProduct}
            toggleCheck={this.toggleCheck}
          />
        </Grid>
        <Grid style={{minWidth: 600 ,maxWidth: 900, }}>
         <Input 
            text={text} 
            handleChange={this.handleChange}
          />
          <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          >
            <Chips chips={checkedProduct} />
            <CountryTable products={items} />
          </Grid>
        </Grid> 
      </div>
    );
   
  }
}


const mapStateToProps = state => ({
  products: state.products.fetch,
  loading: state.products.loading,
  error: state.products.error,
  text: state.products.text,
  items: state.products.items,
  checkedProduct: state.products.checkedProduct,
  chips: state.products.chips
});

export default connect(mapStateToProps)(App)

