import React, {Component} from 'react';
import styles from './functional.styles'

class functional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }

  getResult = (para, type) => {
    switch (type) {
      case 'Generic':
        window.open(`https://plugins-media.perfectcorp.com/v${para}-dev/test/index.html`)
        break;
      case 'Api-Key':
        window.open(`http://192.168.19.197:3000/apikey/${para}`)
        break;
      case 'Build':
        window.open(`https://plugins2.perfectcorp.com/c${para}/scminfo.txt`)
        break;
      case 'All Sku':
        window.open(`http://192.168.19.197/sku?pageSize=20&apiKey=${para}`)
        break;
      case 'Feature':
        window.open(`https://plugins.perfectcorp.com/api/webconsultation/authorize.action?apiKey=${para}`)
        break;
    }
  }

  render() {
    const {result} = this.state
    return (
      <div style={styles.container}>
        <div style={styles.title}>Functional</div>
        <div style={styles.buttons}>
          <div style={styles.inputContainer}>
            <div style={styles.name}>Generic dev:</div>
            <input style={styles.input} placeholder={'1.24'} ref={r => this.inputGeneric = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(this.inputGeneric.value, 'Generic')} >Get</div>
          </div>
          <div style={styles.inputContainer}>
            <div style={styles.name}>Api-Key:</div>
            <input style={styles.input} placeholder={'CID only Num'} ref={r => this.inputApi = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(this.inputApi.value, 'Api-Key')} >Get</div>
          </div>
          <div style={styles.inputContainer}>
            <div style={styles.name}>Build info:</div>
            <input style={styles.input} placeholder={'c27487_2101271017'} ref={r => this.inputBuild = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(this.inputBuild.value, 'Build')} >Get</div>
          </div>
          <div style={styles.inputContainer}>
            <div style={styles.name}>All Sku Guid:</div>
            <input style={styles.input} placeholder={'Api key'} ref={r => this.inputAllSku = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(this.inputAllSku.value, 'All Sku')} >Get</div>
          </div>
          <div style={styles.inputContainer}>
            <div style={styles.name}>Feature:</div>
            <input style={styles.input} placeholder={'Api key'} ref={r => this.inputFeature = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(this.inputFeature.value, 'Feature')} >Get</div>
          </div>
        </div >
        {/* <div style={styles.result}>
          Result:
          <div>{result}</div>
        </div> */}
      </div >
    );
  }
}

export default functional;