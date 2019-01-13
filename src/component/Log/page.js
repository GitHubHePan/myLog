import React from 'react';
import FaceIcon from '@material-ui/icons/Face'

class Page extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
        <div className="app">
          <FaceIcon/>
        </div>
    );
  }
}

export default Page;
 
