import React from 'react';
import '../sections/Skills';
import '../sections/Home';
import '../sections/Project';
import '../sections/Contact';
import './Wrapper.css';

const Wrapper = props => <div className='wrapper p-5'>{props.children}</div>;

export default Wrapper;
