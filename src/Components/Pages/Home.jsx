import React,{createRef} from "react";
import _ from "lodash"
import { Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
Embed } from "semantic-ui-react";

const Home = () => {
  const contextRef = createRef()
  console.log(contextRef,"con")

  const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

  return (
    <div>
    <Grid padded centered columns={3}>
    <Grid.Row centered>
          <h1>Today Weather</h1>
        </Grid.Row>
    <Grid.Column>
      <Ref innerRef={contextRef}>
        <Segment>
          {_.times(10, (i) => (
            <Placeholder key={i} />
          ))}

          <Rail position='left'>
            <Sticky context={contextRef} pushing>
              <Header as='h3'>Stuck Content</Header>
              <Embed
              autoplay={false}
              color="white"
              hd={false}
              id="dy7gyuVvTWs"
              iframe={{
                allowFullScreen: true,
                style: {
                  padding: 10,
                },
              }}
              placeholder="assets/Images/weather-2.jpeg"
              source="youtube"
            />
            </Sticky>
          </Rail>

          <Rail position='right' >
            {_.times(4, (i) => (
              <Placeholder key={i} />
            ))}

            <Sticky context={contextRef} pushing>
              <Header as='h3'>Stuck Content</Header>
              <Embed
              autoplay={false}
              color="white"
              hd={false}
              id="dy7gyuVvTWs"
              iframe={{
                allowFullScreen: true,
                style: {
                  padding: 10,
                },
              }}
              placeholder="assets/Images/weather-3.jpeg"
              source="youtube"
            />
            </Sticky>
          </Rail>
        </Segment>
      </Ref>
    </Grid.Column>
  </Grid>
    </div>
  );
};

export default Home;
