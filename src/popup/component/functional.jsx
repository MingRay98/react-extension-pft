import React, {Component} from 'react';
import styles from './functional.styles'

class functional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }

  openNewWindow = (para) => window.open(para, '_blank', `top=${window.screen.height * 0.1},left=${window.screen.width * 0.03},width=${window.screen.width * 0.9},height=${window.screen.height * 0.9}"`)

  getResult = (para, type) => {
    switch (type) {
      case 'Generic':
        this.openNewWindow(`https://plugins-media.perfectcorp.com/v${para}-dev/test/index.html`)
        break;
      case 'Api-Key':
        this.openNewWindow(`https://bcw-backend.beautycircle.com/store-web-admin/admin/webconsultation/list-customers.action`)
        break;
      case 'Build':
        this.openNewWindow(`https://plugins2.perfectcorp.com/${para}/scminfo.txt`)
        break;
      case 'All Sku':
        this.openNewWindow(`http://plugins.perfectcorp.com/api/webconsultation/list-skus.action?pageSize=99999&apiKey=${para}`)
        break;
      case 'Feature':
        this.openNewWindow(`https://plugins.perfectcorp.com/api/webconsultation/authorize.action?apiKey=${para}`)
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
            <input style={styles.input} disabled={true} placeholder={'CID ex: c25225'} ref={r => this.inputApi = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(null, 'Api-Key')} >Get</div>
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
            <div style={styles.name}>Authorize:</div>
            <input style={styles.input} placeholder={'Api key'} ref={r => this.inputFeature = r} />
            <div style={styles.getBtn} onClick={() => this.getResult(this.inputFeature.value, 'Feature')} >Get</div>
          </div>
        </div >
      </div >
    );
  }
}

export default functional;