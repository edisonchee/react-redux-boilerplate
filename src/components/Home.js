import React from 'react';
import { connect } from 'react-redux';
import { updateName } from '../actions';

const Home = ({ name, onChange }) => (
  <div>
    <h1>Hello, { name }</h1>
    <input 
      type="text"
      value={ name }
      onChange={(e) => { onChange(e.target.value) }}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: (value) => { dispatch(updateName(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);