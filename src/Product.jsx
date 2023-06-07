import React from 'react'
import products from './Products'
import styles from './product.module.css'

export default function Product(props) {
  return (
    
       <tr className={styles.bloc2}>
          <td>{props.name}</td>
          <td>{props.price}</td>
          <td>{props.left}</td>
          <td><img src={props.image} alt={props.name} /></td>
       </tr>
    
  )
}
