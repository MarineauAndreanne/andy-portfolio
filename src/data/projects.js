import SkinSensationals from 'images/projects-images/skin-sensationals-3.png'
import Dictionary from 'images/projects-images/dictionary-3.png'
import SpaceNews from 'images/projects-images/space-news-3.png'
import TravelAdvisor from 'images/projects-images/travel-advisor-3.png'
import Anahata from 'images/projects-images/anahata-3.png'
import BacsGranger from 'images/projects-images/bacs-granger-3.png'
import Netflix from 'images/projects-images/netflix-3.png'
import Reddit from 'images/projects-images/reddit-3.png'
import YumYum from 'images/projects-images/yum-yum-3.png'

const projects = [
  {
    name: 'Skin Sensationals',
    description: 'Ecommerce site for a skincare company',
    details: ['React (NextJS)', 'Sanity CMS', 'Stripe Payments', 'Hosted on Vercel'],
    githubLink: 'https://github.com/MarineauAndreanne/skin-sensationals',
    netlifyLink: 'https://skin-sensationals.vercel.app/',
    webPreview: SkinSensationals
  },
  {
    name: 'TRVL',
    description: 'Travel Advisor App. Airbnb-like map & list UI.',
    details: [
      'React',
      'Fetches data from Google Maps and Travel Advisor Open APIs',
      'Fetches API data based on the location / Geolocation (AXIOS)',
      'Styled with Material UI',
      'Hosted on Netlify'
    ],
    githubLink: 'https://github.com/MarineauAndreanne/travel-advisor',
    netlifyLink: 'https://marineau-andy-travel-advisor.netlify.app',
    image: TravelAdvisor,
    webPreview: TravelAdvisor
  },
  {
    name: 'Read-it',
    description: 'Basic Reddit Clone',
    details: [
      'React (NextJS)',
      'Typescript',
      'Apollo',
      'Next Auth',
      'GraphQL',
      'PostgreSQL',
      'Styled with Tailwind CSS',
      'Hosted on Vercel'
    ],
    githubLink: 'https://github.com/MarineauAndreanne/read-it',
    netlifyLink: 'https://read-it-theta.vercel.app/',
    webPreview: Reddit
  },
  {
    name: 'Space News',
    description: 'Explore space through different endpoints and functionalities from multiple NASA APIs',
    details: ['React', 'Fetches data from different NASA Open APIs (AXIOS)'],
    githubLink: 'https://github.com/MarineauAndreanne/space-is-awesome',
    netlifyLink: 'https://space-is-awesome.netlify.app/',
    image: SpaceNews,
    webPreview: SpaceNews
  },

  {
    name: 'Yum Yum',
    description: 'Basic Yelp Clone',
    details: [
      'React',
      'REST API/JSON',
      'Node/Express',
      'pg lib for raw queries',
      'PostgreSQL - running locally at this time',
      'Styled with Bootstrap'
    ],
    githubLink: 'https://github.com/MarineauAndreanne/yumyum',
    webPreview: YumYum
  },

  {
    name: 'Dictionary',
    description: 'Explore different features such as synonyms, audio pronunciation and related images',
    details: ['React', 'Fetches data from Free Dictionary and Pexels APIs (AXIOS)', 'Styled with Bootstrap'],
    githubLink: 'https://github.com/MarineauAndreanne/dictionary-app-react',
    netlifyLink: 'https://marineau-andy-dictionary.netlify.app',
    webPreview: Dictionary
  },
  {
    name: 'Les Bacs Granger',
    description: 'Shopify Ecommerce site for a local business',
    details: ['React', 'Shopify', 'Hydrogen framework', 'Work in Progress'],
    githubLink: 'https://github.com/MarineauAndreanne/bacs-granger',
    netlifyLink: 'https://bacs-granger.myshopify.com/',
    webPreview: BacsGranger
  },
  {
    name: 'Net-Flicks',
    description: 'Basic Netflix Clone',
    details: ['React', 'Firebase Programs', 'Fetches data from TMDB (AXIOS)', 'Stripe Payments'],
    githubLink: 'https://github.com/MarineauAndreanne/dashboard',
    netlifyLink: 'https://netflix-16fa2.web.app/',
    webPreview: Netflix
  },
  {
    name: 'Anahata',
    description: 'Booking platform for sustainable jungle resort in Nicaragua',
    details: ['React (Gatsby)', 'Styled-Components', 'Booking Features', 'Work in Progress'],
    githubLink: 'https://github.com/MarineauAndreanne/anahata-nicaragua',
    netlifyLink: 'https://anahata-nicaragua.netlify.app',
    webPreview: Anahata
  }
  // {
  //   name: 'Weather App',
  //   description: 'See current and forecasted weather',
  //   details: 'React - Open Weather API',
  //   githubLink: 'https://github.com/MarineauAndreanne/weather-app-react',
  //   netlifyLink: 'https://marineau-andy-weather-app.netlify.app',
  //   image: WeatherApp,
  //   webPreview: WeatherApp2
  // }
]

export default projects
