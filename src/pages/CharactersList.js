import React from 'react'
import CardItem from '../components/CardItem'
import { FetchCharacter } from '../function/FetchCharacter';
import "./CharacterList.css";
import { Row } from 'react-bootstrap'
import Spin from '../components/Spin';


export default function CharactersList() {

  const {error,data,loading} = FetchCharacter()

  if(loading) return <Spin/>

  if(error) return console.log(error); <div>some thing went wrong  </div>

  return (
    <div className='CharacterList'>
      <Row xs={1} md={3} className="g-4">
        {data.Page.media.map(item => 
          ( <CardItem image={item.coverImage.extraLarge} name={item.title.romaji}  key={item.id}/> )
        )}
      </Row>
    </div>
  )
}
