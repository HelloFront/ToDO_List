import React from 'react';
import { Button } from '@mui/material';
import iconTask from '../img/task_icon.svg'
import { v4 } from 'uuid'


class Input extends React.Component {
  state = {
    value: '',
    id: '',
    isDone: false,
    isChange: false
  }

  updateLocalState(e) {
    this.setState({
      value: e.target.value,
      id: v4()
    })
  }
  
  render() {
    const { update } = this.props;

    return(
      <div className='input_block'>
        <div>
          <img src={iconTask} alt="icon" />
          <input value={this.state.value} onChange={this.updateLocalState.bind(this)} placeholder='Введите название' type="text" />
        </div>
        <Button variant="outlined" 
          onClick={() => {
            this.setState({value: ''});
            update(this.state);
          }}
        >Добавить</Button>
      </div>
    )
  }
}
 
export default Input;