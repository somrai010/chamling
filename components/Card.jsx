import React from 'react';
import Link from 'next/link';
import styles from './sass/cards.module.scss';

export default function Card(props) {
  return (
    <>
    <Link href={props.folder+props.slug}>
        <a>
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={props.src} alt='image' />
        </div>
        <div className={styles.des}>
            <h2>{props.name}</h2>
            <h4>RS.{props.price}</h4>
        </div>
    </div>
    </a>
    </Link>
    </>

  )
}
