import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import styles from './sass/productdetailcard.module.scss';

import { CartContext } from '../contexts/CartContext';

import { AiOutlineRight } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineCreditCard } from 'react-icons/ai'
// import { useRouter } from 'next/router';////now no need of router.push()

export default function Productdetailcart(props) {
    const { product } = props;
  

    const [currentCart, setCurrentCart] = useContext(CartContext);

    // const router = useRouter();//now no need of router.push()

   

    const [bigimg, setBigimg] = useState('https:'+product.fields.photos[0].fields.file.url);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [qty, setQty] = useState(1);
    const [note, setNote] = useState('');
    const [item, setItem] = useState();


    const changeImg = (e) => {
        e.preventDefault();
        setBigimg(e.target.currentSrc);

    }

    const AddToCart = () => {


        setCurrentCart([...currentCart, {
            name: product.name,
            color: color,
            quantity: qty,
            note: note,
            size: size,
            price: product.actualprice,

        }]);

        // console.log('currentcart',currentCart);
        // router.push(`/${product.category}/${product.slug}`);


    }



    useEffect(() => {

      
    }, []);



    return (
        <>
            <div className={styles.productdetails}>
              

                <div className={styles.product}>
                    <div className={styles.image}>
                        <div className={styles.smallimg}>
                            <div>
                                <img src={'https:'+product.fields.photos[0].fields.file.url} alt='photo' loading='lazy' onClick={changeImg} />
                            </div>
                            <div>
                                <img src={'https:'+product.fields.photos[1].fields.file.url} alt='photo' loading='lazy' onClick={changeImg} />
                            </div>
                            <div>
                                <img src={'https:'+product.fields.photos[2].fields.file.url} alt='photo' loading='lazy' onClick={changeImg} />
                            </div>
                            <div>
                                <img src={'https:'+product.fields.photos[3].fields.file.url} alt='photo' loading='lazy' onClick={changeImg} />
                            </div>
                        </div>
                        <div className={styles.bigimg} >
                            <img src={bigimg} alt='photo' loading='lazy' id='bigimg' />
                        </div>

                    </div>



                    <div className={styles.des}>


                        <h1>{product.fields.name}</h1>
                        <div className={styles.subtag}><span>#{product.fields.tagline} </span> <hr />
                        </div>
                        {/* <h5>{product.slogan}</h5> */}
                        <hr className={styles.hr} />
        
                      
                        <h2>Price Now: Rs.{product.fields.price}</h2>
                        <hr className={styles.hr} />

                        {/* <div className={styles.des}>
                            <p>{product.fields.description}</p>
                        </div> */}
                        <div className={styles.sizecolor}>

                            {/* <label htmlFor='size'>Size*:</label>
                            <select name='size' id='size' value={size} onChange={(e) => setSize(e.target.value)}>
                                <option>Select</option>
                                {product.size.map((size, index) => (
                                    <option value={size} key={index}>{size}</option>
                                ))}
                            </select> */}
                            {/* <label htmlFor='color'>Color*:</label>
                            <select name='color' id='color' value={color} onChange={(e) => setColor(e.target.value)}>
                                <option>Select</option>
                                {product.colors.map((color, index) => (
                                    <option value={color} key={index}>{color}</option>
                                ))}

                            </select><br /> */}

                            <label htmlFor='color'>Quantity*:</label>
                            <input type='number' placeholder='1' value={qty}
                                onChange={(e) => setQty(e.target.value)} />

                        </div>

                        <div className={styles.addtocart}>
                        {/* <div className={styles.form}>

                        </div> */}
                           
                            <button className={styles.button2}><span><AiOutlineCreditCard /></span> Buy Now</button>
                        </div>


                    </div> 

                </div>


                <div className={styles.description}>
                    <h2>Product Features</h2>
                    {product.fields.features.map((sf, index) => (
                        <div key={index}>
                            <li>{sf}</li>
                        </div>
                    ))}


                    <h2>Product Description</h2>

                    <p>{product.fields.description}</p>



                    <h2>Related Products</h2>
                </div>

            </div>
        </>

    )
}