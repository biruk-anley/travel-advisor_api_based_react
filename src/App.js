
import {CssBaseline, Grid} from '@material-ui/core'  // cssbase line copmonet from material UI normalize the style..padding margin color immediately and grid from material ui core
import Header from "./components/header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
