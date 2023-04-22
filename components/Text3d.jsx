import React, { useRef } from 'react'
import styles from '../styles/Home.module.css';
import gsap from 'gsap';

export default function Index({primary, secondary}) {

    const text1 = useRef(null);
    const text2 = useRef(null);
    
    return (
        <div className={styles.textContainer}>
            <p className={styles.primary} ref={text1}>{primary}</p>
            <p className={styles.secondary} ref={text2}>{secondary}</p>
        </div>
    )
}
