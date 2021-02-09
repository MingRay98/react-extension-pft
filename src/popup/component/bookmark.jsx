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

  redirectLink = (para) => window.open(para)

  createBookmarks = () => {
    const {bookmarks} = this.state
    const bookmarksElement = bookmarks && bookmarks.map((item, index) => (
      <div style={styles.linkBtn} key={index} onClick={() => this.redirectLink(item.href)}>
        {item.title}
      </div>))
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