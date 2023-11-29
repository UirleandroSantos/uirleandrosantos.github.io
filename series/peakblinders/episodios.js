const episodiosTemp01 = {
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

const episodiosTemp02 = {
  ep1: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT02EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep2: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT02EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep3: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT02EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep4: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT02EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep5: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT02EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep6: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT02EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
}

const episodiosTemp03 = {
  ep1: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT03EP01" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep2: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT03EP02" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep3: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT03EP03" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep4: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT03EP04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep5: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT03EP05" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
   ep6: `<iframe name=Player "" src="https://sinalpublico.com/player3/server4httphlb.php?vid=PEKYBLNDRSANT03EP06" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>
   `,
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

  setInnerHTML('#temp02ep01', episodiosTemp02.ep1);
  setInnerHTML('#temp02ep02', episodiosTemp02.ep2);
  setInnerHTML('#temp02ep03', episodiosTemp02.ep3);
  setInnerHTML('#temp02ep04', episodiosTemp02.ep4);
  setInnerHTML('#temp02ep05', episodiosTemp02.ep5);
  setInnerHTML('#temp02ep06', episodiosTemp02.ep6);

  setInnerHTML('#temp03ep01', episodiosTemp03.ep1);
  setInnerHTML('#temp03ep02', episodiosTemp03.ep2);
  setInnerHTML('#temp03ep03', episodiosTemp03.ep3);
  setInnerHTML('#temp03ep04', episodiosTemp03.ep4);
  setInnerHTML('#temp03ep05', episodiosTemp03.ep5);
  setInnerHTML('#temp03ep06', episodiosTemp03.ep6);