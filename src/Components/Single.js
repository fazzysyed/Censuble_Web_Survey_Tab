import React, {useState} from 'react';


class Single extends React.Component {
  state = {
    backgroundColor: '#FFFFFF',
    color: '#000',
  };

  onClick = () => {
    if (
      this.state.backgroundColor === '#FFFFFF' &&
      this.state.color === '#000'
    ) {
      this.setState({backgroundColor: '#114B78', color: '#FFFFFF'});
    }

    this.props.functionality();
  };

  render() {
    return (
      <div
        onClick={this.onPress}
        style={{
          height: 60,
          borderWidth: 1,
          shadowRadius: 1,
          shadowColor: '#AFAFAF',
          shadowOpacity: 1,
          shadowOffset: {width: 0, height: 1},
          width:('60%'),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.state.backgroundColor,
          borderColor: '#AFAFAF',
          borderRadius: 4,
          padding: 10,
          marginVertical: 5,
        }}>
        <p
          style={{fontSize: 18, fontWeight: '400', color: this.state.color}}>
          {this.props.answers}
        </p>
      </div>
    );
  }
}
export default Single;

// const styles = StyleSheet.create({});
