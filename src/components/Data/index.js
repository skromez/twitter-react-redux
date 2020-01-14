import React from 'react';
import DataBody from './style';
import { ReactComponent as Dot } from '../../assets/images/tweet/dot.svg';

const Data = ({ data, className }) => (
  <DataBody className={className}>
    <Dot alt="dot" className="data__icon" />
    <p className="data__text">{data}</p>
  </DataBody>
);

export default Data;
