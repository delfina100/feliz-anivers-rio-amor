
  const NOME = "meu amor";
  const DATA_ANIVERSARIO = "2026-05-26"; // AAAA-MM-DD
 
  const MENSAGENS = [
    {icon: "🔓", texto: "Para te lembrar o quanto eu te amo e o quanto seu dia é especial. Em todos os segundos, meu pensamento te encontra, minha pequena. Eu te amo, meu amorzinho, espero muito que você goste." },
    {icon: "🔓",texto: "Amo desfrutar a vida ao seu lado, minha princesa, e celebrar a sua vida me enche de alegria, pq é celebrar a parte mais incrível da minha. (pensa na nossa figurinha daquela menina na cama)" },
    {icon: "🔓",texto: "Amo te ver crescendo e evoluindo, meu amorzinho. Cada dia que passa, tenho mais orgulho da mulher brilhante que você é." },
    {icon: "🔓",texto: "Amo te ver dormindo, minha princesa. Acho muito fofinho quando vc mexe assim, além de me dar muita paz." },
    { icon: "🔓",texto: "Amo quando dormimos juntinhas, meu amorzinho. Sentir seu corpo no meu faz meu soninho ser mil vezes melhor." },
    { icon: "🔓",texto: "Eu amo sonhar com você e com o nosso futuro, minha princesa." },
    {icon: "🔓", texto: "Amo quando dormimos juntinhas e acordamos com tesão, amor.(o horário ainda permite falar pelo menos uma putaria, amor)" },
    {icon: "🔓", texto: "Eu amo te ver de pertinho, amor. Quando estamos deitadinhas e eu fico te admirando, só consigo pensar em como sou apaixonada por cada detalhezinho seu." },
    { icon: "🔓", texto: "Amo ver você acordar, meu amorzinho. Amo sua carinha, sua voz manhosa pq você não quer acordar tão cedo (mesmo a gnt sabendo que esse papel é meu)" },
     {icon: "🔓", texto: "Eu amo beijinhos com gosto de chá e ter você como meu café da manhã, amor KKKKKKKKKKKKKKKKKKK.(não poderia deixar passar, né, minha princesa)" },
    {icon: "🔓", texto: "Amo como você consegue ser a mulher mais linda desse universo no dia a dia, meu amor, juro. Fico impressionada com como você tá cada dia mais linda, servindo mais looks babilônicos, minha princesa." },
    { icon: "🔓",texto: "Eu admiro tanto o quão educada você é, minha princesa (acho que nunca te falei isso, né?), chega a me dar vontade de ser uma pessoa mais assim também." },
    {icon: "🔓", texto: "Amo dividir os sonhos com você, minha princesa (mal consigo imaginar seu gabinete sem chorar, meu amor), amo saber que iremos realizá-los juntinhas." },
    { icon: "🔓",texto: "Agora algo que eu nunca te disse, amor: eu amo muito o fato de você saber cozinhar, minha princesa. Acho isso tipo coisa de bruxa." },
    { icon: "🔓",texto: "Eu amo ser sua, minha princesa, no sentido máximo da palavra." },
    { icon: "🔓",texto: "O seu brilho é tanto, minha princesa, que você cativa todos que estão ao seu redor (não é à toa que todo dia você ganha presentinho no banco, né, amor)" },
    {icon: "🔓", texto: "Eu amo como nós fazemos parte da vida uma da outra. Sei que sempre estaremos juntas, independentemente da situação, e isso me dá muita força e tranquilidade pra levar a vida, meu amor. Saiba que a sua mulher sempre estará aqui contigo, minha princesa, pois sou sua companheira, parceira, e a gnt sabe que somos a melhor dupla do universo inteiro." },
    { icon: "🔓", texto: "Eu amo nossas tardes juntinhas, minha princesa. Chega a parecer que o mundo para só para estarmos juntas." },
    {icon: "🔓", texto: "Eu amo fazer tudo ao seu lado, minha princesa, já que até coisas mais cotidianas, como resolver um problema com a operadora (aí, amor, amo tá com você nessas coisas aleatórias) ou ficar sentadinhas no bosque, são momentos tão especiais que dá vontade de guardar em uma caixinha." },
    {icon: "🔓", texto: "Admiro tanto o fato de, mesmo vc cansada, você nunca parar, meu amor. Você continua fazendo o seu melhor todos os dias (e isso me enche de orgulho, minha princesa)." },
    { icon: "🔓", texto: "Amo a forma que você me conhece, meu amorzinho." },
    { icon: "🔓",texto: "Eu amo te conhecer tão bem, minha princesa (nossa, eu amo muuuuuuuuuito isso). Eu amo saber como você se sente só pela forma que você fala cmg, amo entender quando vc me olha com os olhos de “para”, amo saber que não posso te deixar com fome e esses vários pequenos detalhezinhos." },
    { icon: "🔓", texto: "Eu amo amar você, minha pequenininha. Amo ter certeza absoluta que você é a mulher da minha vida, Lorena Asafe Fernandes Costa." },
    { icon: "🔓", texto:  "Minha princesinha, sei que você não estava tão animada pro dia mais incrível do ano, mas jamais vou deixar de te celebrar, meu amorzinho (fico um milhão de vezes mais animada pro seu aniversário, amor). Espero que você tenha aproveitado muito o seu dia, minha pequena. Mal posso esperar para os próximos milhares de dias mais incríveis do ano ao seu lado (no sentido físico tbm, pq daria tudo pra tá do seu ladinho agora)." },
  ];
  // ────────────────────────────────────────────────────────────
 
  function pad(n) { return String(n).padStart(2, '0'); }
 
  function getHoraDesbloqueada() {
    return new Date().getHours();
  }
 
  function renderGrid() {
    const grid = document.getElementById('grid');
    const horaAtual = getHoraDesbloqueada();
    grid.innerHTML = '';
    MENSAGENS.forEach((msg, h) => {
      const unlocked = h <= horaAtual;
      const card = document.createElement('div');
      card.className = `card ${unlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <span class="card-hour">${pad(h)}:00</span>
        <span class="card-icon">${unlocked ? msg.icon : '🔒'}</span>
        <span class="card-status">${unlocked ? 'toque para ler' : 'bloqueado'}</span>
      `;
      if (unlocked) card.addEventListener('click', () => openModal(h));
      grid.appendChild(card);
    });
  }
 
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const dias  = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
    const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
    document.getElementById('date-label').textContent =
      `${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]}`;
    const proxH = now.getHours() + 1;
    document.getElementById('next-unlock').textContent = proxH < 24
      ? `próxima mensagem em ${60 - now.getMinutes()} min — às ${pad(proxH)}:00`
      : ' todas as mensagens desbloqueadas ';
  }
 
  function openModal(h) {
    const msg = MENSAGENS[h];
    document.getElementById('modal-hour').textContent    = `mensagem das ${pad(h)}:00`;
    document.getElementById('modal-message').textContent = msg.texto;
    document.getElementById('modal').classList.add('open');
  }
 
  function closeModal(e) {
    if (!e || e.target === document.getElementById('modal'))
      document.getElementById('modal').classList.remove('open');
  }
 
  updateClock();
  renderGrid();
  setInterval(() => { updateClock(); renderGrid(); }, 30000);
  //-------------------------------------------------------

  // Elementos decorativos do fundo
const elementosFundo = [
    { src: 'ursinho.png',        tamanho: 70  },
    { src: 'coroa.png',       tamanho: 80  },
    { src: 'bolo.png',        tamanho: 90  },
    { src: 'luck.png',     tamanho: 80  },
    { src: 'juntas.png',    tamanho: 60  },
    { src: 'estrela amarela.png', tamanho: 50  },
    { src: 'pequena.png',    tamanho: 120  },
    { src: 'star golden.png',  tamanho: 60  },
    { src: 'star prata.png',   tamanho: 90 },
    { src: 'rosa.png',     tamanho: 55  },
];

// Quantas vezes cada elemento aparece
const repeticoes = 3;

const posicoes = [
    { left: 2,  top: 5  },
    { left: 75, top: 1  },
    { left: 15, top: 25 },
    { left: 65, top: 27 },
    { left: 40, top: 3  },
    { left: 20, top: 50 },
    { left: 2,  top: 30 },
    { left: 70, top: 40 },
    { left: 25, top: 50 },
    { left: 70, top: 48 },
    { left: 80, top: 19 },
    { left: 10, top: 65},
];

elementosFundo.forEach((el, index) => {
    const img = document.createElement('img');
    img.src = el.src;
    const pos = posicoes[index];
    img.style.cssText = `
        position: absolute;
        left: ${pos.left}%;
        top: ${pos.top}%;
        width: ${el.tamanho}px;
        opacity: 0.9;
        transform: rotate(${Math.random() * 40 - 20}deg);
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(img);
});