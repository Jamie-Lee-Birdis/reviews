import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from "./Header/Header.jsx"
import ResultsSummary from "./FilterInfo/ResultsSummary.jsx"
import OverallReviews from "./OverallReviews/OverallReviews.jsx"
import RecentReviews from "./Recent/RecentReviews.jsx"
// import GlobalFonts from '../fonts/fonts.js';
var App = (props) => {

  const Wrapper = styled.section`
    background: #1B2838;
    color: #acb2b8;
    font-family: Arial;
    font-size: 14px;
    width: 100%;
    // margin: 0 auto;
  `;

  const ReviewSection = styled.section`
    // padding: 4em;
    background: #1B2838;
    color: #acb2b8;
    font-size: 14px;
    max-width: 940px;
    min-width: 940px;
    margin: 0 auto;
  `;

  const Heading = styled.h2`
    color: #FFF;
    font-family: Arial;
    font-size: 14px;
    margin-block-start: 0;
    margin-block-end: 0;
    padding:2px 0 4px;
  `;

  const LeftCol = styled.div`
    background: #1B2838;
    float: left;
    width: 616px;
  `;

  const RightCol = styled.div`
    background: #1B2838;
    width: 308px;
    margin-left: 14px;
    float: right;
  `;


  const [reviews, setReviews] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get('/moist-air/reviews?gameID=1')
    .then(function (response) {
      // handle success
      console.log(response);

      // setReviews({reviews: response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    // Update the document title using the browser API
    document.title = `You got tons of result ${reviews}`;
  });


  return (
    <Wrapper>
      <ReviewSection>
        <Heading>CUSTOMER REVIEWS</Heading>
        <Header score={props.score}/>
        <ResultsSummary  score={props.score} count={62}/>
        {/* <Wrapper> */}
          <LeftCol>
            <OverallReviews />
          </LeftCol>
          <RightCol>
            <RecentReviews />
          </RightCol>
        {/* </Wrapper> */}
      </ReviewSection>
    </Wrapper>
  );
}

export default App;