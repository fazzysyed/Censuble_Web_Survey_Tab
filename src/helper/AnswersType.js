import {
    Fivestar,
    FivestarActive,
    Fourstar,
    FourstarActive,
    great,
    greatActive,
    MaybeActive,
    NoActive,
    No,Maybe,Yes,
    okay,
    okayActive,
    okHand,
    okHandActive,
    Onestar,
    OnestarActive,
    sad,
    sadActive,
    Threestar,
    ThreestarActive,
    thumbDown,
    thumbDownActive,
    thumbup,
    thumbupActive,
    Twostar,
    TwostarActive,
    YesActive,
    Oneheart,
    OneheartActive,
    Twoheart,
    TwoheartActive,
    Threeheart,
    ThreeheartActive,
    Fourheart,
    FourheartActive,
    Fiveheart,
    FiveheartActive,
    Stronglydisagree,
    StronglydisagreeActive,
    Disagree,
    DisagreeActive,
    NeitherAgreeNorDisagreeActive,
    NeitherAgreeNorDisagree,
    Agree,
    AgreeActive,
    Stronglyagree,
    StronglyagreeActive,
    
  } from '../Components/Icons';
  
  export const facesAnswerType = [
    {
      id: 1,
  
      answer: 'Poor',
      selected: sadActive,
      un: sad,
    },
    {
      id: 2,
  
      answer: 'Okay',
  
      selected: okayActive,
      un: okay,
    },
    {
      id: 3,
  
      answer: 'Great',
  
      selected: greatActive,
      un: great,
    },
  ];
  
  export const thumbsAnswerTpes = [
    {
      id: 6,
  
      answer: 'Thumbs Down',
      selected: thumbDownActive,
      un: thumbDown,
    },
    {
      id: 5,
  
      answer: 'Okay (Thumbs)',
      selected: okHandActive,
      un: okHand,
    },
  
    {
      id: 4,
  
      answer: 'Thumbs Up',
      selected: thumbupActive,
      un: thumbup,
    },
  ];
  export const YesorNoAnswerTpes = [
    {
      id: 9,
      answer: 'No',
  
      selected: NoActive,
      un: No,
    },
    {
      id: 8,
  
      answer: 'Maybe',
      selected: MaybeActive,
      un: Maybe,
    },
  
    {
      id: 7,
      answer: 'Yes',
      selected: YesActive,
      un: Yes,
    },
  ];
  
  export const StarsAnswersTypes = [
    {
      id: 10,
      rating: 1,
      answer: '1 Star',
      selected: OnestarActive,
      un: Onestar,
    },
  
    {
      id: 11,
      rating: 2,
      selected: TwostarActive,
      un: Twostar,
      answer: '2 Star',
    },
    {
      id: 13,
      rating: 3,
      selected: ThreestarActive,
      un: Threestar,
      answer: '3 Star',
    },
    {
      id: 14,
      rating: 4,
      selected: FourstarActive,
      un: Fourstar,
      answer: '4 Star',
    },
    {
      id: 15,
      rating: 5,
      selected: FivestarActive,
      un: Fivestar,
      answer: '5 Star',
    },
  ];
  
  export const HeartsAnswersTypes = [
    {
      id: 16,
      rating: 1,
      answer: '1 Heart',
      selected: OneheartActive,
      un: Oneheart,
    },
    {
      id: 17,
      rating: 2,
      selected: TwoheartActive,
      un: Twoheart,
      answer: '2 Heart',
    },
    {
      id: 18,
      rating: 3,
      selected: ThreeheartActive,
      un: Threeheart,
      answer: '3 Heart',
    },
    {
      id: 19,
      rating: 4,
      selected: FourheartActive,
      un: Fourheart,
      answer: '4 Heart',
    },
    {
      id: 20,
      rating: 5,
      selected: FiveheartActive,
      un: Fiveheart,
      answer: '5 Heart',
    },
  ];
  
  export const LikertAnswerTypes = [
    {
      id: 20,
      answer: 'Strongly Disagree',
      selected: StronglydisagreeActive,
      un: Stronglydisagree,
    },
    {
      id: 21,
  
      company_uuid: '0',
      answer: 'Disagree',
  
      selected: DisagreeActive,
      un: Disagree,
    },
    {
      id: 22,
  
      answer: 'Neither Agree Nor Disagree',
  
      selected: NeitherAgreeNorDisagreeActive,
      un: NeitherAgreeNorDisagree,
    },
    {
      id: 23,
  
      answer: 'Agree',
  
      selected: AgreeActive,
      un: Agree,
    },
    {
      id: 24,
  
      answer: 'Strongly Agree',
  
      selected: StronglyagreeActive,
      un: Stronglyagree,
    },
  ];
  

  export const data = [


    {"data":{"survey":{"uuid":"efe4adfa-566a-4bd6-a952-78344aff1f21","token":"ABN-KSM","name":"Covenant Main Dining Survey","template_uuid":0,"points":0,"description":"Simple Dining Survey for Kiosk","suggestion_enabled":1,"suggestion_type":"video","featured":1,"questions":[{"question_id":4,"question_survey_id":28,"media_type":false,"media_source":false,"question_text":"How was your dining experience?","answer_type":"faces","answers":[],"answer_id_link":0,"sub_questions":[{"question_id":11,"question_survey_id":29,"media_type":false,"media_source":false,"question_text":"What made you unhappy?","answer_type":"selectall","answers":[{"answer_id":33,"order_by":99,"answer":"Service"},{"answer_id":34,"order_by":99,"answer":"Menu Selection"},{"answer_id":35,"order_by":99,"answer":"Food Temperature"},{"answer_id":36,"order_by":99,"answer":"Taste"}],"answer_id_link":1},{"question_id":12,"question_survey_id":30,"media_type":false,"media_source":false,"question_text":"What made you happy?","answer_type":"selectall","answers":[{"answer_id":37,"order_by":99,"answer":"Service"},{"answer_id":38,"order_by":99,"answer":"Menu Selection"},{"answer_id":39,"order_by":99,"answer":"Food Temperature"},{"answer_id":40,"order_by":99,"answer":"Taste"}],"answer_id_link":3},{"question_id":13,"question_survey_id":31,"media_type":false,"media_source":false,"question_text":"What could we do better?","answer_type":"selectall","answers":[{"answer_id":41,"order_by":99,"answer":"Service"},{"answer_id":42,"order_by":99,"answer":"Menu Selection"},{"answer_id":43,"order_by":99,"answer":"Food Temperature"},{"answer_id":44,"order_by":99,"answer":"Taste"}],"answer_id_link":2}]}]}}}
  ]