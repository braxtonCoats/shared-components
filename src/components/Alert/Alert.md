Alerts control their own color based on `type`.

```javascript
<Alert.Group>
  <Alert type="info">
    Hello, world
  </Alert>
  <Alert type="success">
    Something good happened!
  </Alert>
  <Alert type="error">
    An error appeared :(
  </Alert>
</Alert.Group>
```

A long alert:
```javascript
<Alert type="info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris. Elit sed vulputate mi sit amet mauris commodo quis. Ornare arcu odio ut sem nulla pharetra diam sit. Varius sit amet mattis vulputate enim nulla aliquet. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Amet consectetur adipiscing elit pellentesque habitant morbi. Lorem donec massa sapien faucibus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Purus sit amet luctus venenatis.
</Alert>
```

A text-only alert (no icon):
```javascript
<Alert type="info" textOnly>
  Hello, world
</Alert>
```

### Dismissable Alerts

Alerts will show a close button if you supply an `onClose` prop. They will close automatically if you also supply a `closeTimeout` prop.

```javascript

class DismissState extends React.PureComponent {
  constructor() {
    this.state = { show: true };
  }

  render() {
    const { show } = this.state;
    if (show) {
      return React.cloneElement(this.props.children, {
        onClose: () => this.setState({ show: false }),
      });
    }
    return (
      <button style={{ margin: 'auto' }} onClick={() => this.setState({ show: true })}>
        Restore
      </button>
    );
  }
}

<Alert.Group>
  <DismissState>
    <Alert onClose={() => { /* handle it! */ }} type="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus.
    </Alert>
  </DismissState>
  <DismissState>
    <Alert onClose={() => { /* handle it! */ }} type="info" closeTimeout={4000}>Closes automatically after 4 seconds</Alert>
  </DismissState>
</Alert.Group>
```

### Using Alert.Group

Alert ships with a `.Group` static component which can be used to group multiple alerts together:

```javascript

<Alert.Group>
  <Alert type="info">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum.
  </Alert>
  <Alert type="error">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Alert>
  <Alert type="success">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit. Nulla pellentesque dignissim enim sit amet venenatis urna.
  </Alert>
</Alert.Group>
```

### Using Alert.Group.Global

There's a 'global' type of alert group which displays alerts in a global context. Click the button below to summon one.

```javascript
const lipsum = require('lorem-ipsum');

class GlobalAlertDemo extends React.PureComponent {
  constructor() {
    this.state = { alerts: [] };
    const randomType = () => {
      switch (Math.floor(Math.random() * 3)) {
        case 1:
          return 'success';
        case 2:
          return 'error';
        default:
          return 'info';
      }
    };
    this.addAlert = () => {
      const alert = {
        id: Math.random(),
        type: randomType(),
        message: lipsum({ count: Math.floor(Math.random() * 3) }),
      };
      this.setState(({ alerts }) => ({ alerts: [alert, ...alerts] }));
    };
    this.removeAlert = id => {
      this.setState(({ alerts }) => ({ alerts: alerts.filter(al => al.id !== id ) }));
    };
  }

  render() {
    const { alerts } = this.state;
    return (
      <React.Fragment>
        <button style={{ margin: 'auto' }} onClick={this.addAlert}>
          Add alert
        </button>
        <Alert.Group.Global>
          {alerts.map(alert => (
            <Alert
              key={alert.id}
              type={alert.type}
              onClose={() => this.removeAlert(alert.id)}
              closeTimeout={10000}
            >
              {alert.message}
            </Alert>
          ))}
        </Alert.Group.Global>
      </React.Fragment>
    );
  }
}

<GlobalAlertDemo />
```

### Alert.Small

Alert ships with a `.Small` version, which can be used in the same way:

```javascript
<Alert.Small>A small alert</Alert.Small>
```
