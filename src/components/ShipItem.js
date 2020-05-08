import React from 'react';
import { connect } from 'react-redux';

const ShipItems = ({passanger,ship}) => { 
 const { name,cost_in_credits,passengers,manufacturer,length,model } = ship;

 return (
     <>
       <section className="containerInfoShip">
        <article className="contentRow"> 
         <h2 className="title1">{name}</h2>
         <p  className="description">{model}</p>
        </article>
        <article className="contentRow2"> 
         <h3 className="title2">Fabricate</h3>
         <p  className="description2">{manufacturer}</p>
        </article>
        <article className="contentRow2"> 
         <h3 className="title2">Largo</h3>
         <p  className="description2">{`${length} fts`}</p>
        </article>
        <article className="contentRow2"> 
         <h3 className="title2">Valor</h3>
         <p  className="description2">{`${cost_in_credits} créditos`} </p>
        </article>
        <article className="contentRow2"> 
         <h3 className="title2">Cantidad pasajeros</h3>
         <p  className="description2">{passengers}</p>
        </article>          
       </section>
       <section className="containerPassengers">
          <article className="contentRow"> 
           <h3 className="title1">Pasajeros</h3>
          </article>
          <article className="contentRow2">
           {
            passanger.map(item => {
              return (
                 <p key={item.id} className="description2">{item.name}</p>
              )
            })
           }
          </article>
       </section>
      </> 
    );
}


const mapStateToProps = state => {
    return {
     passanger: state.passanger
    }
};

export default connect(mapStateToProps)(ShipItems);