import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <h1><%= name %></h1>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-default">{this.props.count}</button>
            <button className="btn btn-danger" onClick={e => this.props.actions.decrement()}>Decrement</button>
            <button className="btn btn-success" onClick={e => this.props.actions.increment()}>Increment</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);