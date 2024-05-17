import { Typography, Box, Link, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import IconInicio from './assets/logos/icon-inicio.svg'

function App() {
  return (
    <>
      <Box
        sx={{
          mt: 20,
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <img src={IconInicio} alt="" />
        <Typography sx={{textAlign: 'center'}} variant="h3" fontWeight={700} fontSize={{ xs: 30, md: 60 }}>
          Feliz cumpleaños <br /> Cam
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Link>
            <Button
              sx={{
                p: 2,
                bgcolor: "black",
                color: blueGrey[100],
                borderRadius: 3,
              }}
            >
              Poemas de cumpleaños
            </Button>
          </Link>
          <Link href='https://open.spotify.com/playlist/7s78ASHc8fNnQ0JH0ZUdSp?si=sad46oS3ThidGHHu_Aw2Ow'>
            <Button
              sx={{
                p: 2,
                bgcolor: "black",
                color: blueGrey[100],
                borderRadius: 3,
              }}
            >
              Playlist de cumpleaños
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default App;