import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

export class Input extends Component {
  render() {
    return (
      <div>
         <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{margin: 10}}
        >
        <form onSubmit={this.props.handleClick}>
           <InputBase
              placeholder="Search Country by name"
              onChange={this.props.handleChange}
              value={this.props.text}
            />
        </form>
         </Grid>
      </div>
    )
  }
}

export default Input
