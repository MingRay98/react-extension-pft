import React, {Component} from 'react';
import styles from './bookmark.styles'

class bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    chrome.storage.sync.get('options', (items) => {
      items && items.options && this.setState({bookmarks: items.options.bookmarks});
    });
  }

  openNewWindow = (para) => window.open(para, '_blank', `top=${window.screen.height * 0.1},left=${window.screen.width * 0.03},width=${window.screen.width * 0.9},height=${window.screen.height * 0.9}"`)

  createBookmarks = () => {
    const {bookmarks} = this.state
    const bookmarksElement = bookmarks && bookmarks.map((item, index) => (
      <div style={styles.linkBtn} key={index} onClick={() => this.openNewWindow(item.href)}>
        {item.title}
      </div>))
    if (!bookmarksElement)
      return <div style={styles.firstTime}>Click options to update settings.</div>
    return bookmarksElement
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>Bookmarks</div>
        <div style={styles.buttons}>
          {this.createBookmarks()}
        </div>
      </div>
    );
  }
}

export default bookmark;