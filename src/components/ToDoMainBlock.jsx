import React from 'react';
import CurrentTasks from './RenderTasks';
import FilterTasks from './FilterTasks';
import Input from './UI/Input';

class ToDoMainBlock extends React.Component {
  state = {
     tasks: [],
      settings: {
        btnSelectAll: false,
        btnShowDone: false,
        btnShowAll: true
      }
  }

  changeInputValue(id) {
    let arr = [...this.state.tasks];
    arr.forEach(item => item.id === id? item.isChange = !item.isChange : null)

    this.setState({tasks: arr})
  }

  changeSettings(e) {
    if(this.state.tasks.length === 0) return;

    switch(e) {
      case 'done' : {
        let obj = {...this.state.settings}
        obj.btnShowDone = !obj.btnShowDone;
        obj.btnShowAll = !obj.btnShowDone;

        this.setState({settings: obj});
        break;
      }
      case 'all' : {
        let obj = {...this.state.settings}
        obj.btnShowAll = true;
        obj.btnShowDone = !obj.btnShowAll;
  
        this.setState({settings: obj});
        break;
      }
      case 'select' : {
        let obj = {...this.state.settings}
        let arr = [...this.state.tasks];
        obj.btnSelectAll = !obj.btnSelectAll;

        arr.forEach(item => obj.btnSelectAll ? item.isDone = true : item.isDone = false)
        this.setState({
          tasks: arr,
          settings: obj
        });
        break;
      }
      default : {
        return  null;
      }
    }
  }

  changeDone(id) {
    let arr = [...this.state.tasks];
    arr.forEach(item =>  item.id === id? item.isDone = !item.isDone : null)

    this.setState({tasks: arr})
  }

  setActiveAllTasks(value) {
    let arr = [...this.state.tasks];
    arr.forEach(item => value ? item.isDone = false : item.isDone = true);

    this.setState({tasks: arr})
  }

  saveChangedTaskValue(id, text) {
    let arr = [...this.state.tasks];
    arr.forEach(item => {
      if(item.id === id) {
        if(text) item.value = text 
        item.isChange = !item.isChange
      }});

    this.setState({tasks: arr})
  }

  addTasksInState(value) {
   if(!value.value) return;
    const arr = [...this.state.tasks];
    arr.push(value);

    this.setState({tasks: arr})
  }

  deleteTask(id) {
    let arr = [...this.state.tasks];
    arr = arr.filter(item => item.id !== id);

    if(arr.length === 0) {
        let obj = {...this.state.settings}
        obj.btnShowAll = true;
        obj.btnShowDone = !obj.btnShowAll;

        this.setState({settings: obj});
      }
    this.setState({tasks: arr});
  }

  render() {

    return(
      <div className='parent'>
        <Input update={this.addTasksInState.bind(this)}/>

        <FilterTasks
          state={this.state}
          setAllActive={this.setActiveAllTasks.bind(this)}
          changeSettings={this.changeSettings.bind(this)}
        />

        <CurrentTasks 
          state={this.state} 
          deleteItem={this.deleteTask.bind(this)} 
          changeActive={this.changeDone.bind(this)}
          changeText={this.changeInputValue.bind(this)}
          saveChanged={this.saveChangedTaskValue.bind(this)}
        />
      </div>
    )
  }
}
 
export default ToDoMainBlock;