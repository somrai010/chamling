import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from './sass/newarrivals.module.scss';

export default function Rarezone() {
    return (
        <div className={styles.new}>
            <div className={styles.specialproduct}>


<img src='/cycle.jpg' alt='special product'/>
<div className={styles.des}>
 
    {/* <h2>Road Master 5544</h2>
    <h3> Go green & go fast!</h3> */}
   {/* <Link href='/'>
       <a>
       <button>Book Now</button>
       </a>
       </Link> */}



</div>


            </div>




<div className={styles.newproducts}>
<h2>New Arrivals</h2>
            </div>
        </div>
    )
}
