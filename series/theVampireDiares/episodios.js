const episodiosTemp01 = {
    ep1: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep2: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep3: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep4: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep5: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep6: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep7: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP07" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep8: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP08" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep9: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP09" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep10: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP10" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep11: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP011" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep12: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP012" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep13: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP013" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep14: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP014" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep15: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP015" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep16: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP016" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep17: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP017" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep18: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP018" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep19: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP019" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep20: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP20" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep21: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP21" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ep22: `<iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=DDUVT01EP22" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };


setInnerHTML('#ep1', episodiosTemp01.ep1);
setInnerHTML('#ep2', episodiosTemp01.ep2);
setInnerHTML('#ep3', episodiosTemp01.ep3);
setInnerHTML('#ep4', episodiosTemp01.ep4);
setInnerHTML('#ep5', episodiosTemp01.ep5);
setInnerHTML('#ep6', episodiosTemp01.ep6);
setInnerHTML('#ep7', episodiosTemp01.ep7);
setInnerHTML('#ep8', episodiosTemp01.ep8);
setInnerHTML('#ep9', episodiosTemp01.ep9);
setInnerHTML('#ep10', episodiosTemp01.ep10);
setInnerHTML('#ep11', episodiosTemp01.ep11);
setInnerHTML('#ep12', episodiosTemp01.ep12);
setInnerHTML('#ep13', episodiosTemp01.ep13);
setInnerHTML('#ep14', episodiosTemp01.ep14);
setInnerHTML('#ep15', episodiosTemp01.ep15);
setInnerHTML('#ep16', episodiosTemp01.ep16);
setInnerHTML('#ep17', episodiosTemp01.ep17);
setInnerHTML('#ep18', episodiosTemp01.ep18);
setInnerHTML('#ep19', episodiosTemp01.ep19);
setInnerHTML('#ep20', episodiosTemp01.ep20);
setInnerHTML('#ep21', episodiosTemp01.ep21);
setInnerHTML('#ep22', episodiosTemp01.ep22);