import { DOMAIN, CASE_STUDIES } from './constants'


const platformMenu = [
  ['Business Relationships', `${DOMAIN}/business-relationships`],
  ['Collections', `${DOMAIN}/collections`],
  ['Company Mosaic', `${DOMAIN}/company-mosaic`],
  ['Earnings Transcripts Analytics', `${DOMAIN}/earnings-transcripts-analytics`],
  ['Industry Analytics', `${DOMAIN}/industry-analytics`],
  ['Market Map Maker', `${DOMAIN}/market-map-maker`],
  ['Market Sizings', `${DOMAIN}/market-sizings`],
  ['Notes', `${DOMAIN}/notes-collaboration`],
  ['Patent Analytics', `${DOMAIN}/patent-search-engine-analytics`],
  ['Stories', `${DOMAIN}/stories`],
]

const whoUsesUsMenu = [
  ['Corporate Innovation', `${DOMAIN}/innovation`],
  ['Corporate Strategy', `${DOMAIN}/corporate-strategy`],
  ['Competitive Intel / Market Research', `${DOMAIN}/competitive-market-research`],
  ['Corporate Development and M&A', `${DOMAIN}/corporate-development`],
  ['Corporate Venture Capital', `${DOMAIN}/corporate-venture-capital`],
  ['Venture Capital', `${DOMAIN}/venture-capital`],
  ['Investment Banks', `${DOMAIN}/investment-banks`],
]

const customerStoriesMenu = [
  ['ADP Customer Story', `${DOMAIN}/customer-story-adp-increases-strategic-initiatives`],
  ['GSK Customer Story', `${DOMAIN}/customer-story-gsk-scales-growth`],
  ['Prudential Customer Story', `${DOMAIN}/customer-story-prudential-transforms-innovation-strategy`],
]

const caseStudiesMenu = [
  ['Barrick Case Study', `${CASE_STUDIES}/Barrick.pdf`],
  ['Citi Case Study', `${CASE_STUDIES}/citi.pdf`],
  ['GE Case Study', `${CASE_STUDIES}/GE.pdf`],
  ['IBM Case Study', `${CASE_STUDIES}/IBM.pdf`],
  ['JobsOhio Case Study', `${CASE_STUDIES}/jobsohio.pdf`],
  ['Riviera Partners Case Study', `${CASE_STUDIES}/riviera.pdf`],
  ['Norwest Case Study', `${CASE_STUDIES}/norwest.pdf`],
  ['FirstMark Case Study', `${CASE_STUDIES}/firstmark.pdf`],
]


module.exports = {
  platformMenu,
  whoUsesUsMenu,
  customerStoriesMenu,
  caseStudiesMenu,
}
