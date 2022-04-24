import React, { useState } from 'react'
import CardItem from '../components/CardItem'
import { FetchCharacter } from '../function/FetchCharacter';
import "./CharacterList.css";
import { Row } from 'react-bootstrap'
import Spin from '../components/Spin';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function CharactersList({page,setPage,error,data,loading}) {
  return (
    <div className='CharacterList'>

      {loading && <Spin/>}
      {error && <div>some thing went wrong  </div>}

      {
        !loading && !error &&
        <InfiniteScroll dataLength={data.Page.pageInfo.total} next={()=>setPage(page+1)} hasMore={data.Page.pageInfo.hasNextPage}>
        <Row xs={1} md={3} className="g-4">
          {data.Page.media.map(item => 
            ( <CardItem image={item.coverImage.extraLarge} name={item.title.romaji}  key={item.id}/> )
          )}
        </Row>
      </InfiniteScroll>
      }
      
    </div>
  )
}
