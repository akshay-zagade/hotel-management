import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ToggleBtn from "./HorizontalNavigation";
import HotelIcon from "@material-ui/icons/Hotel";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import MessageIcon from "@material-ui/icons/Message";
import RoomIcon from "@material-ui/icons/Room";
import LocalSeeIcon from "@material-ui/icons/LocalSee";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import BannerAppBar from "./BannerAppBar";
import { Link } from "react-router-dom";
import Rooms from "./Room";
import Overview from "./Overview";
import Photos from "./Photos";
import Bus from "./pagenotfound/Bus";
import { Route, Switch } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#6d716b",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navMenu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logo: {
    flexGrow: 1,
  },
  dividerStyle: {
    background: "#fff",
  },
  drawerIcon: {
    color: "#fff",
  },
  bannerOne: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function MenuBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <div className={classes.toolbar} />
      <Divider className={classes.dividerStyle} />
      <List>
        <ListItem button key="OVERVIEW" component={Link} to="/">
          <ListItemIcon className={classes.drawerIcon}>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="OVERVIEW" />
        </ListItem>
        <ListItem button key="ROOMS" component={Link} to="/rooms">
          <ListItemIcon className={classes.drawerIcon}>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="ROOMS" />
        </ListItem>
        <ListItem button key="LOCAL AREA" component={Link} to="/">
          <ListItemIcon className={classes.drawerIcon}>
            <LocalSeeIcon />
          </ListItemIcon>
          <ListItemText primary="LOCAL AREA" />
        </ListItem>
        <ListItem button key="MAP" component={Link} to="/">
          <ListItemIcon className={classes.drawerIcon}>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="MAP" />
        </ListItem>
        <ListItem button key="PHOTOS" component={Link} to="/photos">
          <ListItemIcon className={classes.drawerIcon}>
            <PhotoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="PHOTOS" />
        </ListItem>
      </List>
      <Divider className={classes.dividerStyle} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <BannerAppBar />
      <Divider />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.menuButton}>
            <HomeWorkIcon fontSize="large" />
          </Typography>
          <ToggleBtn />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            elevation={6}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/photos" component={Photos} />
        <Route component={Bus} />
      </Switch>
    </div>
  );
}

export default MenuBar;
