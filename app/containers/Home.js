var React = require('react');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}

var Home = React.createClass({
  render: function() {
    return (
      <div style = {styles.container}>
      Hello
      </div>
    );
  }
});

module.exports = Home;
