const filmes = {
    homemaranha: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf4hlb.php?vid=HOMARNHATRVSDARNVRSOBETA" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    barbie: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf4hlb.php?vid=BRBIE2023" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    theoldguard: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf5hlb.php?vid=THOLDGRD" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };

setInnerHTML('#homemaranha', filmes.homemaranha);
setInnerHTML('#barbie', filmes.barbie);
setInnerHTML('#theoldguard', filmes.theoldguard)