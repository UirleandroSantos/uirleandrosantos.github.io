const episodios = {
    ep1: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep2: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep3: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep4: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep5: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep6: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep7: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP07" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep8: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP08" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep9: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP09" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep10: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP10" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep11: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP11" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep12: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP12" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep13: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP13" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep14: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP14" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep15: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP15" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep16: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP16" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep17: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP17" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep18: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP18" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep19: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP19" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep20: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP20" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep21: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP021" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
    ep22: `    <iframe name=Player "" src="https://sinalpublico.com/player3/server1httphlb.php?vid=SPNT01EP22" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
    `,
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };

  setInnerHTML('#ep1', episodios.ep1);
  setInnerHTML('#ep2', episodios.ep2);
  setInnerHTML('#ep3', episodios.ep3);
  setInnerHTML('#ep4', episodios.ep4);
  setInnerHTML('#ep5', episodios.ep5);
  setInnerHTML('#ep6', episodios.ep6);
  setInnerHTML('#ep7', episodios.ep7);
  setInnerHTML('#ep8', episodios.ep8);
  setInnerHTML('#ep9', episodios.ep9);
  setInnerHTML('#ep10', episodios.ep10);
  setInnerHTML('#ep11', episodios.ep11);
  setInnerHTML('#ep12', episodios.ep12);
  setInnerHTML('#ep13', episodios.ep13);
  setInnerHTML('#ep14', episodios.ep14);
  setInnerHTML('#ep15', episodios.ep15);
  setInnerHTML('#ep16', episodios.ep16);
  setInnerHTML('#ep17', episodios.ep17);
  setInnerHTML('#ep18', episodios.ep18);
  setInnerHTML('#ep19', episodios.ep19);
  setInnerHTML('#ep20', episodios.ep20);
  setInnerHTML('#ep21', episodios.ep21);
  setInnerHTML('#ep22', episodios.ep22);