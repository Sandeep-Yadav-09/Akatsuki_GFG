import { useState } from "react";
import Profiles from "./profiles";
import { data } from "./database";
// import './leaderboard.css';
// import './style.css';
import './styles.css';
import './btn-animate.js';
import {
  renderPage,
  getData,
  storeData,
  sortScores,
  checkforTopThree,
} from './render-page.js';
import { fetchScores, sendScore } from './api.js';
import showFireworks from './celebrate.js';

const submitError = document.querySelector('.submit-error');

const Leaderboard = () => {

    const sendFormData = () => {
        const user = document.querySelector('#user').value;
        const score = document.querySelector('#score').value;
        const regex = /^[0-9]+$/;
        if (score.length < 8) {
          if (user !== '' && score !== '' && score.match(regex)) {
            const formData = {
              user,
              score,
            };
            sendScore(formData);
            if (checkforTopThree(Number(score))) {
              showFireworks();
            }
            const scores = getData('scores');
            scores.push(formData);
            storeData('scores', scores);
            renderPage(scores);
            return true;
          }
          return false;
        }
        submitError.textContent = 'Maximum Allowable Score is 9999999';
        return false;
      };
      
      const eventHandler = (eventType, selector, callback) => {
        document.addEventListener(eventType, (e) => {
          if (e.target.matches(selector) && true) callback(e);
        });
      };
      
      eventHandler('click', '#score-submit', (e) => {
        e.preventDefault();
        const form = document.querySelector('.score-submit-form');
        const nameInput = document.querySelector('#user');
        const scoreInput = document.querySelector('#score');
        if (sendFormData()) {
          // submitError.classList.remove('error');
          form.reset();
          nameInput.focus();
        } else {
          // submitError.textContent = 'Please Enter All the Require Fields.';
          // submitError.classList.add('error');
          scoreInput.focus();
        }
      });
      
      eventHandler('click', '#btn-refresh', () => {
        document.location.reload();
      });
      
      document.addEventListener('DOMContentLoaded', () => {
        fetchScores().then((data) => {
          renderPage(sortScores(data.result));
          storeData('scores', data.result);
          
        });
      });


      return (
        <div className="background">
        <div id="canvas"></div>
        <h1 class="page-header">Leaderboard</h1>
        <div class="container">
          <div class="score-list">
            <div class="title-box">
              <h2 class="sub-title">Recent Scores</h2>
              {/* <button class="btn btn-refresh" type="button" id="btn-refresh">
                Refresh <i class="bi bi-arrow-repeat"></i>
              </button> */}
            </div>
            <div class="score-list-box"></div>
            <p class="fetch-error"></p>
          </div>
  
          <div class="wrapper-score-submit">
            <h2 class="form-title">Add Your Score</h2>
            <form
              action="https://formspree.io/f/mdobanyg"
              id="submit-form"
              class="score-submit-form"
              method="post"
            >
              <div class="wrapper-input">
                <input
                  type="text"
                  id="user"
                  name="score-name"
                  placeholder="Your name"
                  required
                />
              </div>
  
              <div class="wrapper-input">
                <input
                  type="number"
                  id="score"
                  name="score"
                  placeholder="Your score"
                  required
                  min="0"
                  max="6"
                />
              </div>
              
              <p class="submit-error">Please enter all require fields.</p>
  
              <button class="btn-score-submit" id="score-submit" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </form>
          </div>
        </div>
        </div>
      );
//     const [period, setPeriod] = useState(0);

//   const handleClick = (e) => {
     
//     setPeriod(e.target.dataset.id)
//   }
//     return (
//         <div className="board">
//         <h1 className='leaderboard'>Leaderboard</h1>

//         <div className="duration">
//             <button onClick={handleClick} data-id='7'>7 Days</button>
//             <button onClick={handleClick} data-id='30'>30 Days</button>
//             <button onClick={handleClick} data-id='0'>All-Time</button>
//         </div>

//         <Profiles data={between(data, period)}></Profiles>

//     </div>
//     )
}

export default Leaderboard

// function between(data, between){
//     const today = new Date();
//     const previous = new Date(today);
//     previous.setDate(previous.getDate() - (between + 1));

//     let filter = data.filter(val => {
//         let userDate = new Date(val.dt);
//         if (between == 0) return val;
//         return previous <= userDate && today >= userDate;
//     })

//     // sort with asending order
//     return filter.sort((a, b) => {
//         if ( a.score === b.score){
//             return b.score - a.score;
//         } else{
//             return b.score - a.score;
//         }
//     })

// }