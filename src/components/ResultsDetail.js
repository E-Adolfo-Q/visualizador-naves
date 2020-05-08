import React from 'react';
import { connect } from 'react-redux';
import ShipItem from './ShipItem';

const ResultsDetail = ({ loading, ships, error }) => {
  
  const renderShipsItems = () => {
    if(loading) return <p className="loading">Loading ships...</p>
    if(error) return <p>Error to displays Ships</p>
    if(ships) return ships.map(ship => <ShipItem key={ship.length} ship={ship} />)
  };
    return (
      <div className="mainResultsDetail">
         {renderShipsItems()}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    loading:state.shipsItem.loading,
    ships: state.shipsItem.ships,
    error: state.shipsItem.error
  }
};

export default connect(mapStateToProps)(ResultsDetail);