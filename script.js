const materias = {
  cidadania: {
    title: "Jovem protagonista: participação política também é cidadania",
    body: `<p>A produção da Eletiva Comunicação da Palavra aborda a importância da participação dos jovens na sociedade. A matéria destaca a busca por informação, o conhecimento de direitos e deveres e a formação de opiniões próprias.</p>
    <p>O objetivo é estimular o protagonismo estudantil, o diálogo e a participação consciente nas decisões que influenciam a escola, a comunidade e a sociedade.</p>`
  },
  telas: {
    title: "Uso das telas: até onde a tecnologia influencia nossa rotina?",
    body: `<p>Entrevistas e informações apresentadas pelos estudantes levantam uma reflexão sobre o uso do celular, da internet e das telas no cotidiano.</p>
    <p>A reportagem convida a comunidade escolar a pensar sobre equilíbrio, concentração, hábitos digitais e uso responsável da tecnologia.</p>`
  },
  formacao: {
    title: "Administração e Informática: conhecimento para o futuro",
    body: `<p>A produção apresenta as possibilidades de formação em Administração e Informática, destacando conhecimentos técnicos e competências importantes para a vida acadêmica e profissional.</p>
    <p>Organização, comunicação, criatividade, tecnologia e trabalho em equipe aparecem como elementos importantes para a formação dos estudantes.</p>`
  }
};

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".ler").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = materias[btn.dataset.modal];
    modalContent.innerHTML = `<h2>${item.title}</h2>${item.body}`;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".close").addEventListener("click", fecharModal);
modal.addEventListener("click", e => { if(e.target === modal) fecharModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") fecharModal(); });

function fecharModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 450 ? "block" : "none";
});
topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.getElementById("themeBtn").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

/*
  LINKS INDIVIDUAIS DOS VÍDEOS:
  Para colocar um vídeo específico, substitua o endereço do botão no HTML
  pelo link público do YouTube ou Google Drive.

  Exemplos:
  https://drive.google.com/drive/folders/1gdFSRct7IxmIYQPmtenqjM0cizi0hPBR
 https://drive.google.com/drive/folders/1gdFSRct7IxmIYQPmtenqjM0cizi0hPBR
https://drive.google.com/drive/folders/1gdFSRct7IxmIYQPmtenqjM0cizi0hPBR
 */
