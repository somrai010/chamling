import React from 'react';
import Link from 'next/link';

import styles from './sass/navdetails.module.scss';

import {BsFacebook} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineYoutube} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs'

export default function Navdetails() {
  return (
    <div className={styles.navdetails}>

<div>
    <p>24 Hour Support: +977-981-7172160</p>
</div>

<div>
  <Link href='/'><a><FaFacebookF/></a></Link>
  <Link href='/'><a><FaInstagram/></a></Link>
  <Link href='/'><a><AiOutlineYoutube/></a></Link>
  <Link href='/'><a><FaTiktok/></a></Link>
  <Link href='/'><a><BsTwitter/></a></Link>
</div>
    </div>
  )
}
