import React from 'react';
import iconDelete from '../img/delete.svg';
import iconReload from '../img/reload.svg';


class ButtonControl extends React.Component {
  render() {
    const { item, saveChanged, state, deleteItem, clear } = this.props
    return(
      <>
        {item.isChange
        ? <button 
            className='delete_btn' 
            onClick={() => {
              saveChanged(item.id, state)
              clear()
            }}
          >
            <img src={iconReload} alt="icon"/>
          </button>
          
        : <button  
            className='delete_btn' 
            onClick={() => deleteItem(item.id)}
          >
            <img src={iconDelete} alt="icon"/>
          </button>
        }
      </>
    )
  }
}

export default ButtonControl;