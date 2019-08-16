import React, { Component } from 'react';
// import './App.css';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      slStatus: true,

    }
  }

  UNSAFE_componentWillMount() {
    if(this.props.taskFormEdit) {
      this.setState({
        id : this.props.taskFormEdit.id,
        name : this.props.taskFormEdit.name,
        slStatus : this.props.taskFormEdit.slStatus,
      });
      console.log(this.state);
      
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.taskFormEdit) {
      this.setState({
        id : nextProps.taskFormEdit.id,
        name : nextProps.taskFormEdit.name,
        slStatus : nextProps.taskFormEdit.slStatus,
      });
    }else if (!nextProps.taskFormEdit) {
      this.setState({
        id: '',
        name: '',
        slStatus: true,
      })
    }
    
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'slStatus') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name:'',
      slStatus: true,
    })
  }
  render() {
    const { id } = this.state
    return (
      <div className="TaskForm">

        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              { id !== '' ? 'Cập nhật công việc' : 'Thêm công việc' }
              <span className="close-x" onClick={ this.onCloseForm }><i className="fas fa-times-circle"></i></span></h3>
          </div>
          <div className="panel-body">

            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>Tên: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onHandleChange} />
              </div>
              <div>
                <label>Trạng thái: </label>
                <select
                  name="slStatus"
                  className="form-control"
                  value={this.state.slStatus}
                  onChange={this.onHandleChange} >
                  <option value={true}>Kích hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
              </div>

              <button type="submit" className="btn btn-warning btn-gr">
                <span><i className="fas fa-times mr-10"></i></span>
                Lưu lại</button>
              <button type="button" className="btn btn-danger btn-gr" onClick={this.onClear}>
                <span><i className="fas fa-times mr-10"></i></span>
                Hủy bỏ</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default TaskForm;
