import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, addAspectData } from '../actions'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import data from '../data.json'
import WhareImage from './WhareImage'

function Aspect () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const aspect = useParams().aspect
  const aspectData = useSelector(state => state.whare?.filter(entry => entry.section === aspect))
  const aspectMetaData = data[aspect]
  const [formData, setFormData] = useState({})

  function updateClickHandler (e) {
    e.preventDefault()
    // const { name, value } = e.target
    const value = document.getElementById('aspectDescr').value
    const name = document.getElementById('aspectDescr').name
    setFormData({
      ...formData,
      [name]: value
    })
    // dispatch(addAspectData(formData, token))
    dispatch(addAspectData({
      section: name,
      entry: value
    }))
  }

  function checkBox (e) {
    const radios = document.getElementsByClassName('radioWrap')
    for (var i = 0; i < radios.length; i++) {
      radios.item(i).classList.remove('active')
    }
    e.target.classList.add('active')
    e.target.querySelector('input').checked = true
  }

  return (
    <>
      {/* <div>Description: {aspectMetaData.description}</div>
      <div>Question: {aspectMetaData.question}</div>
      <div>Links: {aspectMetaData.usefulLinks}</div>
      <div>This is where user inputs personal info</div>
      <div>{JSON.stringify(aspectData)}</div>
      <form action=""> */}
      {/* <div>Description: {aspectMetaData.description}</div> */}
      {/* <label htmlFor={aspect}>user entry for {aspect}:</label><br />
        <input id="aspectDescr" defaultValue={user[aspect]} type="text" name={aspect} /><br />
        <button onClick={(e) => updateClickHandler(e)}>update {aspect}</button><br />
        <button>delete {aspect}</button>
      </form> */}
      <section id="aspectPage">
        <section className="aspectSection" id="aboutAspect">
          <WhareImage/>
          <section className="description">
            <p>{aspectMetaData.description}</p>
          </section>
        </section>
        <section className="aspectSection" id="userAspect">
          <h2>{aspectMetaData.name}<br /><small>{aspectMetaData.translation}</small></h2>
          <section className="intro">
            <p>{aspectMetaData.question}</p>
          </section>
          <section className="userEntry">
            <form action="">
              <label htmlFor="userEntry">My Idea:</label>
              <textarea name="userEntry" placeholder="This is my idea..." id="userEntry" cols="30" rows="3"></textarea>
              <label htmlFor="userRecording">Record:</label><br />
              <audio id="player" controls></audio>
              <fieldset>
                <legend>It makes me feel:</legend>

                <div onClick={(e) => checkBox(e)} className="radioWrap">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                    <g>
                      <path id="path34" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M47.1,169.9h116.3v-16.6H47.1V169.9 z M49.8,81.3c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7S80,53.6,69.2,53.6S49.8,66.1,49.8,81.3z M121.8,81.3 c0,15.2,8.6,27.7,19.4,27.7c10.8,0,19.4-12.5,19.4-27.7s-8.6-27.7-19.4-27.7C130.4,53.6,121.8,66.1,121.8,81.3z"/>
                    </g>
                  </svg>
                  <label htmlFor="ok">Ok</label>
                  <input type="radio" name="userFeeling" id="ok" />
                </div>

                <div onClick={(e) => checkBox(e)} className="radioWrap">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                    <g>
                      <path id="path44" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M16.6,53.6l5.5,49.8l63.7,5.5 l12.5-36h13.8l12.5,36l63.7-5.5l5.5-49.8H16.6z M58.2,189c60.9,0,99.7-13.6,127.4-49.6l-13.8-11.1c-24.9,33.2-66.5,49.8-113.5,49.8 V189z"/>
                    </g>
                  </svg>
                  <label htmlFor="cool">Cool</label>
                  <input type="radio" name="userFeeling" id="cool" />
                </div>

                <div onClick={(e) => checkBox(e)} className="radioWrap">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                    <g>
                      <path id="path4" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M27.7,133.9 c13.8,30.5,44.3,49.8,77.5,49.8s63.7-19.4,77.5-49.8l-6.9-5.5c-20.8,22.2-40.2,33.2-70.6,33.2s-49.8-11.1-70.6-33.2L27.7,133.9z M49.8,81.3c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7S80,53.6,69.2,53.6S49.8,66.1,49.8,81.3z M121.8,81.3 c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7s-8.6-27.7-19.4-27.7S121.8,66.1,121.8,81.3z"/>
                    </g>
                  </svg>
                  <label htmlFor="happy">Happy</label>
                  <input type="radio" name="userFeeling" id="happy" />
                </div>

                <div onClick={(e) => checkBox(e)} className="radioWrap">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                    <g>
                      <path id="path30" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M33.2,81.3 c0,16.9,13.6,30.5,30.5,30.5s30.5-13.6,30.5-30.5S80.6,50.8,63.7,50.8S33.2,64.4,33.2,81.3z M33.5,189.3H177 c-3.3-34.1-34.3-60.9-71.7-60.9S36.8,155.2,33.5,189.3z M52.6,81.3c0-6.1,5-11.1,11.1-11.1c6.1,0,11.1,5,11.1,11.1 c0,6.1-5,11.1-11.1,11.1C57.6,92.4,52.6,87.4,52.6,81.3z M116.3,81.3c0,16.9,13.6,30.5,30.5,30.5s30.5-13.6,30.5-30.5 s-13.6-30.5-30.5-30.5S116.3,64.4,116.3,81.3z M135.7,81.3c0-6.1,5-11.1,11.1-11.1c6.1,0,11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1 C140.7,92.4,135.7,87.4,135.7,81.3z"/>
                    </g>
                  </svg>
                  <label htmlFor="wow">Wow</label>
                  <input type="radio" name="userFeeling" id="wow" />
                </div>

                <div onClick={(e) => checkBox(e)} className="radioWrap">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                    <g>
                      <path id="path8" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M30.5,127 c16.9,20.5,39.9,31.6,63.7,34.1l4.4,26c1.7,10.2,10.8,15.8,23.3,15.8c13,0,29.4-7.8,29.4-21.6c0-2.5-2.8-18-4.7-28.5 c12.5-5.8,24.1-14.1,33.5-25.8l-6.9-6.9c-20.8,16.6-42.9,22.2-67.8,22.2s-47.1-5.5-67.8-22.2L30.5,127z M49.8,81.3 c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7S80,53.6,69.2,53.6S49.8,66.1,49.8,81.3z M118.2,154.4l6.4-1.1l5.8,33l-6.6,1.1 L118.2,154.4z M121.8,81.3c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7s-8.6-27.7-19.4-27.7S121.8,66.1,121.8,81.3z"/>
                    </g>
                  </svg>
                  <label htmlFor="silly">Silly</label>
                  <input type="radio" name="userFeeling" id="silly" />
                </div>

                <div onClick={(e) => checkBox(e)} className="radioWrap">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                    <g>
                      <path id="path42" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M30.5,79.9 c5.5,12.5,16.6,23.5,33.2,23.5s27.7-11.1,33.2-23.5L87.2,73c-5.5,9.7-12.5,15.2-23.5,15.2S44.3,81.3,40.2,73L30.5,79.9z M74.8,174.1c0,11.4,13.6,20.8,30.5,20.8s30.5-9.4,30.5-20.8s-13.6-20.8-30.5-20.8S74.8,162.7,74.8,174.1z M113.5,79.9 c5.5,12.5,16.6,23.5,33.2,23.5s27.7-11.1,33.2-23.5l-9.7-6.9c-5.5,9.7-12.5,15.2-23.5,15.2c-11.1,0-19.4-6.9-23.5-15.2L113.5,79.9z M224.3,61.9v-8.3l31.8-27.7h-30.5v-8.3h47.1v8.3l-30.5,27.7h31.8v8.3H224.3z M288,61.9V50.8l42.9-38.8h-40.2V1h62.3v11.1 l-42.9,38.8h44.3v11.1H288z"/>
                    </g>
                  </svg>
                  <label htmlFor="tired">Tired</label>
                  <input type="radio" name="userFeeling" id="tired" />
                </div>
              </fieldset>
              {/* <button id="delete">Delete &times;</button> */}
              <button onClick={(e) => updateClickHandler(e)} id="save">Submit</button>
              {/* <div>{JSON.stringify(aspectData)}</div> */}
            </form>

            <section className="submittedEntries">
              <section id="" className="submittedEntry">
                <div className="entryWrap">
                  <div className="feelingWrap">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 353.5 217" style={{ enableBackground: 'new 0 0 353.5 217' }} xmlSpace="preserve">
                      <g>
                        <path id="path8" className="st0" d="M0,183.8V50.8c0-22.2,16.6-33.2,44.3-33.2h121.8 c27.7,0,44.3,11.1,44.3,33.2v132.9c0,22.2-16.6,33.2-44.3,33.2H44.3C16.6,217,0,205.9,0,183.8z M30.5,127 c16.9,20.5,39.9,31.6,63.7,34.1l4.4,26c1.7,10.2,10.8,15.8,23.3,15.8c13,0,29.4-7.8,29.4-21.6c0-2.5-2.8-18-4.7-28.5 c12.5-5.8,24.1-14.1,33.5-25.8l-6.9-6.9c-20.8,16.6-42.9,22.2-67.8,22.2s-47.1-5.5-67.8-22.2L30.5,127z M49.8,81.3 c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7S80,53.6,69.2,53.6S49.8,66.1,49.8,81.3z M118.2,154.4l6.4-1.1l5.8,33l-6.6,1.1 L118.2,154.4z M121.8,81.3c0,15.2,8.6,27.7,19.4,27.7s19.4-12.5,19.4-27.7s-8.6-27.7-19.4-27.7S121.8,66.1,121.8,81.3z"/>
                      </g>
                    </svg>
                  </div>
                  <div className="ideaWrap">
                    <h4>Posted on: 10/10/22</h4>
                    <p>Here is some placeholder text lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="playButton">
                    &#9658;
                  </div>
                </div>
                <button className="deleteIdea">&times;</button>
              </section>
            </section>

          </section>
        </section>
        <section className="aspectSection" id="aspectLinks">
          <h3>Useful Links</h3>
          <ul>
            {aspectMetaData.usefulLinks.map((link, i) => {
              return <li key={i}><a href={link}>{link}</a></li>
            })}
          </ul>
        </section>
      </section>
    </>
  )
}

export default Aspect
