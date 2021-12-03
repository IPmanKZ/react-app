import {Grid } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Grid container spacing={2}>
        <Grid item sm={3} xs={3}>
          <Sidebar/>
        </Grid>
        <Grid item sm={9} xs={9}>
          <Feed/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
