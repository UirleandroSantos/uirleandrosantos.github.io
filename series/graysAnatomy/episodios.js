const episodiosTemp01 = {
    ep1: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep2: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep3: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep4: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep5: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep6: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep7: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP07" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep8: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP08" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep9: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=GRATT01EP09" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };

  setInnerHTML('#temp01ep01', episodiosTemp01.ep1);
  setInnerHTML('#temp01ep02', episodiosTemp01.ep2);
  setInnerHTML('#temp01ep03', episodiosTemp01.ep3);
  setInnerHTML('#temp01ep04', episodiosTemp01.ep4);
  setInnerHTML('#temp01ep05', episodiosTemp01.ep5);
  setInnerHTML('#temp01ep06', episodiosTemp01.ep6);