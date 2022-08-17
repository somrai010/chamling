import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Head from 'next/head';
import { createClient } from 'contentful'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import BlogLayout from '../../components/blogs/Layout';

import Breadcrumbs from '../../components/Breadcrumbs';
import Template from '../../components/template/Template'


import styles from '../../sass/blog.module.scss'

const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "blogPost",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback:false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
    revalidate:50, 
    // Incremental page re-generation after deployment
  };
}

export default function Article({ article }) {
  if (!article) return <div>404</div>;



  return (
    <div>

<Head>
  <title>{article.fields.title}</title>
 
</Head>

<Template>

<Breadcrumbs topic='STORIES' link='/blogs' slug={article.fields.slug}/>

<div className={styles.story}>
<div className={styles.header}>
<h1>{article.fields.title}</h1>
{article.fields.date &&<p><span><CalendarMonthIcon/></span> {article.fields.date} </p>}
{/* <p>Written by:{article.fields.author}</p> */}
</div>

   <section className={styles.content}>
      <div className={styles.article}>
        {documentToReactComponents(article.fields.body,
        
        {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <img
              alt='image'
                src={"https:" + node.data.target.fields.file.url}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.height}
              />
            ),
          },
        }
        
        )}
      </div>



 </section>

 </div>

 </Template>


    </div>
  );
}