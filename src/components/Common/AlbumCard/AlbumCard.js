
import styles from './AlbumCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const AlbumCard = ({album}) => {
  return (
      <div className={`${styles.card}`}>
        <div className={`${styles.card_image}`}>
            <Link to={`/album/${album.id}`}>
                <img src={album.image ? album.image : '/logo/dogramaLogoOnly.ico'} alt=''></img>
            </Link>
        </div>
        <div className={`${styles.card_description}`}>
            <p className={`${styles.text_title}`}>{album.name}</p>
            <p className={`${styles.text_body}`}>{album.description}</p>
        </div>
        </div>
  )
}

export default AlbumCard
