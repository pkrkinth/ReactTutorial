import React from 'react';
import Hotstar from './Hotstar';
import Netflix from './Netflix';

const favSeries = 'hotstar';

// Example: how to use if/else
// const FavSeries = () => {
//   if (favSeries === 'hotstar') {
//     return <Netflix/>;
//   }else {
//     return <Hotstar/>;
//   }
// }

const App = () => (
  <>
    <h1 className="heading_style">List of Top Web Series in 2020</h1>
    {/* <FavSeries/> */}
    {/* Below is example: how to use Ternary operation instaed of if/else  */}
    {favSeries === 'netflix' ? <Netflix/> : <Hotstar/> }
  </>
);

export default App;