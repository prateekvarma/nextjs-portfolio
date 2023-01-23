export default function getStaticParams() {
  return [
    // Make backend API calls here to fetch all the slugs of all blog postgs
    // The slugs sent from here will all be cached, and can be pre-rendered
    { slug: 'learn-to-code' },
    { slug: 'angular-vs-react' }
  ]
}