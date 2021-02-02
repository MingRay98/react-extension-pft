import React, {Component} from 'react';
import styles from './App.styles';

class App extends Component {
  constructor(props) {
    super(props);
    chrome.storage.sync.get(null, (items) => {
      this.state = items;
    });
  }
  render() {
    return (
      <div style={styles.container}></div>
    );
  }
}

export default App;