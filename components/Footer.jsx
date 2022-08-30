import React from 'react'
import Link from 'next/link'
import styles from './sass/footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footercontainer}>
        <div className={styles.footer}>
            <div className={styles.sections}>
                <div className={styles.logo}>
<img src='/logo.jpg' alt='logo' />
                </div>
                <div className={styles.pages}>
                <Link href='#' className={styles.flinks}><a>Home</a></Link> <br/><br/>
                <Link href='#'><a>Contact Us</a></Link> <br/><br/>
                <Link href='#'><a>Log In</a></Link> <br/><br/>
                <Link href='#'><a>Sign Up</a></Link> <br/>

                </div>
                <div className={styles.social}>
                <Link href='https://www.facebook.com/chamlingcycle' className={styles.flinks}><a>Facebook</a></Link> <br/><br/>
                <Link href='https://www.instagram.com/chamlingcycle/'><a>Instagram</a></Link> <br/><br/>
                <Link href='https://www.youtube.com/channel/UCc4eM7i4KW-e3qFf3_38etw'><a>YouTube</a></Link> <br/><br/>
                <Link href='https://twitter.com/ChamlingCycle'><a>Twitter</a></Link> <br/>  <br/>
                <Link href='https://www.tiktok.com/@chamlingcycle'><a>Tiktok</a></Link> <br/>  
                </div>
                <div className={styles.subscribe}>
<h2>JOIN US!</h2>
<input type='text' placeholder='Your Name' /><br/>
<input type='email' placeholder= 'Your Email'/><br/>
<button>Send</button>
                </div>
            </div>
        </div>
       
        </div>
    )
}