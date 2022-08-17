import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Nav";
import { createClient } from 'contentful';

import styles from '../../sass/blogs.module.scss';

import Template from '../../components/template/Template'
import Blogcard from "../../components/Blogcard";


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "blogPost",
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
        <title>Chamling Cycle Blogs</title>
    
      </Head>
<Template>
<div className={styles.ourstories}>

  <h2>OUR Blogs</h2>
</div>


      <main className={styles.stories}>
   
          {articles.map((article) => (
            <div key={article.sys.id}>

              <Blogcard slug={article.fields.slug} src={article.fields.coverphoto.fields.file.url}
              width={article.fields.coverphoto.fields.file.details.image.width} height={article.fields.coverphoto.fields.file.details.image.height}
              title={article.fields.title}
              date={article.fields.date}
              folder='/blogs/'
              />

            </div>
          ))}
    
      </main>









  </Template>


   

    </div>
  );
}