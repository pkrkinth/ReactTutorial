import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';

const Hotstar = () => {
  return (
    <Card
      key={Sdata[0].id}
      sname={Sdata[0].sname}
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      link={Sdata[0].link}
    />
  );
}

export default Hotstar;