import LHeader from "./LHeader";
import Button_LandingOrder from "../../ui/Button_LandingOrder";
import { Container, Box, } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MLpage from "./MLpage";
import VTpage from "./VTpage";
import BFpage from "./BFpage";

export default function LBody() {
  return (
    <div>
      <LHeader/>
      <Grid className='Lbody-container'>
        <Container maxWidth="fixed"
          style={{
            // backgroundColor: "red",
            paddingInline: "15vh",
            display: "flex"
          }}>

          <Grid container mt={10} display={"flex"} direction={"row"} spacing={10}>
            <Grid xs={6}>
              <Box >
                <img src="/src/images/text-image/Thead.png" />
              </Box>
              <Box className="textF" mt={2} pl={2}>
                <p>
                  Feel the best and awesome taste with Pizza Runner. <br />
                  There has been various kind of Toppings you can eat <br />
                  and feel the wonder taste of this awesome Pizza. <br />
                  </p>
              </Box>
              <Box display={"flex"}
                  pl={17}
                  mt={12}
              >
                <Button_LandingOrder />
              </Box>
            </Grid>
            <Grid xs={6}>
              {/* <Box
                display={"flex"}
                justifyContent={"center"}
              >
                <img style={{width:700}} src="/src/images/MeatLover-Text.png" />
              </Box> */}
              <Box mt={2} 
                display={"flex"} 
                justifyContent={"left"}
              >
                <img style={{width:830}} src="/src/images/MLOVER1.png" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      
      <MLpage/>
      <VTpage/>
      <BFpage/>
    </div>
  );
}