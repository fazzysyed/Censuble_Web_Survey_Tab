import React, {useState} from 'react';



class Answer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIds: [],
    };
  }
  componentDidMount = () => {
    // if (this.props.value.length) {
      // console.log('Geeeee', this.props.answerTypes, 'GGGEEERERERE');
      // var selectedIds = [...this.state.selectedIds];
      // // this.state.selectedIds.push(this.props.value.answer_id);
      // this.props.value.map((item) => {
      //   console.log(item);
      //   selectedIds.push(item.answer_id);
      // });
      // this.setState({selectedIds});
    // }
  };



  handleSelectionMultiple = async (item) => {
    var selectedIds = [...this.state.selectedIds]; // clone state
    if (selectedIds.includes(item.master_id)){
      selectedIds = selectedIds.filter((_id) => _id !== item.master_id);
    }
  
    else selectedIds.push(item.master_id);
    this.props.onPress(item);
    await this.setState({selectedIds});
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
        {this.props.answerTypes.map((item) =>  {
          console.log(item,"KKKK")
          return( 
         
       

            <div className= {this.props.minimize ? "questions-tab" : "questions"}
              key={item.answer_id}
              onClick={() => this.handleSelectionMultiple(item)}
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
                backgroundColor: this.state.selectedIds.includes(item.master_id)
                  ? '#114B78'
                  : '#FFFFFF',
                borderColor: '#AFAFAF',
                borderRadius: 4,
                padding: 10,
                marginVertical: 5,
                display: 'block',
                margin: '0 auto',
                marginTop: '10px',
                cursor: 'default'
  
              }}>
              <p
                style={{
                  fontSize: 22,
                  fontFamily: 'Poppins-Regular',
                  color: this.state.selectedIds.includes(item.master_id)
                    ? '#FFFFFF'
                    : '#000',
                }}>
                {item.answer_text}
              </p>
            </div>
          )
        })}
      </div>
    );
  }
}
export default Answer;