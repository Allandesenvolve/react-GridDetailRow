
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';

import products from './products.json';

class DetailComponent extends GridDetailRow {
  render() {
    const dataItem = this.props.dataItem;
    return (
      <section>
        <p><strong>In Stock:</strong> {dataItem.UnitsInStock} units</p>
        <p><strong>On Order:</strong> {dataItem.UnitsOnOrder} units</p>
        <p><strong>Reorder Level:</strong> {dataItem.ReorderLevel} units</p>
        <p><strong>Discontinued:</strong> {dataItem.Discontinued}</p>
        <p><strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}</p>
      </section>
    );
  }
}

class DetailColumnCell extends React.Component {

  render() {
    let dataItem = this.props.dataItem
    if(dataItem.ProductID % 2) {
      return <td  className="k-hierarchy-cell"/>
    }
    return (
      <td className="k-hierarchy-cell">
        <a onClick={() => this.props(dataItem)} className></a> : <a onClick={() => this.props(dataItem) } className="keyboard_arrow_down" href="#" tabIndex="-1"></a>
      </td>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);

