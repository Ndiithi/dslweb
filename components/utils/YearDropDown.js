import React from 'react';
import ReactDOM from 'react-dom';

export default class YearDropDown extends React.Component {

  constructor () {
    super();
    this.state = {
      year: 2019
    };
  }

  render () {
    return (
      <div>
        <select onChange={event =>this.props.handler(event.target.value)}>
          <option selected disabled hidden>2019</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
      </div>
    );
  }
}
