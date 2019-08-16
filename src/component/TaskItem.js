import React, { Component } from 'react';
// import './App.css';

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
    
  }

  onDelete = () => {
    this.props.onDelete(this.props.task.id)
  }

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id)
  }
  render() {
      const {task, index} = this.props;
    return (
        <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <span 
                className = {task.slStatus === true ? 'label label-success' : 'label label-danger' }
                    onClick={this.onUpdateStatus}>
                    { task.slStatus === true ? 'Kích Hoạt' : 'Ẩn'} 
                </span>
            </td>
            <td>
              <button type="button" className="btn btn-warning" onClick={this.onUpdate}>Sửa</button>
              &nbsp;
              <button type="button" className="btn btn-danger" onClick={this.onDelete}>Xóa</button>
            </td>
          </tr>
    );
  }

}

export default TaskItem;
