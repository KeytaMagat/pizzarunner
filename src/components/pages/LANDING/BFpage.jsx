import { Height } from "@mui/icons-material";
import Button_LandingOrder from "../../ui/Button_LandingOrder";
import { Container, Box, } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function BFpage() {
  return (
    <div className="beefx3" id="beefx3" >
      <Grid className='BFpage' display={"grid"} >
        <Container sx={{paddingTop: 10}}>
          <img src="./newimages/BFpage/TEXT1.png" alt="" />
        </Container>
        <Grid display={"flex"}>
          <Container disableGutters 
            style={{ 
              display: "Grid",
              // backgroundColor: "green",
              justifyContent: "center",
              paddingTop:80,
              marginInline: 100,
              marginBlock: 100
            }}>
            <img style={{}} src="./newimages/BFpage/TEXT2.png" alt="" />
            <Box display={"flex"} justifyContent={"center"} marginTop={10}>
              <img style={{width:250, height:90}} src="./newimages/Button.png" alt="button"/>
            </Box>
          </Container>
          <Container disableGutters
              style={{
                display: "flex",
                justifyContent: "right"
              }}
          >
            <img style={{width: 1150}} src="./newimages/BFpage/food.png" alt="" />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}