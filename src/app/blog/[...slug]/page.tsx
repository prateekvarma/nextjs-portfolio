export default function BlogPost({ params }) {
  // when you hit the URL 'localhost:3000/blog/learn-to-code' because it'coming from 'src/app/blog/page.tsx'
  // Now that we have the slugs as params, we can get the blog data using the slugs, by AGAIN making an API call to the backend

  console.log(params); // logs '{ slug: [ 'learn-to-code' ] }' 
}