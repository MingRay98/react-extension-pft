import React, {Component} from 'react';
import styles from './index.styles';

class AutoFill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    }
  }

  componentDidMount() {
    chrome.storage.sync.get(null, (items) => {
      if (items.autoFill) {
        const {rootCause, solution, behavior, SVN, reviewer, owner, next, autoFill} = items.autoFill;
        rootCause && (this.rootCause.value = rootCause)
        solution && (this.solution.value = solution)
        behavior && (this.behavior.value = behavior)
        SVN && (this.SVN.value = SVN)
        reviewer && (this.reviewer.value = reviewer)
        owner && (this.owner.value = owner)
        next && (this.next.value = next)
        autoFill && (this.autoFill.checked = autoFill)
      }
    });
  }

  onSave = () => {
    this.setState({info: "save....."})
    window.scrollTo(0, 0)
    const {rootCause, solution, behavior, SVN, reviewer, owner, next, autoFill} = this
    chrome.storage.sync.set({
      autoFill: {
        rootCause: rootCause.value,
        solution: solution.value,
        behavior: behavior.value,
        SVN: SVN.value,
        reviewer: reviewer.value,
        owner: owner.value,
        next: next.value,
        autoFill: autoFill.checked
      }
    }, () => {
      console.log('Set chorome storage sucessfully');
      setTimeout(() => this.setState({info: null}), 1000)
    });
  }

  onReset = () => {
    const {rootCause, solution, behavior, SVN, reviewer, owner, next, autoFill} = this
    rootCause.value = null
    solution.value = null
    behavior.value = null
    SVN.value = null
    reviewer.value = null
    owner.value = null
    next.value = null
    autoFill.checked = null
  }


  render() {
    const {info} = this.state
    return (
      <div style={styles.container}>
        {info && <div style={styles.info}>{info}</div>}
        <div style={styles.buttoContainer}>
          <div style={styles.button} onClick={this.onSave}>Save</div>
          <div style={styles.button} onClick={this.onReset}>Reset</div>
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}>1.Root Cause</div>
          <textarea rows="2" cols="80" ref={r => this.rootCause = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}>2.Solution/Workaround</div>
          <textarea rows="2" cols="80" ref={r => this.solution = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}>3.Function/Behavior/OS/HW might impact(More Info)</div>
          <textarea rows="2" cols="80" ref={r => this.behavior = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}>4.SVN Changeset number or Trac URL of Changeset</div>
          <textarea rows="2" cols="80" ref={r => this.SVN = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}>6.Code Reviewer</div>
          <input placeholder="Input ipper  full name include _ . ex: MING_RAY"
            ref={r => this.reviewer = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}>7.Module Owner</div>
          <input placeholder="Input  upper full name include _ . If no owner input -1"
            ref={r => this.owner = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}> 8.Next Run Handler</div>
          <input ref={r => this.next = r} />
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.title}> Automatically Fill</div>
          <input type="checkbox" ref={r => this.autoFill = r} />
        </div>
      </div>
    );
  }
}

export default AutoFill;                                      