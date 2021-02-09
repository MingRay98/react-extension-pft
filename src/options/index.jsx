import React, {Component} from 'react';
import styles from './index.styles';
import Bookmark from './bookmark/index.jsx'
import AutoFill from './autofill/index.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'bookmarks'
    }
    chrome.storage.sync.get(null, (items) => {
      this.state = items;
    });
  }

  setMenu = (para) => this.setState({menu: para})

  render() {
    const {menu} = this.state
    return (
      <div style={styles.container}>
        <div style={styles.buttoContainer}>
          <div style={styles.menuButton} onClick={() => this.setMenu('bookmarks')}>Bookmarks</div>
          <div style={styles.menuButton} onClick={() => this.setMenu('autoFill')}>AutoFill</div>
        </div>
        {menu === 'bookmarks' && <Bookmark />}
        {menu === 'autoFill' && <AutoFill />}
      </div>
    );
  }
}

export default App;