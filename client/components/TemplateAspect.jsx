import React from 'react'
import WhareImage from './WhareImage'

function TemplateAspect () {
  return (
    <section id="aspectPage">
      <section className="aspectSection" id="aboutAspect">
        <WhareImage/>
        <section className="description">
          <p>Taha tinana is about how your body feels and how you care for it. Refuelling your body helps you to feel mentally well. Sometimes your tinana might not be where you’d like it to be and this might be beyond your control. What’s important is that you do what you can to nurture it.</p>
        </section>
      </section>
      <section className="aspectSection" id="userAspect">
        <h2>Taha Tinana<br /><small>Our Body</small></h2>
        <section className="intro">
          <p>What are some ways you can use your tinana (body) to feel good? Do you like to dance, or play sports? How about eating your favourite healthy kai? What are your ideas?</p>
        </section>
        <section className="userEntry">
          <label htmlFor="userEntry">My Idea:</label>
          <textarea name="userEntry" id="" cols="30" rows="3">This is my idea... </textarea>
          <label htmlFor="userRecording">Record:</label><br />
          <audio id="player" controls></audio>
          <label htmlFor="userFeeling">It makes me feel:</label><br />
          <input type="radio" name="feeling" id="1" />
          <input type="radio" name="feeling" id="2" />
          <input type="radio" name="feeling" id="3" />
          <input type="radio" name="feeling" id="4" />
          <input type="radio" name="feeling" id="5" />
          <input type="radio" name="feeling" id="6" />
        </section>
      </section>
      <section className="aspectSection" id="aspectLinks">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">Physical activity for 5- to 17-year-olds</a></li>
          <li><a href="#">Physical activity for 5- to 17-year-olds</a></li>
          <li><a href="#">Physical activity for 5- to 17-year-olds</a></li>
        </ul>
      </section>
    </section>
  )
}

export default TemplateAspect
