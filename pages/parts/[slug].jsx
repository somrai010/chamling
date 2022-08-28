
import { createClient } from 'contentful'

import Template from '../../components/template/Template'

import React,{useState,useEffect} from 'react'

import Productdetailcart from '../../components/Productdetailcard'
import Head from 'next/head'

import styles from '../../sass/partslug.module.scss'



const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "parts",
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
    content_type: "parts",
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
  



export default function Post({article}) {




  



    // const { product } = article;
    // console.log('p',article)

return (
<div className={styles.product}>

  
<Template>
<Productdetailcart product={article}/>
</Template>        
     
</div>


)
}