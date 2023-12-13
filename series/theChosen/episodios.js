const episodiostemp01 = {
    ep01: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep02: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep03: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep04: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep05: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep06: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep07: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP07" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep08: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT01EP08" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };

setInnerHTML('#ep1', episodiostemp01.ep01);
setInnerHTML('#ep2', episodiostemp01.ep02);
setInnerHTML('#ep3', episodiostemp01.ep03);
setInnerHTML('#ep4', episodiostemp01.ep04);
setInnerHTML('#ep5', episodiostemp01.ep05);
setInnerHTML('#ep6', episodiostemp01.ep06);
setInnerHTML('#ep7', episodiostemp01.ep07);
setInnerHTML('#ep8', episodiostemp01.ep08);