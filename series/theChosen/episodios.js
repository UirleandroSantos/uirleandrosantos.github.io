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

const episodiostemp02 = {
    ep01: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep02: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep03: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep04: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep05: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep06: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep07: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP07" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep08: `<iframe name=Player "" src="https://sinalpublico.com/player3/server11hlb.php?vid=THCHSNOSECLHDT02EP08" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };

setInnerHTML('#temp01ep01', episodiostemp01.ep01);
setInnerHTML('#temp01ep02', episodiostemp01.ep02);
setInnerHTML('#temp01ep03', episodiostemp01.ep03);
setInnerHTML('#temp01ep04', episodiostemp01.ep04);
setInnerHTML('#temp01ep05', episodiostemp01.ep05);
setInnerHTML('#temp01ep06', episodiostemp01.ep06);
setInnerHTML('#temp01ep07', episodiostemp01.ep07);
setInnerHTML('#temp01ep08', episodiostemp01.ep08);

setInnerHTML('#ep1', episodiostemp02.ep01);
setInnerHTML('#ep2', episodiostemp02.ep02);
setInnerHTML('#ep3', episodiostemp02.ep03);
setInnerHTML('#ep4', episodiostemp02.ep04);
setInnerHTML('#ep5', episodiostemp02.ep05);
setInnerHTML('#ep6', episodiostemp02.ep06);
setInnerHTML('#ep7', episodiostemp02.ep07);
setInnerHTML('#ep8', episodiostemp02.ep08);