import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png'
import featureimage2 from '../images/feature_2.png'
import featureimage3 from '../images/feature_3.png'


function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox className='Feature-1' image={featureimage} title='Aqui você aprende!'/>
            <FeatureBox image={featureimage2} title='development Course'/>
            <FeatureBox image={featureimage3} title='Feature'/>
        </div>
    </div>
  )
}

export default Feature