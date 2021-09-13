import React from 'react';

class DetailContent extends React.Component{
  componentDidMount() {
  const {location, history} = this.props;
  if (location.state === undefined) {
    history.push("/");
  }
}
  render() {
    const { location } = this.props;
    if(location.state) {
      return (
      <span>{location.state.name}</span>)
    } else {
      return null;
    }  
    }
}

export default DetailContent;