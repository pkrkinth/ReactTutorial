import React from 'react';
import Card from './Cards'
import Sdata from './Sdata'


const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Disney Hotstar Web Series in 2020</h1>
    {Sdata.map((val, index) => {
      console.log(index);
      return (
        <Card
          key={val.id}
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
        />
      );
    })}
  </>
);

export default App;