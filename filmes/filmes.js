const filmes = {
    homemaranha: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf4hlb.php?vid=HOMARNHATRVSDARNVRSOBETA" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    barbie: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf4hlb.php?vid=BRBIE2023" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    theoldguard: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf5hlb.php?vid=THOLDGRD" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    themercenary: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf4hlb.php?vid=OMRCNRS04" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    ipmenem4: `<iframe name=Player "" src="https://sinalpublico.com/player3/serverf5hlb.php?vid=OGRNDMSTR4" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
    amorERedencao: `<iframe name=Player "" src="https://sinalpublico.cc/player3/serverf5hlb.php?vid=AMRDRDNCAO" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`,
}

const setInnerHTML = (id, content) => {
    const element = document.querySelector(id);
    if (element) {
      element.innerHTML = content;
    }
  };

setInnerHTML('#homemaranha', filmes.homemaranha);
setInnerHTML('#barbie', filmes.barbie);
setInnerHTML('#theoldguard', filmes.theoldguard);
setInnerHTML('#themercenary', filmes.themercenary);
setInnerHTML('#ipmen', filmes.ipmenem4);
setInnerHTML('#amorERedencao', filmes.amorERedencao);