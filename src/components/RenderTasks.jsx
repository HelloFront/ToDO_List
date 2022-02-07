import React from 'react';
import ChangeText from './UI/ChangeText';
import iconDone from './img/done.svg';
import iconNotDone from './img/not_done.svg';
import ButtonControl from './UI/ButtonControl';
import iconPen from './img/pen.svg';


class RenderTasks extends React.Component {
  state = {
    inputChangedValue: ''
  }

  handleChangeInputValue(e) {
    this.setState({
      inputChangedValue: e.target.value,
    })
  }
  clearInputValue() {
    this.setState({inputChangedValue: ''})
  }

  render() {
    const { state, changeActive, deleteItem, changeText, saveChanged } = this.props;
    const { btnShowDone } = state.settings;
    let filterArr = []

    if(btnShowDone) {
      filterArr =  state.tasks.filter(item => item.isDone)
    } else filterArr = [...state.tasks]

  return(
      <>
        {filterArr.length !== 0
          ? <div className='task_block'>
              {filterArr.map(item => (
                <div key={item.id} className='task'>

                  <div className='inner_block'>
                    <button disabled={item.isChange? true : false} className='checkbox' onClick={() => changeActive(item.id)}>
                        <img src={item.isChange? iconPen : item.isDone? iconDone : iconNotDone} alt="icon" />
                    </button>
                    {!item.isChange
                      ? <p className={item.isDone? 'done' : 'text'} onClick={() => changeText(item.id)}>{item.value}</p> 
                      : <ChangeText 
                          item={item} 
                          handleChange={this.handleChangeInputValue.bind(this)}
                        />
                    }
                  </div>

                  <ButtonControl 
                    item={item} 
                    state={this.state.inputChangedValue}
                    deleteItem={deleteItem}
                    saveChanged={saveChanged}
                    clear={this.clearInputValue.bind(this)}
                  />
                </div>
              ))}
            </div>

          : btnShowDone 
            ? <div className="no_task">У вас нет выполненых задач</div>
            : <div className="no_task">У вас нет активных задач</div>
        }
      </>
    )
  }
}
 
export default RenderTasks;