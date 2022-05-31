import React from "react"
import PropTypes from "prop-types"
import { loadMessages } from '../actions/actionCreators'
import { connect } from 'react-redux'
import axios from 'axios'

class Greeting extends React.Component {

  getMessages() {
    axios.get('api/v1/message').then(res => res.data).then(message => this.props.dispatch(loadMessages(message.text)));
  }

  componentDidMount() {
    this.getMessages();
  }

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.message}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    message: state.messages
  }
}

export default connect(mapStateToProps)(Greeting)
