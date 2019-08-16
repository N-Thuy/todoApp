import React, { Component } from 'react';
import '../src/App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task:[],
      isDisplayForm: false,
      taskEditting: null,
      filter : {
        name: '',
        status: -1
      }
    }
  }
//duoc goi khi component dc gắn vào hay còn gọi là khi reset, goi 1 lan
  UNSAFE_componentWillMount() { 
    if(localStorage && localStorage.getItem('task')) {
      const task = JSON.parse(localStorage.getItem('task'));
      this.setState({
        task: task 
      });
    }
    
  }
  s4() {
    return Math.floor((1+Math.random()) *0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    if(this.state.isDisplayForm && this.state.taskEditting !== null){
      this.setState({
        isDisplayForm : true,
        taskEditting: null,
      })
    }else {
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEditting: null
      })
    }
    
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm : true
    })
  }

  onHandleSubmit = (data) => {
    const {task} = this.state;

    if(data.id === '' ) {
      data.id = this.generateID();
      task.push(data);
    }else {
      //editting
      const index = this.findIndex(data.id);
      task[index] = data;
    }
    
    this.setState({
      task: task,
      taskEditting: null
    });
    localStorage.setItem('task', JSON.stringify(task));
  }

  onUpdateStatus = (id) => {
   const { task } = this.state;
    const index = this.findIndex(id);
    
    if(index !== -1) {
      task[index].slStatus = !task[index].slStatus;
      this.setState({
        task: task
      });
      localStorage.setItem('task', JSON.stringify(task));
    }
    
  }

  findIndex = (id) => {
    let result = -1;
    const {task} = this.state; //lay dsach cac task
    task.forEach((task, index) => {
      if(task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onDelete = id => {
    const { task } = this.state;
    const index = this.findIndex(id);
    
    if(index !== -1) {
      task.splice(index,1)
      this.setState({
        task: task
      });
      localStorage.setItem('task', JSON.stringify(task));
    }
    this.onCloseForm();
  }

  onUpdate = id => {
    const { task } = this.state;
    const index = this.findIndex(id);
    const taskEditting = task[index];

    this.setState({
      taskEditting: taskEditting
    });
    this.onShowForm();
  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
    
    
  }
  render() {
    const { task, isDisplayForm, taskEditting } = this.state;

    // if(filter) {
    //   if(filter.name) {
    //     // console.log(task);
        
    //      const tasked = task.filter((task) => {
    //       return tasked.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    // }
    const elmTaskForm = isDisplayForm ? 
    <TaskForm
      onCloseForm={ this.onCloseForm }
      onHandleSubmit = {this.onHandleSubmit}
      taskFormEdit = {taskEditting}
      /> : '';
    return (
      <div className="App"> 
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="a">State</a>
        </nav>
        <div className="container">
          <div className="text-container">
            <h1 className="text-center">QUẢN LÝ CÔNG VIỆC</h1>
          </div>
          <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
            </div>

            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
              : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                <span><i className="fas fa-times mr-10"></i></span>
                Thêm công việc
              </button>
              {/* search - soft */}
                <Control />
              {/* table  */}
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList 
                    task={ task } 
                    onUpdateStatus={this.onUpdateStatus} 
                    onDelete={this.onDelete}
                    onUpdate = { this.onUpdate }
                    onFilter = { this.onFilter }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
