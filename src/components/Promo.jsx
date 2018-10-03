import React from 'react';

import Eleve from './Eleve';

const maPromo = [
  {
    firstName: 'Steven',
    lastName: 'Antal'
  },
  {
    firstName: 'Emilie',
    lastName: 'Boeglen'
  },
  {
    firstName: 'Emma',
    lastName: 'Kimpe'
  },
  {
    firstName: 'JMichel',
    lastName: 'Bravo'
  },
  {
    firstName: 'Arlensiu',
    lastName: 'Celis'
  },
  {
    firstName: 'FAxel',
    lastName: 'Gaveau'
  },
  {
    firstName: 'Maureen',
    lastName: 'Vinchent'
  },
  {
    firstName: 'Nicolas',
    lastName: 'Duhamel'
  },
  {
    firstName: 'Antoine',
    lastName: 'Maluta'
  },
  {
    firstName: 'Elie',
    lastName: 'Delattre'
  }
];

class Promo extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Lille - 09/18</h3>
        <div className="row">
          {maPromo.map(eleve => {
            return (
              <Eleve firstName={eleve.firstName} lastName={eleve.lastName} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Promo;
