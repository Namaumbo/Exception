import axios from "axios";
import { useEffect, useState } from "react";
import { Icon, Pagination, Grid, Button, Image } from "semantic-ui-react";
import photo1 from "../Asserts/photo1.jpg";

export default function SongList() {
  const [songsArray, setSongsArray] = useState([]);

  async function fetchData() {
    await axios
      .get("http://localhost:4000/api/songs/get-tracks")
      .then((response) => {
        setSongsArray(response.data.details);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, ["http://localhost:4000/api/songs/get-tracks"]);
  return (
    <>
      <Grid centered="true" container="true">
        <Grid.Row columns={4}>
          {songsArray.map((track) => {
            return (
              <Grid.Column  key={track.title}>
                <div
                  style={{
                    border: "15px solid  #e0e5e5",
                    borderRadius: "20px",
                    width: "200px",
                    padding: "5px",
                    boxShadow: "2px 2px 8px -3px",
                  }}
                 
                >
                  <Image src={photo1} alt="photo1" width="200px" />
                </div>
                <p as="h1" >{track.title} </p>
                {/* buttons */}
                <Button compact color="orange" size="mini">
                  PLAY NOW
                </Button>
                <Button compact color="orange" size="mini">
                  DOWNLOAD NOW
                </Button>
              </Grid.Column>
            );
          })}
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
        style={{
          margin: "auto",
          marginLeft: "33%",
        }}
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
    </>
  );
}
