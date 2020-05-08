import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  fetchFilterForShips
} from '../actions/shipsActions';

const SelectedShip = ({selectedItem,defaultText,fetchFilterForShips}) => {

    const [defaultSelectText,setdefaultSelectText] = useState("");
    const [showOptionList,setshowOptionList] = useState(false);

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      setdefaultSelectText(defaultText);
      return () => document.removeEventListener("mousedown", handleClickOutside);  
    },[defaultText]);

    const handleClickOutside = e => {
      if (
        !e.target.classList.contains("custom-select-option") &&
        !e.target.classList.contains("selected-text")
      ) {
        setshowOptionList(false);
      }
    };

    const handleListDisplay = () => {
      setshowOptionList(!showOptionList);
    }; 

    const handleOptionClick = e => {
      fetchFilterForShips(e.target.getAttribute("data-name"));
      setdefaultSelectText(e.target.getAttribute("data-name"));
      setshowOptionList(false)
    };

    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? "selected-text active" : "selected-text"}
          onClick={handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className="select-options">
            {selectedItem.map(option => {
              return (
                <li
                  className="custom-select-option"
                  data-name={option.name}
                  key={option.id}
                  onClick={handleOptionClick}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>   
    );
}


const mapStateToProps = state => {
  return { selectedItem : state.selectedItem }
};

const mapDispatchToProps = {
  fetchFilterForShips
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedShip);