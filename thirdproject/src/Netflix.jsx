import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';

const Netflix = () => {
    return (
        <Card
          key={Sdata[10].id}
          sname={Sdata[10].sname}
          imgsrc={Sdata[10].imgsrc}
          title={Sdata[10].title}
          link={Sdata[10].link}
        />
    );
}

export default Netflix;