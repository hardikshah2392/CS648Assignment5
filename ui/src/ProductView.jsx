import React from 'react';

export default function ProductView ({ match }) {
  let id  = location.hash.substring(7);
  return (
      <img src={id} alt="Icon" />   
  );
}