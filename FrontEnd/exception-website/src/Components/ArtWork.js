import React from "react";
import { Grid, Image, Button, Icon, Pagination } from "semantic-ui-react";
import photo1 from "../Asserts/photo1.jpg";
import photo2 from "../Asserts/photo2.jpg";
import photo3 from "../Asserts/photo3.jpg";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import app from "./firebase";


export default function ArtWork() {
  const listItem = () => {
    // listing all the Audios
    const storage = getStorage();
    const starsRef = ref(storage, "luckyOnes.mp3");
    // Get the download URL
    getDownloadURL(starsRef)
      .then((url) => {
        console.log(url);
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            console.log("nothing");
            break;
          case "storage/unauthorized":
            console.log("unauthorized");
            break;
          case "storage/canceled":
            console.log("canceled requests");
            break;
          case "storage/unknown":
            console.log("unknown one");
            break;
        }
      });
  };

  return (
    <>
      <div>
        <Button positive onClick={listItem}>
          list all the songs
        </Button>
        <Grid centered="true" container="true">
          <Grid.Row columns={4}>
            <Grid.Column>
              <div
                style={{
                  border: "15px solid  #e0e1e2",
                  borderRadius: "20px",
                  width: "200px",
                  padding: "5px",
                }}
              >
                <Image src={photo1} alt="photo1" width="200px" />
              </div>
              <p>Playing- Austin Oaks</p>
              {/* buttons */}
              <Button
                compact
                icon
                labelPosition="left"
                color="orange"
                size="mini"
              >
                <Icon name="play" />
                PLAY
              </Button>
              <Button compact color="orange" size="mini">
                DOWNLOAD NOW
              </Button>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  border: "15px solid  #e0e1e2",
                  borderRadius: "20px",
                  width: "200px",
                  padding: "5px",
                }}
              >
                <Image src={photo2} alt="photo3" width="200px" />
              </div>
              <p>Kings and Queens- Austin Oaks</p>
              {/* buttons */}
              <Button
                compact
                icon
                labelPosition="left"
                color="orange"
                size="mini"
              >
                <Icon name="play" />
                PLAY
              </Button>
              <Button compact color="orange" size="mini">
                DOWNLOAD NOW
              </Button>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  border: "15px solid  #e0e1e2",
                  borderRadius: "20px",
                  width: "200px",
                  padding: "5px",
                }}
              >
                <Image src={photo1} alt="photo2" width="200px" />
              </div>
              <p>Christ- Austin Oaks</p>
              {/* buttons */}
              <Button
                compact
                icon
                labelPosition="left"
                color="orange"
                size="mini"
              >
                <Icon name="play" />
                PLAY
              </Button>
              <Button compact color="orange" size="mini">
                DOWNLOAD NOW
              </Button>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  border: "15px solid  #e0e1e2",
                  borderRadius: "20px",
                  width: "200px",
                  padding: "5px",
                }}
              >
                <Image src={photo3} alt="photo1" width="200px" hieght="200px" />
              </div>
              <p>Playing- Austin Oaks</p>
              {/* buttons */}
              <Button
                compact
                icon
                labelPosition="left"
                color="orange"
                size="mini"
              >
                <Icon name="play" />
                PLAY
              </Button>
              <Button compact color="orange" size="mini">
                DOWNLOAD NOW
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr
          style={{
            marginTop: "40px",
            marginLeft: "250px",
            marginRight: "250px",
          }}
        />
        <Pagination
          defaultActivePage={5}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true,
          }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          totalPages={10}
        />
      </div>
    </>
  );
}
