import React from 'react'

const marae = [
  {
    name: 'whareBg',
    aspect: '',
    polygon: `<polygon className="st0" points="632.6,225.2 530,160.4 530,104.8 490,104.8 490,135.1 346.5,44.4 346.5,10.3 298.5,10.3 298.5,44
    153,135.9 153,104.8 113,104.8 113,161.2 11.4,225.4 34.4,261.7 112.9,212.1 112.9,368 113,368 113,399 530,399 530,368 530,367
    530,211.2 609.6,261.6 "/>`
  },
  {
    name: 'paepae',
    aspect: 'whenua',
    polygon: '<rect x="113" y="367" className="st2" width="417" height="32"/>'
  },
  {
    name: 'maihi-l',
    aspect: 'tahaWairua',
    polygon: '<polygon className="st5" points="298.5,44 11.4,225.4 34.4,261.7 298.5,94.8 	"/>'
  },
  {
    name: 'maihi-r',
    aspect: 'tahaHinengaro',
    polygon: '<polygon className="st6" points="346,44.1 632.6,225.2 609.6,261.6 346,95 	"/>'
  },
  {
    name: 'po-l',
    aspect: 'tahaTinana',
    polygon: '<rect x="113" y="104.8" className="st7" width="40" height="263.3"/>'
  },
  {
    name: 'po-r',
    aspect: 'tahaWhanau',
    polygon: '<rect x="490" y="104.8" className="st8" width="40" height="263.3"/>'
  },
  {
    name: 'tekoteko',
    aspect: '',
    polygon: '<rect x="298.5" y="10.3" className="st9" width="48" height="105"/>'
  },
  {
    name: 'kuwaha',
    aspect: '',
    polygon: '<path className="st3" d="M222,215.8V367h106.7V215.8H222z M310.9,345h-71.1V237.8h71.1V345z"/>'
  },
  {
    name: 'matapihi',
    aspect: '',
    polygon: '<path className="st4" d="M361.7,215.8V305h99.7v-89.3H361.7z M443.6,283h-64.1v-45.3h64.1V283z"/>'
  }
]

function parseHTML (svg) {
  return { __html: svg }
}

function WhareImage (props) {
  return (
    <section className="whareContainer">

      {
        marae.map((section, i) => {
          let grey = ''
          if (props.isAspect && props.aspect !== section.aspect) {
            grey = 'dormant'
          }
          return (
            <svg key={i} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 643 449" style={{ enableBackground: 'new 0 0 643 449' }} xmlSpace="preserve">
              <g className={grey} id={section.name} dangerouslySetInnerHTML={parseHTML(section.polygon)}>

              </g>
            </svg>
          )
        })
      }
    </section>
  )
}

export default WhareImage
