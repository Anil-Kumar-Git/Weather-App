import React from 'react'
import { Segment,Grid ,List,Container,Header} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment inverted vertical >
      <Grid centered>
        <Grid.Row>
            <p>
              Extra space for a call to action inside the footer that could
              help re-engage users.
            </p>
        </Grid.Row>
      </Grid>
  </Segment>
  )
}

export default Footer
