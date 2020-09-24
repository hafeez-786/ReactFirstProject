import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './DataTable.css';
import Fade from 'react-reveal/Fade';
import banner from './3.jpg'

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Buy Brand',
        field: 'brand',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Total',
        field: 'total',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        brand: 'Yellow Label Chardonnay',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        total: '$320'
      },
      {
        name: 'Brielle Williamson',
        brand: 'Offshoot Pinot Noir Rose',
        office: 'New York',
        age: '59',
        date: '2012/12/02',
        total: '$400'
      },
      {
        name: 'Herrod Chandler',
        brand: 'Vintage Blend Pinot Noir',
        office: 'San Francisco',
        age: '60',
        date: '2012/08/06',
        total: '$137'
      },
      {
        name: 'Rhona Davidson',
        brand: 'Late Harvest Semillon',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        total: '$327'
      },
      {
        name: 'Colleen Hurst',
        brand: 'Offshoot Vermentino',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        total: '$205'
      },
      {
        name: 'Sonya Frost',
        brand: 'Yellow Label 1.5l - Boxed',
        office: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        total: '$103'
      },
      {
        name: 'Jena Gaines',
        brand: 'Fantinel Prosecco Extra Dry',
        office: 'London',
        age: '30',
        date: '2008/12/19',
        total: '$90'
      },
      {
        name: 'Quinn Flynn',
        brand: 'Moet & Chandon Brut',
        office: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        total: '$342'
      },
      {
        name: 'Charde Marshall',
        brand: 'Jack Rabbit Sauvignon Blanc',
        office: 'San Francisco',
        age: '36',
        date: '2008/10/16',
        total: '$470'
      },
      {
        name: 'Haley Kennedy',
        brand: 'Concha y Toro Merlot',
        office: 'London',
        age: '43',
        date: '2012/12/18',
        total: '$313'
      },
      {
        name: 'Tatyana Fitzpatrick',
        brand: 'Bolla Delle Venezie Pinot Grigio',
        office: 'London',
        age: '19',
        date: '2010/03/17',
        total: '$385'
      },
      {
        name: 'Michael Silva',
        brand: 'Faustino VII Rioja Tinto',
        office: 'London',
        age: '66',
        date: '2012/11/27',
        total: '$198'
      },
      {
        name: 'Paul Byrd',
        brand: 'Blossom Hill White Zinfandel',
        office: 'New York',
        age: '64',
        date: '2010/06/09',
        total: '$725'
      },
      {
        name: 'Gloria Little',
        brand: 'Hardys Private Bin Rosé',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        total: '$237'
      },
    ]
  };

  return (
    <div className="mTop-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 data-banner">
            <a href="/wine"><img src={banner} alt="cocktail"/></a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 DataTable-list">
            <Fade left>
              <h1>Peoples who have baught products from us</h1>
            </Fade>
            <MDBDataTable className="table-responsive"
              bordered
              small
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatatablePage;





