import { Avatar, Card, List, Space, Image, Divider, Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllAlbums } from '../../api/albums'
import AlbumCard from '../Common/AlbumCard/AlbumCard';
import ProductCard from '../Common/ProductCard/ProductCard';
import styles from './Albums.module.css'
import { useTranslation } from 'react-i18next'

  const Albums = () => {
    const {t} = useTranslation()

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAllAlbums()
        .then((res) => { 
          setAlbums(res)})
        .catch()
    }, []);
  
    return (
      <>

    <div className={`${styles.albums}`}>
		<div className={`section_title`}>{t('projects')}</div>
		<div className={`${styles.albums_list}`}>
			{albums ? 
			albums.map((album) => 
					<AlbumCard 
						album={album} 
						key={album.id} />) 
			: <p>no albums</p>}
		</div>
    </div>
      </>
      )};
  
  export default Albums;