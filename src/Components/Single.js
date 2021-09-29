



import React, {useState} from 'react';


class Single extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: null,
    };
  }

  componentDidMount = ()=>{
    if(this.props.value !=null){
      this.setState({selectedItem: this.props.value});
    }
  }

  handleSelection = (item) => {
    var selectedId = this.state.selectedItem;

    if (selectedId === item.master_id) this.setState({selectedItem: null});
    else this.setState({selectedItem: item.master_id});
    this.props.onPress(item);
  };

  render() {
    return (
      <div
     
          style={{
            bottom: 30,
            justifyContent: 'center',
            float:'left',
            width:'100%',
            textAlign:'center',
            alignItems: 'center',
            marginTop: '20px'
        }}>
        {this.props.answerTypes.map((item) => (
          <div
          className= {this.props.minimize ? "questions-tab" : "questions"}
            key={item.answer_id}
            onClick={() => this.handleSelection(item)}
            style={{
              height: 40,
              borderWidth: 1,
              shadowRadius: 1,
              shadowColor: '#AFAFAF',
              shadowOpacity: 1,
              shadowOffset: {width: 0, height: 1},
              width: '84%',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
              backgroundColor:  this.state.selectedItem === item.master_id
                ? '#114B78'
                : '#FFFFFF',
              borderColor: '#AFAFAF',
              borderRadius: 4,
              padding: 10,
              marginVertical: 5,
              display: 'block',
              margin: '0 auto',
              marginTop: '10px',
              cursor: "pointer"
            }}>
            <p
              style={{
                fontSize: 22,
                fontFamily: 'Poppins-Regular',
                color:
                  this.state.selectedItem === item.master_id
                    ? '#FFFFFF'
                    : '#000',
              }}>
              {item.answer_text}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
export default Single;


