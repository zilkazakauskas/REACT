import React from 'react';

function ItemCard({ preke }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail" height="320" src={preke.image} data-holder-rendered="true"></img>
        <div className="card-body">
          <p className="card-text">{preke.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">{preke.price}</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">{preke.name}</button>
            </div>
            <small className="text-muted">{preke.categogy}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;