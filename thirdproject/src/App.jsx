import React from 'react';
import Hotstar from './Hotstar';
import Netflix from './Netflix';

const favSeries = 'netflix';

const FavSeries = () => {
  if (favSeries === 'hotstar') {
    return <Netflix/>;
  }else {
    return <Hotstar/>;
  }
}

const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Disney Hotstar Web Series in 2020</h1>
    <FavSeries/>
  </>
);

export default App;