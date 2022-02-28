import React from 'react'
import WhareImage from './WhareImage'

function TemplateHome () {
  return (
    <>
      <WhareImage/>
      <nav className="aspectsNav">
        <a className="wairua" href="/tahawairua">Taha Wairua <br /><small>Spiritual</small></a>
        <a className="tinana" href="/tahatinana">Taha Tinana <br /><small>Our Body</small></a>
        <a className="hinegaro" href="/tahahinengaro">Taha Hinengaro <br /><small>Mind and emotions</small></a>
        <a className="whanau" href="/tahawhanau">Taha Whānau <br /><small>Family and Friends</small></a>
        <a className="whenua" href="/whenua">Whenua <br /><small>Land/Roots</small></a>
      </nav>
    </>
  )
}

export default TemplateHome
