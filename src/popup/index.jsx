import React, {Component} from 'react';
import styles from './index.styles';
import Bookmark from './component/bookmark.jsx'
import Functional from './component/functional.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'bookmarks',
    };
  }

  componentDidMount() {
  }

  setMenu = (para) => this.setState({menu: para})

  render() {
    const {menu} = this.state
    return (
      <div style={styles.container}>
        <div>
          {menu === 'bookmarks' && <Bookmark />}
          {menu === 'functional' && <Functional />}
        </div>
        <div style={styles.buttoContainer}>
          <div style={{...styles.button, marginTop: '25px'}} onClick={() => this.setMenu('bookmarks')}>Bookmarks</div>
          <div style={{...styles.button, marginTop: '25px'}} onClick={() => this.setMenu('functional')}>Functional</div>
          <div style={{...styles.button, marginTop: '25px'}} onClick={() => chrome.runtime.openOptionsPage()}>Options</div>
        </div>
      </div>
    );
  }
}

export default App;