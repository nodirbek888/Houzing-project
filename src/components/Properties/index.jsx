import React, { useState } from "react";
import Filter from '../Filter'
import Card from '../Card'
import { Container,Result, Wrapper } from "./style";
import { useQuery } from "react-query";

const {REACT_APP_BASE_URL:url} =process.env
const Properties = () =>{
  const [data, setData] = useState ([])

  useQuery('get started', ()=> {
    return fetch(`${url}v1/houses/list`).then(res=>res.json())
},{
  onSuccess: (res) =>{
    setData(res.data)
  }
})

  return(
    <Container>
      <Filter/>
      <h1 className="title">Properties</h1>
      <p className="description text-centr">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Result>{data.length} result</Result>
      <Wrapper>
        {
          data.map((value)=>{
            return(
              <Card key={value.id} info={value}/>
            )
          })
        }
      </Wrapper>
    </Container>
  )
}

export default Properties