




  
const pressUp = () => {
  const marcSel = document.getElementById('marc')
  const parentMarc = marcSel.parentNode
  const paranChilds = parentMarc.children

  for (let i = 0; i < paranChilds.length; i++) {
    const ele = paranChilds[i];
    const parentUpChilds = parentMarc.previousElementSibling?.children

    if (ele.id == 'marc' && parentUpChilds) {
      const changer = parentUpChilds[i];
      const parenChanger = changer.parentNode

      const aParent = parenChanger;
      const bParent = parentMarc;

      const aHelp = document.createElement("div");
      const bHelp = document.createElement("div");

      parenChanger.replaceChild(aHelp,changer);
      parentMarc.replaceChild(bHelp,marcSel);
    
      parenChanger.replaceChild(marcSel,aHelp);
      parentMarc.replaceChild(changer,bHelp);
    }
  }
}


const pressDown = () => {
  const marcSel = document.getElementById('marc')
  const parentMarc = marcSel.parentNode
  const paranChilds = parentMarc.children

  for (let i = 0; i < paranChilds.length; i++) {
    const ele = paranChilds[i];
    const parentUpChilds = parentMarc.nextElementSibling?.children
    
    if (ele.id == 'marc' && parentUpChilds) {
      const changer = parentUpChilds[i];
      const parenChanger = changer.parentNode

      const aParent = parenChanger;
      const bParent = parentMarc;

      const aHelp = document.createElement("div");
      const bHelp = document.createElement("div");

      parenChanger.replaceChild(aHelp,changer);
      parentMarc.replaceChild(bHelp,marcSel);
    
      parenChanger.replaceChild(marcSel,aHelp);
      parentMarc.replaceChild(changer,bHelp);
    }
  }
}


const pressRight = () => {
  const marcSel = document.getElementById('marc')

  if(marcSel.previousElementSibling) {
    marcSel.previousElementSibling.before(marcSel)
  }

}
const pressLeft = () => {
  const marcSel = document.getElementById('marc')
  if(marcSel.nextElementSibling) {
    marcSel.nextElementSibling.after(marcSel)
  }

}
