import React from 'react';
import Link from 'next/link';
import styles from './sass/blogcard.module.scss';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Blogcard(props) {
  return (
    <div className={styles.blogcard}>

    <Link href={props.folder+props.slug}>

      <a>
      {props.src && <img src={'https:' + props.src} alt='Cover Image' width={props.width} height={props.height}/>
}
      <h3>{props.title}</h3>
      {/* <p>{article.fields.description}</p> */}
      {props.date &&
      <span id='cicon'><CalendarMonthIcon fontSize='small'/><span>Published Date: {props.date}</span></span>
     }
     <br/>
<Button endIcon={<ArrowRightAltIcon/>}>Read More</Button>

      </a>
    </Link>
  </div>
  )
}