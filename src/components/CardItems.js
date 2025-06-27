import React from 'react';


export function CardItems(props) {
  const { title, rating, description, cardImg, tags, island, price } = props.cardData;

  const tagsArray = tags.map((item) => {
    const element = (
      <Tag tag={item} key={item}/>
    )
    return element;
  })

  return (
    <div className="card__box col-sm-12">
      <div className="card">
        <div className="card__img">
          <img className="card__img-preview" src={cardImg} alt={title} />
        </div>
        <div className="card__content">
          <h4 className="card__title"><a href="#">{title}</a></h4>
          <p className="card__text"> {rating} &#11088; </p>
          <p className="card__description">{description}</p>
          <div className="card__tags">
            {tagsArray}
          </div>
          <div className="card__bottom">
            <div className="options">
              <span className="date">Island : </span>
              <span className="category">{island}</span>
            </div>
            <div className="card__price">
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function Tag(props) {
  const tag = props.tag;
  return (
    <span className="border border-light badge bg-light text-dark">{tag}</span>
  )
}