import React, { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { loadNewsFromCountry } from '../actions/FetchActions';

import CountryList from './CountryList';
import CategoryList from './CategoryList';
import { getCountry } from '../selector';
import { Country } from '../reducers/ParamsReducer';

const Footer = () => {
  const state = useStore();
  const country = getCountry(state.getState());
  const dispatch = useDispatch();

  const [showCountryList, setShowCountryList] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);

  useEffect(() => {
    showCountryList || showCategoryList
      ? document.body.setAttribute('style','overflow: hidden')
      : document.body.setAttribute('style','overflow: auto');
  });

  return (
    <div className="footer">
      <div className="icon country" onClick={() => setShowCountryList(true)}>
        <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480.1 480.1'>
          <path d='M240.135,0.05C144.085,0.036,57.277,57.289,19.472,145.586l-2.992,0.992l1.16,3.48 c-49.776,122.766,9.393,262.639,132.159,312.415c28.673,11.626,59.324,17.594,90.265,17.577 c132.548,0.02,240.016-107.416,240.036-239.964S372.684,0.069,240.135,0.05z M428.388,361.054l-12.324-12.316V320.05 c0.014-1.238-0.26-2.462-0.8-3.576l-31.2-62.312V224.05c0-2.674-1.335-5.172-3.56-6.656l-24-16 c-1.881-1.256-4.206-1.657-6.4-1.104l-29.392,7.344l-49.368-21.184l-6.792-47.584l18.824-18.816h40.408l13.6,20.44 c1.228,1.838,3.163,3.087,5.344,3.448l48,8c1.286,0.216,2.604,0.111,3.84-0.304l44.208-14.736 C475.855,208.053,471.889,293.634,428.388,361.054z M395.392,78.882l-13.008,8.672l-36.264-7.256l-23.528-7.832 c-1.44-0.489-2.99-0.551-4.464-0.176l-29.744,7.432l-13.04-4.344l9.664-19.328h27.056c1.241,0.001,2.465-0.286,3.576-0.84 l27.68-13.84C362.382,51.32,379.918,63.952,395.392,78.882z M152.44,33.914l19.2,12.8c0.944,0.628,2.01,1.048,3.128,1.232 l38.768,6.464l-3.784,11.32l-20.2,6.744c-1.809,0.602-3.344,1.83-4.328,3.464l-22.976,38.288l-36.904,22.144l-54.4,7.768 c-3.943,0.557-6.875,3.93-6.88,7.912v24c0,2.122,0.844,4.156,2.344,5.656l13.656,13.656v13.744l-33.28-22.192l-12.072-36.216 C57.68,98.218,99.777,56.458,152.44,33.914z M129.664,296.21l-36.16-7.24l-13.44-26.808v-18.8l29.808-29.808l11.032,22.072 c1.355,2.712,4.128,4.425,7.16,4.424h51.472l21.672,36.12c1.446,2.407,4.048,3.879,6.856,3.88h22.24l-5.6,28.056l-30.288,30.288 c-1.503,1.499-2.349,3.533-2.352,5.656v20l-28.8,21.6c-2.014,1.511-3.2,3.882-3.2,6.4v28.896l-9.952-3.296l-14.048-35.136V304.05 C136.065,300.248,133.389,296.97,129.664,296.21z M105.616,419.191C30.187,362.602-1.712,264.826,25.832,174.642l6.648,19.936 c0.56,1.687,1.666,3.14,3.144,4.128l39.88,26.584l-9.096,9.104c-1.5,1.5-2.344,3.534-2.344,5.656v24 c-0.001,1.241,0.286,2.465,0.84,3.576l16,32c1.108,2.21,3.175,3.784,5.6,4.264l33.6,6.712v73.448 c-0.001,1.016,0.192,2.024,0.568,2.968l16,40c0.876,2.185,2.67,3.874,4.904,4.616l24,8c0.802,0.272,1.642,0.412,2.488,0.416 c4.418,0,8-3.582,8-8v-36l28.8-21.6c2.014-1.511,3.2-3.882,3.2-6.4v-20.688l29.656-29.656c1.115-1.117,1.875-2.54,2.184-4.088 l8-40c0.866-4.333-1.944-8.547-6.277-9.413c-0.515-0.103-1.038-0.155-1.563-0.155h-27.472l-21.672-36.12 c-1.446-2.407-4.048-3.879-6.856-3.88h-51.056l-13.744-27.576c-1.151-2.302-3.339-3.91-5.88-4.32 c-2.54-0.439-5.133,0.399-6.936,2.24l-10.384,10.344V192.05c0-2.122-0.844-4.156-2.344-5.656l-13.656-13.656v-13.752l49.136-7.016 c1.055-0.153,2.07-0.515,2.984-1.064l40-24c1.122-0.674,2.062-1.614,2.736-2.736l22.48-37.464l21.192-7.072 c2.393-0.785,4.271-2.662,5.056-5.056l8-24c1.386-4.195-0.891-8.72-5.086-10.106c-0.387-0.128-0.784-0.226-1.186-0.294 l-46.304-7.72l-8.136-5.424c50.343-16.386,104.869-14.358,153.856,5.72l-14.616,7.296h-30.112c-3.047-0.017-5.838,1.699-7.2,4.424 l-16,32c-1.971,3.954-0.364,8.758,3.59,10.729c0.337,0.168,0.685,0.312,1.042,0.431l24,8c1.44,0.489,2.99,0.551,4.464,0.176 l29.744-7.432l21.792,7.256c0.312,0.112,0.633,0.198,0.96,0.256l40,8c2.08,0.424,4.244-0.002,6.008-1.184l18.208-12.144 c8.961,9.981,17.014,20.741,24.064,32.152l-39.36,13.12l-42.616-7.104l-14.08-21.12c-1.476-2.213-3.956-3.547-6.616-3.56h-48 c-2.122,0-4.156,0.844-5.656,2.344l-24,24c-1.782,1.781-2.621,4.298-2.264,6.792l8,56c0.403,2.769,2.223,5.126,4.8,6.216l56,24 c1.604,0.695,3.394,0.838,5.088,0.408l28.568-7.144l17.464,11.664v27.72c-0.014,1.238,0.26,2.462,0.8,3.576l31.2,62.312v30.112 c0,2.122,0.844,4.156,2.344,5.656l16.736,16.744C344.921,473.383,204.549,493.415,105.616,419.191z'
          />
        </svg>
      </div>
      <TransitionGroup component={null}>
        { showCountryList &&
          <CSSTransition classNames="list" timeout={300}>
            <div className="back-drop" onClick={() => setShowCountryList(false)}>
              <CountryList country={country} onClick={(c: Country) => dispatch(loadNewsFromCountry(c))}/>
            </div>
          </CSSTransition>
        }
      </TransitionGroup>
      <div className="icon category" onClick={() => setShowCategoryList(true)}>
        <svg viewBox='0 0 464 464' xmlns='http://www.w3.org/2000/svg'>
            <path d='m440 0h-416c-13.253906 0-24 10.746094-24 24v416c0 13.253906 10.746094 24 24 24h416c13.253906 0 24-10.746094 24-24v-416c0-13.253906-10.746094-24-24-24zm8 24v200h-74.238281c-3.03125 0-5.800781 1.710938-7.15625 4.421875s-1.0625 5.953125.753906 8.378906c5.742187 7.894531 8.773437 17.4375 8.640625 27.199219 0 22.054688-14.351562 40-32 40s-32-17.945312-32-40c-.136719-9.761719 2.886719-19.300781 8.625-27.199219 1.816406-2.425781 2.109375-5.667969.753906-8.378906-1.355468-2.710937-4.125-4.421875-7.15625-4.421875h-74.222656v-60.617188c7.628906 3.070313 15.777344 4.636719 24 4.617188 30.878906 0 56-21.527344 56-48s-25.121094-48-56-48c-8.222656-.019531-16.371094 1.546875-24 4.617188v-60.617188h200c4.417969 0 8 3.582031 8 8zm-432 0c0-4.417969 3.582031-8 8-8h200v74.238281c0 3.03125 1.710938 5.800781 4.421875 7.15625s5.953125 1.0625 8.378906-.753906c7.898438-5.738281 17.4375-8.765625 27.199219-8.640625 22.054688 0 40 14.351562 40 32s-17.945312 32-40 32c-9.757812.132812-19.300781-2.894531-27.199219-8.625-2.425781-1.816406-5.667969-2.109375-8.378906-.753906-2.710937 1.355468-4.421875 4.125-4.421875 7.15625v74.222656h-60.617188c3.070313-7.628906 4.636719-15.777344 4.617188-24 0-30.871094-21.527344-56-48-56s-48 25.128906-48 56c-.019531 8.222656 1.546875 16.371094 4.617188 24h-60.617188zm0 416v-200h74.238281c3.03125 0 5.800781-1.710938 7.15625-4.421875s1.0625-5.953125-.753906-8.378906c-5.742187-7.894531-8.773437-17.4375-8.640625-27.199219 0-22.054688 14.351562-40 32-40s32 17.945312 32 40c.136719 9.761719-2.886719 19.300781-8.625 27.199219-1.816406 2.425781-2.109375 5.667969-.753906 8.378906 1.355468 2.710937 4.125 4.421875 7.15625 4.421875h74.222656v60.617188c-7.628906-3.070313-15.777344-4.636719-24-4.617188-30.878906 0-56 21.527344-56 48s25.121094 48 56 48c8.222656.019531 16.371094-1.546875 24-4.617188v60.617188h-200c-4.417969 0-8-3.582031-8-8zm432 0c0 4.417969-3.582031 8-8 8h-200v-74.238281c0-3.03125-1.710938-5.800781-4.421875-7.15625s-5.953125-1.0625-8.378906.753906c-7.898438 5.738281-17.4375 8.765625-27.199219 8.640625-22.054688 0-40-14.351562-40-32s17.945312-32 40-32c9.757812-.132812 19.300781 2.894531 27.199219 8.625 2.425781 1.816406 5.667969 2.109375 8.378906.753906 2.710937-1.355468 4.421875-4.125 4.421875-7.15625v-74.222656h60.617188c-3.070313 7.628906-4.636719 15.777344-4.617188 24 0 30.871094 21.527344 56 48 56s48-25.128906 48-56c.019531-8.222656-1.546875-16.371094-4.617188-24h60.617188zm0 0'
            />
        </svg>
      </div>
      <TransitionGroup component={null}>
        { showCategoryList &&
          <CSSTransition classNames="list" timeout={300}>
            <div className="back-drop" onClick={() => setShowCategoryList(false)}>
              <CategoryList />
            </div>
          </CSSTransition>
        }
      </TransitionGroup>
      <div className="search-bar">
        <input className="search-input" type="text"/>
        <span className="icon">
          <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 451 451'>
              <path d='M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3 s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4 C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3 s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z'
              />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Footer;
