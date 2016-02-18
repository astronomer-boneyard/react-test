const { AppBar, IconButton, IconMenu, LeftNav } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

App = React.createClass({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getInitialState() {
    return {
      open: false
    };
  },

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  handleToggle() {
    this.setState({open: ! this.state.open});
  },

  render() {
    return (
      <div className="app">
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <div id="logo"><img src="/images/logo.png" /></div>
          <MenuItem linkButton={true} href="/home" primaryText="Home" index={1} onTouchTap={this.handleToggle}/>
          <MenuItem linkButton={true} href="/feature" primaryText="Feature" index={2} onTouchTap={this.handleToggle}/>
          <MenuItem linkButton={true} href="/contact" primaryText="Contact" index={3} onTouchTap={this.handleToggle}/>
        </LeftNav>
        <AppBar
          title="Skylab"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{backgroundColor: "#00af5b;"}}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              }
            >
              <MenuItem primaryText="Help" index={1} />
              <MenuItem primaryText="Sign out" index={2} />
            </IconMenu>
          }
        />
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'));
  });
}
