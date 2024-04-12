/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import { getLiteral } from '../../../common/i18n'
import * as ROUTES from '../../../common/routes'
import useInnerParallax from '../../../hooks/useInnerParallax'

import ButtonLink from '../../button-link/ButtonLink'

const Council = () => {

  return (
    <section className="about">
      <div className="about__content">
        <div className="about__column">
          <h2 className="about__title">Maintainer Month 2024 Advisory Council</h2>
        </div>
        <div className="about__text">
  <p>Kara Sowles - GitHub </p> 
  <p>Josh Simmons - The Matrix.org Foundation </p>
  <p>Julia Ferraioli	- Amazon Web Services</p>
  <p>Richard Littauer - SustainOSS</p>
  <p>Melissa Mendonça - Quansight</p>
        </div>
      </div>
    </section>
  )
}

export default Council
