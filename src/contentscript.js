class ContentScript {
  constructor() {
    this.titleContainer = document.querySelector('h4');
    chrome.storage.sync.get("autoFill", (items) => {
      const {rootCause, solution, behavior, SVN, reviewer, owner, next, autoFill} = items.autoFill;
      this.rootCause = rootCause;
      this.solution = solution;
      this.behavior = behavior;
      this.SVN = SVN;
      this.reviewer = reviewer
      this.owner = owner;
      this.next = next;
      this.autoFill = autoFill
      if (autoFill)
        this.fillOptions();
    });
  }

  init = () => {
    this.buildSettingFill();
    this.buildGetInfo();
    console.log('Content script init');
  }

  buildSettingFill = () => {
    const button = document.createElement('button');
    button.textContent = 'Setting Fill';
    button.addEventListener('click', this.fillOptions)
    this.titleContainer.appendChild(button);
  }

  buildGetInfo = () => {
    const inputContainer = document.createElement('div');
    const textarea = document.createElement('textarea');
    const inputButton = document.createElement('button');

    inputContainer.style.cssText = "display: flex; width: fit-content; flex-direction: column; align-items: flex-start;"
    textarea.placeholder = 'Please input your git info from Email. Paste all infos'
    textarea.rows = 4, textarea.cols = 120;
    inputButton.textContent = 'Get info';
    inputButton.addEventListener('click', () => this.onGetInfo(textarea));

    inputContainer.appendChild(textarea);
    inputContainer.appendChild(inputButton);
    this.titleContainer.appendChild(inputContainer);
  }

  fillOptions = () => {
    const {rootCause, solution, behavior, SVN, reviewer, owner, next} = this;
    rootCause && (document.getElementById('RootCause').value = rootCause);
    solution && (document.getElementById('Solution').value = solution);
    behavior && (document.getElementById('Risk').value = behavior);
    SVN && (document.getElementById('TracURL').value = SVN);
    next && (document.getElementById('txtNextRunHandler').value = next);

    if (reviewer)
      for (let i of document.getElementById('CRUserName').options)
        if (i.value === reviewer) i.selected = true;

    if (owner)
      for (let i of document.getElementsByName('ModuleOwner')[0].options)
        if (i.value === owner) i.selected = true;
  }

  onGetInfo = (textarea) => {
    let textData, rootCause, solution, SVN, reviewer;
    textData = textarea.value.split('\n');
    for (let i of textData) {
      if (i.includes('[why]'))
        rootCause = i.split('[why]')[1]
      if (i.includes('[how]'))
        solution = i.split('[how]')[1]
      if (i.includes('rv:'))
        reviewer = i.split('rv:')[1].toUpperCase();
      if ((i.includes('https://git.pft.com/') || i.includes('https://sumer.perfectcorp.com/')) && !i.includes('settings'))
        SVN = i;
    }
    rootCause && (document.getElementById('RootCause').value = rootCause)
    solution && (document.getElementById('Solution').value = solution)
    SVN && (document.getElementById('TracURL').value = SVN)
    if (reviewer)
      for (let i of document.getElementById('CRUserName').options)
        if (i.value === reviewer) i.selected = true;
  }
}

const CS = new ContentScript();
CS.init();