import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Nav2";
import { createClient } from 'contentful';

import styles from '../../sass/blogs.module.scss';


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "blogs",
  });

  return {
    props: {
      articles: data.items,
    },
    revalidate: 50,
  };
}

export default function Home({ articles }) {

// console.log(articles[0])
// console.log(articles[0].fields.coverphoto.fields.file.details.image.height)

  return (
    <div className='blog-list'>
      <Head>
        <title>Ktm technologies blogs</title>
    
      </Head>
<Navbar/>
      <main className={styles.blogs}>
   
          {articles.map((article) => (
            <div key={article.sys.id}>

              <Link href={"/blogs/" + article.fields.slug}>

                <a>
                {article.fields.coverphoto.fields.file.url && <img src={'https:' + article.fields.coverphoto.fields.file.url} alt='Cover Image' width={article.fields.coverphoto.fields.file.details.image.width} height={article.fields.coverphoto.fields.file.details.image.height}/>
}
                <h2>{article.fields.title}</h2>
                {/* <p>{article.fields.description}</p> */}
                <span>Published date: {article.fields.date}</span>
               


                </a>
              </Link>
            </div>
          ))}
    
      </main>



   

    </div>
  );
}
