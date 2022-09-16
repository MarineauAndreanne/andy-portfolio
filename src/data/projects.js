import SkinSensationals from 'images/projects-images/skin-sensationals.jpg'
import WeatherApp from 'images/projects-images/weather-app.jpg'
import Dictionary from 'images/projects-images/dictionary.jpg'
import SpaceNews from 'images/projects-images/space-news.jpg'
import TravelAdvisor from 'images/projects-images/travel-advisor.jpg'
import Anahata from 'images/projects-images/anahata.jpg'
import BacsGranger from 'images/projects-images/bacs-granger.jpg'
import Netflix from 'images/projects-images/netflix.jpg'
import Reddit from 'images/projects-images/reddit.jpg'
import YumYum from 'images/projects-images/yum-yum.jpg'

const projects = [
  {
    name: 'Skin Sensationals',
    description: 'Ecommerce Application',
    details: 'Next.JS - Sanity CMS - Stripe',
    githubLink: 'https://github.com/MarineauAndreanne/skin-sensationals',
    netlifyLink: 'https://skin-sensationals.vercel.app/',
    image: SkinSensationals
  },
  {
    name: 'TRVL',
    description: 'Travel Advisor App. Airbnb-like map & list UI.',
    details: 'React - Google Maps API - Data Filtering - Rapid Places API - Material UI',
    githubLink: 'https://github.com/MarineauAndreanne/travel-advisor',
    netlifyLink: 'https://marineau-andy-travel-advisor.netlify.app',
    image: TravelAdvisor
  },
  {
    name: 'Space News',
    description: 'Explore space through different endpoints and functionalities from multiple NASA APIs',
    details: 'React - NASA public APIs',
    githubLink: 'https://github.com/MarineauAndreanne/space-is-awesome',
    netlifyLink: 'https://space-is-awesome.netlify.app/',
    image: SpaceNews
  },

  {
    name: 'Yum Yum',
    description: 'Basic Yelp Clone',
    details: 'React - Express - PostgreSQL',
    githubLink: 'https://github.com/MarineauAndreanne/yumyum',
    image: YumYum
  },
  {
    name: 'Dictionary',
    description: 'Explore different features such as synonyms, audio pronunciation and related images',
    details: 'React - Open Dictionary API - Bootstrap',
    githubLink: 'https://github.com/MarineauAndreanne/dictionary-app-react',
    netlifyLink: 'https://marineau-andy-dictionary.netlify.app',
    image: Dictionary
  },
  {
    name: 'Read-it',
    description: 'Reddit Clone',
    details: 'Next JS - Typescript - Apollo - Next Auth - GraphQL - PostgreSQL',
    githubLink: 'https://github.com/MarineauAndreanne/read-it',
    netlifyLink: 'https://read-it-theta.vercel.app/',
    image: Reddit
  },
  {
    name: 'Les Bacs Granger',
    description: 'Online Store',
    details: 'React - Shopify - Hydrogen - Work in Progress',
    githubLink: 'https://github.com/MarineauAndreanne/bacs-granger',
    netlifyLink: 'https://bacs-granger.myshopify.com/',
    image: BacsGranger
  },
  {
    name: 'Net-Flicks',
    description: 'Netflix Clone',
    details: 'Firebase (Auth, Database) - Stripe Payments - The Movie Database API',
    githubLink: 'https://github.com/MarineauAndreanne/dashboard',
    netlifyLink: 'https://netflix-16fa2.web.app/',
    image: Netflix
  },
  {
    name: 'Anahata',
    description: 'Booking Platform',
    details: 'Gatsby - Styled Components - Booking - Work in Progress',
    githubLink: 'https://github.com/MarineauAndreanne/anahata-nicaragua',
    netlifyLink: 'https://anahata-nicaragua.netlify.app',
    image: Anahata
  },
  {
    name: 'Weather App',
    description: 'See current and forecasted weather',
    details: 'React - Open Weather API',
    githubLink: 'https://github.com/MarineauAndreanne/weather-app-react',
    netlifyLink: 'https://marineau-andy-weather-app.netlify.app',
    image: WeatherApp
  }
]

export default projects
