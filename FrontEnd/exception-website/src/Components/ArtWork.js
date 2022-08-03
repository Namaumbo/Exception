import React from "react";
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import photo1 from "../Asserts/photo1.jpg"
import photo2 from "../Asserts/photo2.jpg"
import photo3 from "../Asserts/photo3.jpg"

export default function ArtWork() {
    return (
        <>
            <Grid>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <div style={{ "border": "1.3px solid #e0e1e2" }}>
                            <Image src={photo1} alt="photo1" width="200px" />
                        </div>
                        <p>Playing- Austin Oaks</p>

                        {/* buttons */}
                        <Button icon labelPosition='left' color="orange" size="tiny">
                            <Icon name='play' />
                            PLAY
                        </Button>

                        <Button icon labelPosition='right' color="orange" size="tiny">
                            DOWNLOAD NOW
                            <Icon name='down arrow' />
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ "border": "1.3px solid black" }}>
                            <Image src={photo2} alt="photo3" width="200px" />
                        </div>
                        <p>Kings and Queens- Austin Oaks</p>
                        {/* buttons */}
                        <Button icon labelPosition='left' color="orange" size="tiny">
                            <Icon name='play' />
                            PLAY
                        </Button>
                        <Button icon labelPosition='right' color="orange" size="tiny">
                            DOWNLOAD NOW
                            <Icon name='down arrow' />
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ "border": "1.3px solid black" }}>
                            <Image src={photo1} alt="photo2" width="200px" />
                        </div>
                        <p>Christ- Austin Oaks</p>
                        {/* buttons */}
                        <Button icon labelPosition='left' color="orange" size="tiny">
                            <Icon name='play' />
                            PLAY
                        </Button>
                        <Button icon labelPosition='right' color="orange" size="tiny">
                            DOWNLOAD NOW
                            <Icon name='down arrow' />
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ "border": "1.3px solid black","padding":"5px" }}>
                            <Image src={photo3} alt="photo1" width="200px" hieght="200px" />

                        </div>
                        <p>Playing- Austin Oaks</p>

                        {/* buttons */}
                        <Button icon labelPosition='left' color="orange" size="tiny">
                            <Icon name='play' />
                            PLAY
                        </Button>
                        <Button icon labelPosition='right' color="orange" size="tiny">
                            DOWNLOAD NOW
                            <Icon name='down arrow' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <hr />
        </>
    )
}