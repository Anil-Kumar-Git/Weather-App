import React from 'react'
import { Divider, Form ,Input} from 'semantic-ui-react'

const Search = ({value,change,location,weather}) => {
  return (
    <Form widths="equal">
    <Form.Group >
      <Form.Input onChange={change} name="city" value={value.city} fluid width={12} label='Type City name' placeholder='First name' />
      <Divider section >
        Or
      </Divider>
      <Form.Button size='small' inline label="Get Cordinates" onClick={location}>
      <i aria-hidden="true" className="gg big icon"></i>
      </Form.Button>
      <Form.Input name="lat" value={value.lat} width={6} onChange={change} type='number' label='Lat' />
      <Form.Input name="lon" value={value.lon} width={6} onChange={change} type='number' label='Lon'/>
      <Form.Button size='tiny' onClick={()=>weather(value.city)} ><i aria-hidden="true" className="search big icon"></i></Form.Button>
    </Form.Group>
  </Form>
  )
}

export default Search
