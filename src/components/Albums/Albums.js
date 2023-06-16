import { Avatar, Card, List, Space, Image, Divider, Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllAlbums } from '../../api/albums'

  const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAllAlbums()
        .then((res) => { 
          setAlbums(res)})
        .catch()
    }, []);
  
    return (
      <>
		<div className={`section_title`}>Завършени Проекти</div>


       <Divider></Divider>
      </>
      )};
  
  export default Albums;