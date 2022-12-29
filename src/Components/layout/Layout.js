import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
 
  return (
    <div>
      <Header />
      <Grid >
        <Grid.Row style={{padding:55 , minHeight:687 }} >
          <Grid.Column>
            <Outlet />
            </Grid.Column>
        </Grid.Row>
        </Grid>
      <Footer />
    </div>
  );
};
export default Layout;
