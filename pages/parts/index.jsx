import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Nav";
import { createClient } from 'contentful';

import styles from '../../sass/parts.module.scss';

import Template from '../../components/template/Template'
import Blogcard from "../../components/Blogcard";


import Card from '../../components/Card';


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "parts",
  });

  

 

  return {
    props: {
      articles: data.items,
     
    },
    revalidate: 50,
  };
}








// console.log('videos',data2)


export default function Home({ articles,articles2,articles3 }) {

// console.log(articles[0])
// console.log(articles[0].fields.coverphoto.fields.file.details.image.height)

  return (
    <div>
      <Head>
        <title>Cycle Parts</title>
    
      </Head>
<Template>
<div className={styles.ourparts}>

  <h2>Cycle Parts</h2>
</div>


      <main className={styles.parts}>
   
          {articles.map((article) => (
            <div key={article.sys.id}>

              <Card src={article.fields.coverphoto.fields.file.url}
              width={article.fields.coverphoto.fields.file.details.image.width} height={article.fields.coverphoto.fields.file.details.image.height}
              name={article.fields.name}
              price={article.fields.price}
              tagline={article.fields.tagline}
              folder='/parts/'
              slug={article.fields.slug}
              
              />

            </div>
          ))}
    
      </main>









  </Template>


   

    </div>
  );
}