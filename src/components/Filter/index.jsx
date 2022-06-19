import React from 'react'
import {Conatiner,Form, Icon,Advanced} from './style'
import { Button, Input } from '../Generic'
import Search from 'antd/lib/transfer/search'
import { Popover } from 'antd'
// import { Button, Popover } from 'antd'
const Filter = () => {
  const AdvansedSerch = <Advanced>
    
    <Advanced.Title>addres</Advanced.Title>
    <Advanced.Input placeholder={'Country'}>
      <Input mr={20} width={'185px'} type="text" placeholder={'Country'} />
      <Input mr={20} width={'185px'} type="text" placeholder={'Region'} />
      <Input mr={20} width={'185px'} type="text" placeholder={'City'} />
      <Input mr={20} width={'185px'} type="text" placeholder={'Zip code'} />
    </Advanced.Input>

    <Advanced.Title>apartment info</Advanced.Title>
    <Advanced.Input placeholder={'Country'}>
      <Input width={'185px'} mr={20} type="text" placeholder={'Rooms'} />
      <Input width={'185px'} mr={20} type="text" placeholder={'Size'} />
      <Input width={'185px'} type="text" placeholder={'Sort'} />
    </Advanced.Input>

    <Advanced.Title>price</Advanced.Title>
    <Advanced.Input placeholder={'Country'}>
      <Input width={'185px'} mr={20} type="text" placeholder={'Min price'} />
      <Input width={'185px'} type="text" placeholder={'Max price'} />
    </Advanced.Input>

    <Advanced.Btn>
      <Button  type={'primary'} width={'130px'}>Submit</Button>
    </Advanced.Btn>

  </Advanced>
  return (
    <Conatiner>
      <Form>
        <Input pl={'42px'} placeholder='Enter an address, nighborhood, city, or ZIP code'><Icon.Home/></Input>
        <Popover placement='bottomRight' content={AdvansedSerch} trigger={'click'}>
        <Button width={'150px'} mr={20} ml={20} type={'secondary'}><Icon.Settings/>Advanced</Button>
        </Popover>
        <Button width={'190px'} type={'primary'} ><Icon.Search/> Search</Button>
      </Form>
    </Conatiner>
  )
}

export default Filter