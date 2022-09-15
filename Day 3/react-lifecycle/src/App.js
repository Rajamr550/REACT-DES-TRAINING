import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: " World!", state2: "value" };
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ hello: " Globe!" });
  }

  render() {
    return (
      <div>
        <h1> Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()") ;
    console.log(prevProps)
    console.log(prevState)

    return prevProps
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps() -- in place of componentWillReceiveProps") ;
    console.log(props)
    console.log(state)
  return props

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()") ;
    console.log(nextProps)
    console.log(nextState)
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
}
