import Image from 'next/image'

import HiddenMenu from './hiddenMenu'
import { DOMAIN } from '../utils/constants'
import {
  platformMenu,
  whoUsesUsMenu,
  customerStoriesMenu,
  caseStudiesMenu,
} from '../utils/menus'


function Navbar() {
  return (
    <nav role="navigation">
      <div>
        <a href={DOMAIN}>
          <Image
            src={`${DOMAIN}/images/cbi_logo_marketing.png`}
            width={200}
            height={23}
            alt="CB Insights Logo"
          />
        </a>
      </div>

      <HiddenMenu />

      <ul>
        <li>
          <a href={`${DOMAIN}/research`} >Research</a>
        </li>
        <li>
          Platform
          <div>
            <ul>
              {platformMenu.map((entry, index) => <li key={index}><strong><a href={entry[1]}>{entry[0]}</a></strong></li>)}
            </ul>
          </div>
        </li>
        <li>
          Who Uses Us
          <div>
            <ul>
              {whoUsesUsMenu.map((entry, index) => <li key={index}><strong><a href={entry[1]}>{entry[0]}</a></strong></li>)}
            </ul>
          </div>
        </li>
        <li>
          Customer Love
          <div>
            <ul>
              <li>
                <strong><a href={`${DOMAIN}/customer-love`}>Love Notes</a></strong>
              </li>
              <li>
                <strong>Customer Stories</strong>
                <ul>
                  {customerStoriesMenu.map((entry, index) => <li key={index}><a href={entry[1]} target='_blank'>{entry[0]}</a></li>)}
                </ul>
              </li>
              <li>
                <strong>Case Studies</strong>
                <div>
                  <ul>
                    {caseStudiesMenu.map((entry, index) => <li key={index}><a href={entry[1]} target='_blank'>{entry[0]}</a></li>)}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}


export default Navbar
