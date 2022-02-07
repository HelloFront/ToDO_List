import React from 'react';
import iconSelect from './img/icon_select.svg';

class FilterTasks extends React.Component {
  render() {
    const { changeSettings, state } = this.props;
    const { btnSelectAll, btnShowDone, btnShowAll } = state.settings;

    return (
      <div className="filter_block">
        <div className="select_all">
          <button 
            className='btn_select_all'
            style={btnSelectAll? {opacity: 1} : {opacity: .5} }
          >
            <img 
              name='select'
              src={iconSelect} 
              alt="icon"
              onClick={(e) => changeSettings(e.target.name)}
            />
          </button>
        </div>

        <div>
          <button
            name='done'
            className={btnShowDone? 'done_task active' : 'done_task'}
            onClick={(e) => changeSettings(e.target.name)}
          >Выполненые</button>
          <button 
            name='all'
            className={btnShowAll? 'all_task active' : 'all_task'}
            onClick={(e) =>  changeSettings(e.target.name)}
          >Все</button>
        </div>
      </div>
    )
  }
}

export default FilterTasks;