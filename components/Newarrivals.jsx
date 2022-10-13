import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from './sass/newarrivals.module.scss';

export default function Rarezone() {
    return (

<div className={styles.newarrivals}>

    <h2>New Arrivals</h2>

        <div className={styles.new}>
      
<div className={styles.image}>

<Image src='/newarrival3.png' alt='special product' layout='fill'/>
</div>

<div className={styles.image}>

<Image src='/newarrival4.png' alt='special product' layout='fill'/>
</div>
</div>
        </div>
    )
}
