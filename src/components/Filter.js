import React, { useState } from 'react';

import _ from 'lodash'; //import external library!


export function Filter(props) {

  return (
    <div className="border">
      <div className="mx-4 my-2">
        <p className="filter_title">REFIND BY</p>
        <div className="filters">
          <SortByNav
            cardData={props.cardData}
            sortByCallback={props.sortByCallback}
          />
          <TagsFilterNav 
            cardData={props.cardData}
            tags={props.tags}
            applyFilterCallback={props.applyFilterCallback}
          />
      </div>
      </div>
    </div>
  )
}




//        SortBy Section        //

function SortByNav(props) {
  // props
  const cardData = props.cardData;
  const sortByCallbackFunction = props.sortByCallback;

  let [sortByCriteria, setSortByCriteria] = useState(null);
  let [isAscending, setIsAscending] = useState(null);

  const handleClick = (event) => {
    let whichButton = event.currentTarget.name;
    let isAscendingBoolean = null;

    if (whichButton !== sortByCriteria) {
      isAscendingBoolean = true;
      setSortByCriteria(whichButton);
      setIsAscending(isAscendingBoolean);
    } else if (whichButton === sortByCriteria) {
      if (isAscending === false) {
        isAscendingBoolean = null;
        whichButton = null;
        setIsAscending(isAscendingBoolean);
        setSortByCriteria(whichButton);
      } else {
        isAscendingBoolean = false;
        setIsAscending(isAscendingBoolean);
      }
    }
    sortByCallbackFunction(whichButton, isAscendingBoolean);
  }

  let sortedArray = _.sortBy(cardData, [sortByCriteria]);
  if (sortByCriteria != null && isAscending === false) {
    _.reverse(sortedArray);
  };

  return (
    <div className="order_by">
      <p>Order by</p>
      <ul className="list-unstyled list">
        <li>Price <span className="moneySign">$</span>
          <SortButton name="price" onClick={handleClick} active={sortByCriteria === 'price'} ascending={sortByCriteria === 'price' && isAscending === true} />
        </li>
        <li>Rating &#11088;
          <SortButton name="rating" onClick={handleClick} active={sortByCriteria === 'rating'} ascending={sortByCriteria === 'rating' && isAscending === true} />
        </li>
        <li>Title
          <SortButton name="title" onClick={handleClick} active={sortByCriteria === 'title'} ascending={sortByCriteria === 'title' && isAscending === true} />
        </li>
      </ul>
    </div>
  )
}

function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };
  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}




//        Filter Section        //

function TagsFilterNav(props) {
  // unique arrays
  const uniqueTags = props.tags;
  const uniqueTagsObj = Object.assign(...uniqueTags.map(k => ({ [k]: false })));
  
  // state
  const [checkedItems, setCheckedItems] = useState(uniqueTagsObj);

  const handleCheckbox = (event) => {
    setCheckedItems({...checkedItems, [event.target.value] : event.target.checked})
  }

  const handleClick = (event) => {
    event.preventDefault();
    const identifiers = Object.keys(checkedItems);
    const checked = identifiers.filter(function(id) {
      return checkedItems[id]
    })
    props.applyFilterCallback(checked);
  }

  const handleClear = (event) => {
    props.applyFilterCallback(uniqueTags);
    setCheckedItems(uniqueTagsObj);
  }

  const liElemTagsArray = uniqueTags.map((tag) => {
    const element = <li className="py-1 ps-1" key={tag}>
      <label>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          checked={checkedItems[tag]}
          value={tag} />
          <span className="tags">{tag}</span>
      </label>
    </li>;
    return element;
  })

  return(
    <div className="filter_by">
      <p>Filter by tags</p>
      <ul className="list-unstyled">
        {liElemTagsArray}
      </ul>
      <div className="filter_buttons">
        <div className="f_button mb-3">
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Apply Filter</button>
        </div>
        <div className="f_button mt-3">
          <button type="submit" className="btn border border-dark" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  )
}





