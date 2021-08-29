import React from 'react';
import ProgressBar from './progressbar';
import FacesAnswers from './Components/FacesAnswers';
import YesorNoAnswers from './Components/FacesAnswers';
import ThumbsAnswers from './Components/ThumbsAnswers';
import MultipleChoice from './Components/Answer';
import HeartsAnswers from './Components/HeartsAnswers';
import StarsAnswers from './Components/StarsAnswer';
import LikertsAnswers from './Components/LikertAnswers';
import Suggestion from './Components/Suggestion';
import Feedback from './Components/Feedback';
import Single from './Components/Single';
import { Container,Box,Button } from '@material-ui/core';
import { v4 as Uuid } from 'uuid';
import axios from 'axios'
import ReactDOM from 'react-dom';
import LoadingGif from "./Assets/Images/animated.gif"
import { FaWindowClose } from "react-icons/fa";
import { AiOutlineArrowsAlt,AiOutlineShrink } from "react-icons/ai";

import { facesAnswerType,YesorNoAnswerTpes,thumbsAnswerTpes, HeartsAnswersTypes, LikertAnswerTypes, StarsAnswersTypes } from './helper/AnswersType';
import './style.css';
import './Responsive.css';
import TakeSurvey from './Components/TakeSurvey';

class Survey extends React.Component{
    state = {
      minimize : true,
      surveyVisible :true,
        companyName: '',
        highValue: null,
        surveyLength: 0,
        surveyNumber: 0,
        startTime: '',
        survey: null,
        config: {},
        uuid: '',
        feedback_text : "",
        loading: false,

        //Response State
        multiple: [],
        userResponse: [],
        facesAnswer: null,
        visible: false,
    feed : true,
        responses: [],
    
        index: 0,
    
        data: [],
        progress: 0,
        write: 'Write Something',
   
      };

componentDidMount=()=>{
    this.apiCall()
    this.getDevice()
  
}


feedbackText = () => {
  
  const {feedback_text} = this.state;
  if(feedback_text.length){
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${this.props.bearer}`);

  let formdata = new FormData();
  formdata.append('survey_uuid', this.state.survey.uuid,);
  formdata.append('user_key', this.props.userKey);
  formdata.append('feedback_topic', 'general');
  formdata.append('answer_id', '0');
  formdata.append('answer_type', 'feedback');
  formdata.append('feedback_type', 'text');
  formdata.append('feedback_text', feedback_text);
  formdata.append('feedback_uri', 'empty');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://services.censuble.com/api/v1/feedback', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result), 'fafafaf');
      this.setState({
        feedback_text : "",
        feed : false
      });
      
     
    })
    .catch((error) => console.log('error', error));
  // this.props.navigation.navigate('Thankyou');
  // });
  }
};

 uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


getDevice =()=>{
  var axios = require('axios');

var config = {
  method: 'get',
  url: `https://services.censuble.com/api/v1/device/${this.props.device_uuid}`,
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlcnZpY2VzLmNlbnN1YmxlLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTYyMTAxNjAyOCwiZXhwIjoxNjUyNTUyMDI4LCJuYmYiOjE2MjEwMTYwMjgsImp0aSI6IkZrZzBmUDJNNk9NTGhzZ08iLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.EfEefjykkY3_a9h0YpLKKGJi3lI2zoVFsvYo0kwQ1evzGAiYD3YZsu5JQpegNf646ebmCJxU12kCOK-0Ik_e2B_b2hYbvAfXKZnpOUGBrB3eXK34lc_SqLU0j6cqLjtb_EbQZrk33OfizTvv81CJbPX2ZpdMlMoghcXpYlC_gJfA9yMk3zff6w0me4qY0rpCKAdLlVzpXZ8aD7Ucg5vcgLAf96nO11B023FD4nj-KlaROM2Xc6plJ8WEPIiy6xvqYzlh20Y7uoTtTUqw2-tSE-Dqxq3B4jS_5bIH1qEqt4URvdI5LJaOzVptDzf0vdD2RPhjkixEYR0UNucdKG8lJ0_xH-bKQGL6ITCRMpmbZVPixoe74w0dhk9AotrNa5B_lm4BYMEwhPpMjL21QebzRToCQq4tnuc8w94DbCSIAGYVfifNAOEBc-bBMMeOqTM_etXD7do6lQHuoHhNWoDrHGN1L_KiMJFENVeewezntyLOGENUqD7uIcqgrIkC9a20CF5n3nxM13M4ZV0hxGxgJLp5LNYxMy0Jugriajn_NWUqVSmEucmU-2jNxlurlzg9YZsV2K4V0lmwVCPQMjm0-f-o7d9kL4l1HLS-E0T7gu4n6hahYIlQyy6lPqv0BQjtn40GnjDo4Gx7cLk5yLTtOwsBKEQteOWnIisHP8t4cMM'
  }
};

axios(config)
.then( (response)=> {
  this.setState({config:response.data.data.device})
  console.log(response.data.data.device,"Hellofafa");
})
.catch(function (error) {
  console.log(error);
});

}

    

    apiCall = async () => {
        this.setState({
          responses: [],
          data: [],
          multiple: [],
          index: 0,
          highValue: null,
          surveyLength: 0,
          surveyNumber: 0,
          startTime: '',
          survey: null,
          uuid: null,
          timeEqualSurveys: [],
          facesAnswer: null,
          visible: false,
        });
    this.setState({loading:true})
 
          console.log('efe4adfa-566a-4bd6-a952-78344aff1f21');
          this.setState({loading: true});
         
          var myHeaders = new Headers();
         

          myHeaders.append("Authorization", `Bearer ${this.props.bearer}`);
          
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`https://services.censuble.com/api/v1/survey/${this.props.survey_uuid}`, requestOptions)
            .then(response => response.text())
            .then((result) => {
                this.setState({loading: false});
                let response = JSON.parse(result);
                console.log('Survey', response.data.survey.questions);
                this.setState({survey: response.data.survey});
             

                let survey = response.data.survey.questions;
                this.setState({data: survey, surveyLength: survey.length});

               
              })
              .then((result) => {
                this.setState({
                  progress: 1 / this.state.data.length,
                  loading : false

                });
              })
            .catch(error => console.log('error', error));              
      };

   
      
      uploadResponse = async () => {
        this.setState({data: []});
    
        const {config, data, companyName} = this.state;
       
        let responses = [];
        data.map((value) => {
          console.log(value, 'Hfdahjfhajfh Id');
          if (value.answerWithId.length) {
            for (let item of value.answerWithId) {
              responses.push({
                survey_uuid: this.state.survey.uuid,
                survey_name: this.state.survey.name,
                survey_category: '0',
                question_id: value.question_id,
                answer_text: item.answer,
                answer_id: item.answer_id,
    
                parent_question_id: value.parent_question_id
                  ? value.parent_question_id
                  : 0,
                question_text: value.question_text,
                question_type: value.answer_type,
                timestamp: Math.ceil(new Date().getTime() / 1000),
                user_uuid: this.props.user_uuid,
                transaction_id: this.uuid(),
                testmode: false,
    
                category_id: '0',
                category_name: 'kiosk',
                media: {
                  type: 'video',
                  source: 'url',
                  viewed: 'true',
                },
              });
            }
          } else {
            responses.push({
              survey_uuid: this.state.survey.uuid,
              survey_name: this.state.survey.name,
              survey_category: '0',
              question_id: value.question_id,
              answer_text: value.answerWithId.answer,
              answer_id: value.answerWithId.id,
    
              parent_question_id: value.parent_question_id
                ? value.parent_question_id
                : 0,
              question_text: value.question_text,
              question_type: value.answer_type,
              timestamp: Math.ceil(new Date().getTime() / 1000),
              user_uuid: this.props.user_uuid,
              transaction_id: this.uuid(),
              testmode: false,
              category_id: '0',
              category_name: 'kiosk',
              media: {
                type: 'video',
                source: 'url',
                viewed: 'true',
              },
            });
          }
        });
    
        let data2 = {
          config: {
            device_uuid: this.state.config.uuid,
            device_name: this.state.config.name,
            device_location: this.state.config.location_name,
            company_name: this.state.config.company_name,
            company_uuid: this.state.config.company_uuid,
          },
          responses: responses,
          outage: {
            records: responses.length,
            start_timestamp: Math.ceil(new Date().getTime() / 1000),
          },
        };
     
    
            var configuration = {
              method: 'post',
              url: 'https://services.censuble.com/api/v1/response',
              headers: {
                Authorization: `Bearer ${this.props.bearer}`,
                'Content-Type': 'application/json',
              },
              data: data2,
            };
    
            axios(configuration)
              .then((response) => {
                console.log(response.data, 'REsponse Api');
              
              })
              .then(() => {
              
              })
              .catch(function (error) {
               
              });
          this.setState({surveyVisible:false})
        
      };

    
      next = (value, index) => {
        this.setState({visible: false, highValue: null});
    
        console.log(value, 'REsponse');
        let foundR = this.state.responses.some(
          (el) => el.question_id === value.question_id,
        );
        console.log(foundR, 'gsgsgsgs');
        console.log('Hihe', this.state.highValue);
        this.setState({highValue: value});
        var hours = new Date().getHours(); //To get the Current Hours
        var min = new Date().getMinutes(); //To get the Current Minutes
        var sec = new Date().getSeconds();
    
        let timestamp = `${hours}${min}${sec}`;
        const {facesAnswer, data, progress, surveyLength} = this.state;
        console.log(facesAnswer, 'fafafafaHello');
    
        let length2 = data.length;
        if (this.state.facesAnswer != null && facesAnswer.length === undefined) {
          if (value.subquestions != undefined) {
            value.subquestions.map((it) => {
              const found = data.some((el) => el.question_id === it.question_id);
              it.parent_question_id = value.question_id;
    
              if (!found) {
                if (it.answer_link_id.includes(facesAnswer.id)) {
                  this.state.data.splice(index + 1, 0, it);
                  console.log(this.state.data, 'CCCCCCCC');
                } else if (it.answer_link_id === 0) {
                  this.state.data.splice(index + 1, 0, it);
                  console.log(this.state.data, 'DDDDDDDD');
                }
              }
            });
          }
    
          if (value.subquestions === undefined || length2 === data.length) {
            this.setState({
              surveyNumber: this.state.surveyNumber + 1,
              progress: progress + 1 / surveyLength,
            });
          }
        }
        if (index != data.length - 1) {
          data[index].answerWithId = facesAnswer;
    
          this.setState({
            active: true,
            index: index + 1,
            facesAnswer: null,
            multiple: [],
          });
          if (data[index + 1].answerWithId === undefined) {
            this.setState({facesAnswer: null});
          }
    
          if (facesAnswer.length) {
            facesAnswer.map((item) => {
              console.log(item, 'GGGAFfafafafaf');
              if(value.subquestions != null )
            {
              value.subquestions.map((it) => {
                const found = data.some((el) => el.question_id === it.question_id);
                it.parent_question_id = value.question_id;
    
                if (!found) {
                  if (it.answer_link_id.includes(item.answer_id)) {
                    this.state.data.splice(index + 1, 0, it);
                  } else if (it.answer_link_id === 0) {
                    this.state.data.splice(index + 1, 0, it);
                  }
                }
              });
            }
              console.log(this.state.data, 'Chalo naa Response');
            });
            if (value.subquestions === undefined || length2 === data.length) {
              this.setState({
                surveyNumber: this.state.surveyNumber + 1,
                progress: progress + 1 / surveyLength,
              });
            }
            let parentId = value.parent_question_id ? value.parent_question_id : 0;
    
            for (let item of facesAnswer) {
              console.log(item, 'Hello');
              data[index].answerWithId = facesAnswer;
            }
            this.setState({
              active: true,
              index: index + 1,
              // facesAnswer: null,
            });
          }
        }
        console.log(data, 'Hesss');
        if (index === data.length - 1) {
          data[index].answerWithId = facesAnswer;
          if (facesAnswer.length) {
            console.log('GGGFSFSAF', facesAnswer);
    
            facesAnswer.map((item) => {
              console.log(item, 'FAcesArray');
              if (value.subquestions != undefined) {
                value.subquestions.map((it) => {
                  const found = data.some(
                    (el) => el.question_id === it.question_id,
                  );
                  it.parent_question_id = value.question_id;
    
                  if (!found) {
                    if ( it.answer_link_id(item.answer_id)) {
                      this.state.data.splice(index + 1, 0, it);
                    } else if (it.answer_link_id === 0) {
                      this.state.data.splice(index + 1, 0, it);
                    }
                  }
                });
              }
              console.log(this.state.data, 'Chalo naa Response');
            });
    
            for (let item of facesAnswer) {
              data[index].answerWithId = facesAnswer;
            }
          }
          this.uploadResponse();
        }
      };

      previous = (value, index) => {
        let high = this.state.data[index - 1].answerWithId;
    
        this.setState({highValue: high, facesAnswer: high});
    
        if (value.parent_question_id != undefined) {
          var removeIndex2 = this.state.data
            .map(function (item) {
              return item.question_id;
            })
            .indexOf(value.question_id);
    
          this.state.data.splice(removeIndex2, 1);
        }
    
        // remove object
        console.log('New state', this.state.data);
        if (index != 0) {
          this.setState({
            index: index - 1,
          });
        }
        if (value.parent_question_id === undefined) {
          this.setState({
            surveyNumber: this.state.surveyNumber - 1,
            progress: this.state.progress - 1 / this.state.surveyLength,
          });
        }
      };

         

    render(){
      const {minimize} = this.state;
    return (
      <div className={minimize ? null : "survey-bg"}>
        
            <Box className={minimize ? "main-box-tab" : "main-box"} bgcolor="white" boxShadow="2" p="24px" mt="50px" width="100%">
                <p className="censuable-tab">Powered by <a href="https://www.censuble.com/" target="_blank">Censuble</a></p>
                {minimize ? <AiOutlineArrowsAlt className="icon-expand" onClick = {()=>this.setState({minimize:!this.state.minimize})}/> : <AiOutlineShrink className = "icon-expand" onClick = {()=>this.setState({minimize:!this.state.minimize})}/>}
                <FaWindowClose className="icon-close" onClick = {this.props.close}/>
                {this.state.loading ? <img className="loading-icon" src ={LoadingGif}/> :        
          
          <>
                {this.state.surveyVisible ? 
                      <>
                <p className={minimize ? "question-number-tab" : "question-number"}>    {this.state.surveyNumber + 1} of {this.state.surveyLength}</p>
                <ProgressBar className= {minimize ? "progress-tab" : "progress"} />
                  
                {/* <p className="question-text">Q: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown printer</p> */}
                {/* <MultipleChoice value  answerTypes={[{answer_id:1,answer :"fafhajfhajfhajf"},{answer_id:2,answer :"fafhajfhajfhajf"},{answer_id:3,answer :"fafhajfhajfhajf"},{answer_id:4,answer :"fafhajfhajfhajf"}]} onPress={()=>console.log("afajfg")}/> */}
                {this.state.data.map((item, index) => {
                    console.log(item,"Hello")
                if (index === this.state.index) {
                  return (
                    <div key={index} style={{float:"left", width: "100%"}}>
                 <h3 className={minimize ? "question-text-tab" : "question-text"}>  {item.question_text}</h3>
                      <div
                        style={{
                          height: '50%',
                        }}>
                        {item.answer_type === 'faces' ? (
                          <FacesAnswers
                          minimize = {minimize}
                            answerTypes={facesAnswerType}
                            value={
                              this.state.highValue
                                ? this.state.highValue.id
                                : null
                            }
                            onPress={(value) => {
                              let newAnswer =item.answers.filter(data => data.master_id === value.id)
                                 console.log(newAnswer, 'newAnswer');
                                 this.setState({
                                   facesAnswer: newAnswer[0],
                                 });
                               }}
                          />
                        ) : (
                          [
                            item.answer_type === 'selectall' ? (
                              <MultipleChoice
                              minimize = {minimize}
                                answerTypes={item.answers}
                                value={
                                  this.state.highValue
                                    ? this.state.highValue
                                    : null
                                }
                                onPress={(item) => {
                                  let foundR = this.state.multiple.some(
                                    (el) => el.id === item.id,
                                  );
                                  if (!foundR) {
                                    this.state.multiple.push(item);
                                    this.setState({
                                      facesAnswer: this.state.multiple,
                                    });

                                    console.log(
                                      this.state.facesAnswer,
                                      'Answers',
                                    );
                                  }
                                }}
                              />
                            ) : (
                              [
                                item.answer_type === 'hearts' ? (
                                  <HeartsAnswers
                                  minimize = {minimize}
                                    answerTypes={HeartsAnswersTypes}
                                    value={
                                      this.state.highValue
                                        ? this.state.highValue.master_id
                                        : null
                                    }
                                    onPress={(value) => {
                                      let newAnswer =item.answers.filter(data => data.master_id === value.id)
                                         console.log(newAnswer, 'newAnswer');
                                         this.setState({
                                           facesAnswer: newAnswer[0],
                                         });
                                       }}
                                  />
                                ) : (
                                  [
                                    item.answer_type === 'stars' ? (
                                      <StarsAnswers
                                      minimize = {minimize}
                                        answerTypes={StarsAnswersTypes}
                                        value={
                                          this.state.highValue
                                            ? this.state.highValue.master_id
                                            : null
                                        }
                                        onPress={(value) => {
                                          let newAnswer =item.answers.filter(data => data.master_id === value.id)
                                             console.log(newAnswer, 'newAnswer');
                                             this.setState({
                                               facesAnswer: newAnswer[0],
                                             });
                                           }}
                                      />
                                    ) : (
                                      [
                                        item.answer_type === 'yesorno' ? (
                                          <YesorNoAnswers
                                          minimize = {minimize}
                                            value={
                                              this.state.highValue
                                                ? this.state.highValue.master_id
                                                : null
                                            }
                                            answerTypes={YesorNoAnswerTpes}
                                            onPress={(value) => {
                                              let newAnswer =item.answers.filter(data => data.master_id === value.id)
                                                 console.log(newAnswer, 'newAnswer');
                                                 this.setState({
                                                   facesAnswer: newAnswer[0],
                                                 });
                                               }}
                                          />
                                        ) : (
                                          [
                                            item.answer_type ===
                                            'multiplechoice' ? (
                                              <Single
                                                answerTypes={item.answers}
                                                onPress={(value) => {
                                                  let newAnswer =item.answers.filter(data => data.master_id === value.id)
                                                     console.log(newAnswer, 'newAnswer');
                                                     this.setState({
                                                       facesAnswer: newAnswer[0],
                                                     });
                                                   }}
                                              />
                                        
                                            ) : (
                                              [
                                                item.answer_type ===
                                                'thumbs' ? (
                                                  <ThumbsAnswers
                                                  minimize = {minimize}
                                                    value={
                                                      this.state.highValue
                                                        ? this.state.highValue
                                                            .master_id
                                                        : null
                                                    }
                                                    answerTypes={
                                                      thumbsAnswerTpes
                                                    }
                                                    onPress={(value) => {
                                                      let newAnswer =item.answers.filter(data => data.master_id === value.id)
                                                         console.log(newAnswer, 'newAnswer');
                                                         this.setState({
                                                           facesAnswer: newAnswer[0],
                                                         });
                                                       }}
                                                  />
                                                ) : (
                                                  [
                                                    item.answer_type ===
                                                    'likert' ? (
                                                      <LikertsAnswers
                                                      minimize = {minimize}
                                                        value={
                                                          this.state.highValue
                                                            ? this.state
                                                                .highValue.master_id
                                                            : null
                                                        }
                                                        onPress={(item) =>
                                                          this.setState({
                                                            facesAnswer: item,
                                                          })
                                                        }
                                                        answerTypes={
                                                          LikertAnswerTypes
                                                        }
                                                      />
                                                    ) : (
                                                 <Suggestion minimize = {minimize}/>
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        )}
                      </div>

                      <div
                        style={{
                          // justifyContent: 'center',
                          height: '20%',
                        }}>
                        {index === 0 ? (
                         
                            <Button
                             className={minimize ? "next-btn2-tab" : "next-btn2"} variant="contained" color="primary"
                             
                              disabled={
                                this.state.facesAnswer === null ? true : false
                              }
                            //   title="Next"
                              onClick={() => this.next(item, index)}
                            //   backgroundColor={
                            //     this.state.facesAnswer === null
                            //       ? 'grey'
                            //       : '#114B78'
                            //   }
                            
                            >Next</Button>
                        ) : index != 0 && index < this.state.data.length ? (
                          <div
                            style={{
                              justifyContent: 'space-evenly',

                              flexDirection: 'row',
                            }}>
                            <Button
                             className= {minimize ? "prev-btn-tab" : "prev-btn"} variant="contained" color="primary"
                              backgroundColor="#114B78"
                              title="Previous"
                              onClick={() => this.previous(item, index)}
                            >
                                Previous
                            </Button>
                            <Button
                             className={minimize ? "next-btn-tab" : "next-btn"} variant="contained" color="primary"

                             disabled={
                              this.state.facesAnswer === null ? true : false
                            }
                            //   disabled={
                            //     this.state.facesAnswer === null ? true : false
                            //   }
                            //   backgroundColor={
                            //     this.state.facesAnswer === null
                            //       ? 'grey'
                            //       : '#114B78'
                            //   }
                            //   title="Next"
                              onClick={() => this.next(item, index)}
                            >Next</Button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                }
              })}
 

             </> : <Feedback minimize = {minimize} value = {this.state.feedback_text} handler = {(value)=>this.setState({
               feedback_text:value.target.value
             })} feed = {this.state.feed} sendFeedback = {()=>this.feedbackText()}/> }
          </>
          }
            </Box>
        </div>
    
    )
    }
    }

    export default Survey;
    
  

