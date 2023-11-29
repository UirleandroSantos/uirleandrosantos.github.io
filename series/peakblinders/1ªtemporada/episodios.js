const episodios = {
   ep1: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT01EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep2: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT01EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep3: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT01EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep4: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT01EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep5: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT01EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep6: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT01EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
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