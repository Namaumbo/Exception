import React from "react";
import { Image, Segment, Grid, Button, Header, Icon ,Progress} from "semantic-ui-react";
import photo1 from "../Asserts/photo1.jpg";

const Playing = () => (
  <>
    <Segment>
      <Grid centered="true" container="true">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Button color="orange" compact>
              NOW PLAYING
            </Button>
            <br />
            <Header size="huge" style={{ fontSize: "45px" }}>
              Playing
            </Header>
            <Header size="large">Qone & Servant</Header>
            <Header size="medium">(2022)</Header>
            <Icon name="pause" size="big"></Icon>
            <Progress percent={78} size="tiny">
    
            </Progress>
          </Grid.Column>
          <Grid.Column>
            <Image src={photo1} width="230px" circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </>
);

export default Playing;
