import React from "react";
import "./player.css";
import {
  Image,
  Segment,
  Grid,
  Button,
  Header,
  Icon,
  Progress,
} from "semantic-ui-react";
import photo1 from "../Asserts/photo1.jpg";

const Playing = () => (
  <>
  <div>
    <Segment id="player">
      <Grid columns={2}>
        <Grid.Column>
          <Button color="orange" compact floated="left" size="tiny">
            NOW PLAYING
          </Button>
          <br/>
          <br/>
          <Header as="h1"  floated="left">Playing</Header>
          <br/>
          <br/>
          <br/>
          <Header as="h4"floated="left">Servant (2022)</Header>
          <br/><br/>
          <audio controls style={{"float":"left"}}>
            <source src="https://firebasestorage.googleapis.com/v0/b/excepcion-library-61baa.appspot.com/o/Excepcion-Music-Tracks%2FluckyOnes.mp3?alt=media&token=b6dee47f-a3c3-4d3c-b119-ad4b1a357a77 " />
          </audio>
        </Grid.Column>
        <Grid.Column>
          <div
            style={{
             float:"right",
            }}
          >
            <Image src={photo1} alt="photo1" width="200px" />
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
    <Header as="h2" id="player-details" floated="left">Playing-Servant</Header><br /><br/>
    <Header as="h5"  floated="left" style={{"marginLeft":"-308px"}}><Icon name="download"></Icon>233</Header><br/>
    <br/>
    <Button color="orange" compact size="tiny" floated="left" id="player-details">PLAY</Button>
    <br /><br />
    <Button color="orange" compact size="tiny"floated="left" id="player-details">DOWNLOAD NOW</Button>
    </div>
  </>
 );

export default Playing;
