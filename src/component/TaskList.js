import React, { Component } from 'react';
import TaskItem from './TaskItem';
// import './App.css';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  onHandleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus,
    );
    this.setState({
      [name]: value
    })
  }

  render() {
    const { task } = this.props;  // var tasks = this.props.tasks
    // const { filterName, filterStatus } = this.state;
    const filterWord = (arr) => {
      if(parseInt(this.state.filterStatus) === 1){    
        const i = arr.filter(item => item.slStatus === true);
        return i;
      } else if(parseInt(this.state.filterStatus) === 0){
        const ii = arr.filter(item => item.slStatus === false);
        return ii;
      } else {
        return arr;
      }
    }
    let data = null;
    if (this.state.filterName !== '') {
      const dataFilter = task.filter(item => item.name.trim().toUpperCase().includes(this.state.filterName.trim().toUpperCase()));

      if (dataFilter !== '') {
        data = filterWord(dataFilter);
      } else {
        data = filterWord(task);
      }
    } else {
      data = filterWord(task);
    }

    
    const elmTasks = data.map((task, index) => <TaskItem
      key={task.id}
      index={index}
      task={task}
      onUpdateStatus={this.props.onUpdateStatus}
      onDelete={this.props.onDelete}
      onUpdate={this.props.onUpdate} />);
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                name="filterName"
                className="form-control"
                value={this.state.filterName}
                onChange={this.onHandleChange} />
            </td>
            <td>
              <select
                name="filterStatus"
                className="form-control"
                value={this.state.filterStatus}
                onChange={this.onHandleChange}
              >
                <option value={-1}>Tất cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }

}

export default TaskList;
