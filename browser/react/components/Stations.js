import React from 'react';
import { Link } from 'react-router';
import Station from './Station';

export default function Stations (props) {

  return (
     <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`/stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
