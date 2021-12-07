import React from "react";

class ProgressProvider extends React.Component {
  timeout = 2000;

  state = {
    value: this.props.valueStart,
  };

  static defaultProps = {
    valueStart: 0,
  };

  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({
        value: this.props.valueEnd,
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.valueEnd !== this.props.valueEnd) {
      this.setState({
        value: this.props.valueEnd,
      });
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  render() {
    return this.props.children(this.state.value);
  }
}

export default ProgressProvider;
