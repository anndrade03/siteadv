/* GOMES DE OLIVEIRA, MUSTAFÁ ADVOCACIA — SCRIPT.JS — JOTA SOLUTIONS */
'use strict';

/* ── Imagens ── */
const IMGS = {
  fachada1: 'img/fachada-escritorio-advocacia-marilia.webp',
  fachada2: 'img/fachada-gomes-de-oliveira-mustafa.webp',
  levi_jr: 'img/dr-levi-gomes-de-oliveira-junior.webp',
  levi: 'img/dr-levi-gomes-de-oliveira.webp',
  ricardo: 'img/dr-ricardo-sevilha-mustafa.webp',
  lucas: 'img/dr-lucas-lula-de-alencar-lima.webp',
  victoria: 'img/victoria-cristina-da-silva.webp',
  logo: 'img/logo-gomes-de-oliveira-mustafa.webp',
  valdeci: 'img/dr-valdaci-fogaca-de-oliveira.webp',
  sala: 'img/sala-de-reunioes.webp'
};


/* ══════════════════════════════════════════
   DADOS — MEMBROS DA EQUIPE
══════════════════════════════════════════ */
const MEMBERS = [
  {
    key:'levi_jr', name:'Dr. Levi Gomes de Oliveira Junior',
    short:'Dr. Levi Jr.', role:'Advogado — Sócio Fundador', oab:'OAB/SP 421.870',
    bio:'Advogado atuante há mais de 20 anos no mercado, formado pela Fundação Eurípedes Soares da Rocha. Especialista em Direito de Família e Sucessões, com foco em inventário, partilha de bens, divórcios, planejamento sucessório, testamentos, alimentos e guarda.',
    specs:['Direito Civil','Direito de Família','Inventários e Sucessões','Planejamento Sucessório'],
    exp:'Formado pela Fundação Eurípedes Soares da Rocha (UNIVEM). Especialização em Direito de Família e Sucessões pela FADISP.',
  },
  {
    key:'levi', name:'Dr. Levi Gomes de Oliveira',
    short:'Dr. Levi Gomes', role:'Advogado — Sócio Fundador / CCO', oab:'OAB/SP 472.907',
    bio:'Economista formado pela Associação de Ensino de Marília e Advogado formado pela Fundação Eurípedes Soares da Rocha. Especialista em Direito Bancário, com foco em recuperação de créditos, gestão e administração pública e compliance financeiro.',
    specs:['Direito Bancário','Recuperação de Créditos','Compliance Financeiro','Gestão Pública'],
    exp:'Formado em Economia (UNIMAR) e Direito (UNIVEM). Cursos em análise de balanço, previdência privada e mercado de capitais nas mais renomadas instituições do país.',
  },
  {
    key:'ricardo', name:'Dr. Ricardo Sevilha Mustafá',
    short:'Dr. Ricardo Mustafá', role:'Advogado — Sócio', oab:'OAB/SP 390.892',
    bio:'Advogado formado pela Fundação Eurípedes Soares da Rocha, atuando em Direito Empresarial com foco em societário, compliance, governança corporativa, recuperação judicial e extrajudicial, direito agrário e ambiental.',
    specs:['Direito Empresarial','Direito Ambiental','Governança Corporativa','Direito Agrário'],
    exp:'Mestre pelo UNIVEM em Direito Ambiental. Especialização Lato Sensu em Direito Ambiental pela PUC-SP.',
  },
  {
    key:'valdeci', name:'Dr. Valdaci Fogaça de Oliveira',
    short:'Dr. Valdaci Fogaça', role:'Advogado — Sócio', oab:'OAB/SP 388.267',
    bio:'Advogado formado pela Fundação Eurípedes Soares da Rocha, com atuação voltada ao Direito do Trabalho e Direito Previdenciário. Especialista na prática e condução de demandas trabalhistas e previdenciárias, com foco no Regime Geral de Previdência Social (RGPS).',
    specs:['Direito Trabalhista','Direito Previdenciário','RGPS','Demandas Trabalhistas'],
    exp:'Formado pela Fundação Eurípedes Soares da Rocha (UNIVEM). Especialização em Direito Previdenciário pela Faculdade Damásio.',
  },
  {
    key:'lucas', name:'Dr. Lucas Lula de Alencar Lima',
    short:'Dr. Lucas Alencar', role:'Advogado — Sócio', oab:'OAB/SP (a confirmar)',
    bio:'Advogado formado pela Fundação Eurípedes Soares da Rocha (UNIVEM), atuando em Direito Empresarial, Civil e Processo Civil, com foco em contratos, contencioso cível, Direito Digital, propriedade intelectual e industrial nacional e internacional.',
    specs:['Direito Civil','Direito Empresarial','Propriedade Intelectual','Direito Digital'],
    exp:'Formado pela Fundação Eurípedes Soares da Rocha (UNIVEM). Especialista em propriedade intelectual, marcas, patentes, softwares e contratos de tecnologia.',
  },
  {
    key:'victoria', name:'Victória Cristina da Silva',
    short:'Victória', role:'Secretária', oab:'',
    bio:'Responsável pelo atendimento ao cliente e pela organização administrativa do escritório Gomes de Oliveira, Mustafá Advocacia, garantindo agilidade, cordialidade e eficiência em cada contato.',
    specs:['Atendimento ao Cliente','Organização Administrativa','Recepção','Suporte Jurídico'],
    exp:'',
  },
];

/* ══════════════════════════════════════════
   DADOS — ÁREAS DE ATUAÇÃO
══════════════════════════════════════════ */
const AREAS = [
  { icon:'<i class="fa-solid fa-file-contract"></i>', name:'Direito Civil',
    lead:'Assessoria e representação em todas as frentes do Direito Civil, garantindo a defesa dos seus direitos com estratégia e eficiência.',
    services:['Contratos em geral','Cobranças judiciais','Danos materiais e morais','Obrigações de fazer ou não fazer','Direitos da personalidade','Usucapião','Ação de indenização','Tutelas de urgência'] },
  { icon:'<i class="fa-solid fa-briefcase"></i>', name:'Direito Trabalhista',
    lead:'Representamos empregados e empregadores em todas as fases do processo trabalhista, buscando a solução mais eficiente e estratégica.',
    services:['Relações de emprego e trabalho','Demissões e rescisões','Horas extras e férias','Acidente de trabalho','Compliance e organização interna','Cálculos trabalhistas','Seguro-desemprego','Prestação de serviços'] },
  { icon:'<i class="fa-solid fa-building-columns"></i>', name:'Direito Empresarial',
    lead:'Assessoria jurídica completa para empresas de todos os portes, da constituição societária à recuperação judicial.',
    services:['Direito societário','Governança corporativa e compliance','Fusões e aquisições (M&A)','Sucessão empresarial','Recuperação judicial e extrajudicial','Falências','Contratos empresariais','Planejamento patrimonial'] },
  { icon:'<i class="fa-solid fa-heart-pulse"></i>', name:'Direito do Consumidor',
    lead:'Defendemos consumidores lesados e orientamos empresas sobre adequação às regras consumeristas.',
    services:['Relações de consumo','Ações contra bancos e planos de saúde','Plataformas online e e-commerces','Produtos e serviços defeituosos','Contratos abusivos','Negativação indevida','Adequação consumerista','Danos morais e materiais'] },
  { icon:'<i class="fa-solid fa-people-roof"></i>', name:'Família e Sucessões',
    lead:'Assessoria humanizada e estratégica em questões familiares e sucessórias, priorizando o bem-estar de todos os envolvidos.',
    services:['Divórcios e regime de casamento','Alimentos e revisional de pensão','Guarda de filhos','Inventários e testamentos','Holdings familiares','Transferências de propriedade','Planejamento sucessório','União estável'] },
  { icon:'<i class="fa-solid fa-landmark"></i>', name:'Direito Previdenciário',
    lead:'Orientamos e representamos nossos clientes na conquista e revisão de benefícios previdenciários a que têm direito.',
    services:['Aposentadorias','Benefício por incapacidade','Auxílio-doença','Auxílio-desemprego','Pensão por morte','BPC/LOAS','Revisão de benefícios','RGPS'] },
  { icon:'<i class="fa-solid fa-tree"></i>', name:'Direito Imobiliário',
    lead:'Atuação completa em transações imobiliárias, regularização de imóveis e conflitos possessórios.',
    services:['Compra e venda de imóveis','Contratos de aluguel','Usucapião','Direito condominial','Transferência de propriedade','Direito ambiental imobiliário','Direito registral e cartorário','Regularização fundiária'] },
  { icon:'<i class="fa-solid fa-lightbulb"></i>', name:'Propriedade Intelectual',
    lead:'Proteção completa da sua propriedade intelectual e industrial, desde o registro até a defesa em disputas nacionais e internacionais.',
    services:['Registro e oposição de marcas','Depósitos e buscas de patentes','Registro de softwares','Registro de desenhos industriais','Contratos de franquia','Licenciamento de marca','Transferência de tecnologia','Acordos de confidencialidade (NDAs)'] },
  { icon:'<i class="fa-solid fa-tractor"></i>', name:'Direito Agrário',
    lead:'Assessoria jurídica especializada em questões agrárias, desde contratos rurais até o planejamento patrimonial e defesa da propriedade rural.',
    services:['Contratos agrários','Financiamento e crédito rural','Planejamento patrimonial rural','Sucessão rural','Defesa da propriedade rural','Contencioso agrário','Regularização fundiária rural','Direito ambiental agrário'] },
];

/* ══════════════════════════════════════════
   INJEÇÃO DE IMAGENS
══════════════════════════════════════════ */
function injectImages() {
  // Logos
  document.querySelectorAll('.logo-img').forEach(el => { if (IMGS.logo) el.src = IMGS.logo; });
  // Hero fachada (agora via data-img="fachada2" — injetado automaticamente abaixo)
  // Sobre sala
  const as = document.getElementById('aboutSala');
  if (as && IMGS.sala) as.src = IMGS.sala;
  // Escritório fachada
  const ef = document.getElementById('escritorioFachada');
  if (ef) ef.src = IMGS.fachada1;
  // Galeria
  const gf = document.getElementById('galFachada');
  if (gf) gf.src = IMGS.fachada2;
  const gs = document.getElementById('galSala');
  if (gs && IMGS.sala) gs.src = IMGS.sala;
  // data-img genéricos
  document.querySelectorAll('[data-img]').forEach(el => {
    const k = el.dataset.img;
    if (IMGS[k]) el.src = IMGS[k];
  });
}

/* ══════════════════════════════════════════
   GRID FIXO DE PROFISSIONAIS (home)
══════════════════════════════════════════ */
function buildHomeGrid() {
  const grid = document.getElementById('homeTeamGrid');
  if (!grid) return;
  grid.innerHTML = '';
  MEMBERS.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'prof-card';
    card.innerHTML = `
      <div class="prof-card-img">
        <img src="${IMGS[m.key] || ''}" alt="${m.name} — ${m.role}" width="600" height="900" loading="lazy"/>
      </div>
      <div class="prof-card-body">
        <div class="prof-card-name">${m.name}</div>
        <span class="prof-card-role">${m.role}</span>
        ${m.oab ? `<div class="prof-card-oab">${m.oab}</div>` : ''}
        <div class="prof-card-cta">Ver perfil <i class="fa-solid fa-arrow-right"></i></div>
      </div>`;
    card.addEventListener('click', () => goMember(i));
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════
   BUILD PÁGINAS DINÂMICAS
══════════════════════════════════════════ */
function buildTeamPage() {
  const grid = document.getElementById('teamPageGrid');
  if (!grid || grid.children.length > 0) return;
  MEMBERS.forEach((m, i) => {
    const del = i * 0.07;
    const card = document.createElement('article');
    card.className = 'mcard rv';
    card.style.transitionDelay = del + 's';
    card.innerHTML = `
      <div class="mcard-img"><img src="${IMGS[m.key] || ''}" alt="${m.name} — ${m.role}" width="600" height="900" loading="lazy"/></div>
      <div class="mcard-body">
        <h3 class="mcard-name">${m.name}</h3>
        <span class="mcard-role">${m.role}</span>
        ${m.oab ? `<div class="mcard-oab">${m.oab}</div>` : ''}
        <div class="mcard-cta">Ver perfil completo <i class="fa-solid fa-arrow-right"></i></div>
      </div>`;
    card.addEventListener('click', () => goMember(i));
    grid.appendChild(card);
  });
}

function buildAreasPage() {
  const grid = document.getElementById('areasGrid');
  if (!grid || grid.children.length > 0) return;
  AREAS.forEach((a, i) => {
    const del = (i % 4) * 0.07;
    const card = document.createElement('div');
    card.className = 'acard rv';
    card.style.transitionDelay = del + 's';
    card.innerHTML = `
      <div class="acard-glow"></div>
      <div class="acard-ico">${a.icon}</div>
      <h3>${a.name}</h3>
      <p>${a.lead.slice(0, 120)}...</p>
      <div class="acard-link">Saiba mais <i class="fa-solid fa-arrow-right"></i></div>`;
    card.addEventListener('click', () => goArea(i));
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════
   ROTEADOR SPA
══════════════════════════════════════════ */
let cur = 'home';
const cover = document.getElementById('cover');

function go(pageId) {
  if (pageId === cur) { closeMobileMenu(); return; }
  closeMobileMenu();

  document.querySelectorAll('.nbtn').forEach(b => b.classList.toggle('active', b.dataset.p === pageId));

  cover.style.transition = 'transform .38s cubic-bezier(.7,0,.3,1)';
  cover.style.transformOrigin = 'bottom';
  cover.classList.add('on');

  setTimeout(() => {
    const prev = document.getElementById('p-' + cur);
    if (prev) { prev.classList.remove('active'); prev.style.display = 'none'; }
    cur = pageId;
    document.body.dataset.page = pageId; // usado no CSS (ex.: esconder mapa do rodapé na aba Contato)

    // Build pages on demand
    if (pageId === 'equipe')     buildTeamPage();
    if (pageId === 'areas')      buildAreasPage();

    const next = document.getElementById('p-' + pageId);
    if (next) {
      next.style.display = 'block';
      next.style.opacity = '0';
      next.style.transform = 'translateY(14px)';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        next.classList.add('active');
        next.style.opacity = '1';
        next.style.transform = 'none';
      }));
    }

    window.scrollTo(0, 0);
    cover.classList.remove('on');
    cover.style.transformOrigin = 'top';
    cover.classList.add('off');
    setTimeout(() => {
      cover.classList.remove('off');
      initReveal();
      initCounters();
    }, 420);
  }, 380);
}

function goMember(idx) {
  const m = MEMBERS[idx];
  if (!m) return;

  document.getElementById('mdName').textContent = m.name;
  document.getElementById('mdRole').textContent = m.role;
  document.getElementById('mdOab').textContent  = m.oab || '';
  document.getElementById('mdBio').textContent  = m.bio;
  document.getElementById('mdExp').textContent  = m.exp;

  const photo = document.getElementById('mdPhoto');
  photo.innerHTML = '';
  const img = document.createElement('img');
  img.src = IMGS[m.key] || '';
  img.alt = m.name;
  photo.appendChild(img);

  const ul = document.getElementById('mdSpecs');
  ul.innerHTML = '';
  m.specs.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    ul.appendChild(li);
  });

  go('member');
}

function goArea(idx) {
  const a = AREAS[idx];
  if (!a) return;
  document.getElementById('adIcon').innerHTML   = a.icon;
  document.getElementById('adTitle').textContent = a.name;
  document.getElementById('adLead').textContent  = a.lead;

  const g = document.getElementById('adServices');
  g.innerHTML = '';
  a.services.forEach(s => {
    const d = document.createElement('div');
    d.className = 'svc';
    d.innerHTML = `<i class="fa-solid fa-check"></i>${s}`;
    g.appendChild(d);
  });
  go('area-detail');
}

/* ══════════════════════════════════════════
   HEADER SCROLL
══════════════════════════════════════════ */
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ══════════════════════════════════════════
   MENU MOBILE
══════════════════════════════════════════ */
const ham  = document.getElementById('ham');
const mnav = document.getElementById('mnav');

function closeMobileMenu() {
  ham.classList.remove('open');
  mnav.classList.remove('open');
  document.body.style.overflow = '';
}

ham.addEventListener('click', () => {
  const open = ham.classList.toggle('open');
  mnav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });

/* ══════════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════════ */
function initReveal() {
  const selectors = '.rv:not(.in), .rv-left:not(.in), .rv-right:not(.in)';
  const page = document.getElementById('p-' + cur);
  if (!page) return;
  const els = page.querySelectorAll(selectors);
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   CONTADORES ANIMADOS
══════════════════════════════════════════ */
let cntDone = false;
function initCounters() {
  if (cur !== 'home' || cntDone) return;
  const stats = document.querySelector('#p-home .hero-stats');
  if (!stats) return;
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    cntDone = true;
    document.querySelectorAll('#p-home .cnt').forEach(el => {
      const target = +el.dataset.t, dur = 1800, t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target).toLocaleString('pt-BR');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('pt-BR');
      };
      requestAnimationFrame(tick);
    });
    obs.disconnect();
  }, { threshold: .5 });
  obs.observe(stats);
}

/* ══════════════════════════════════════════
   MÁSCARA TELEFONE
══════════════════════════════════════════ */
const telEl = document.getElementById('tel');
if (telEl) {
  telEl.addEventListener('input', () => {
    let v = telEl.value.replace(/\D/g, '').slice(0, 11);
    if (v.length <= 10) v = v.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
    else                v = v.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
    telEl.value = v;
  });
}

/* ══════════════════════════════════════════
   FORMULÁRIO DE CONTATO → GOOGLE SHEETS
   Cole abaixo a URL do App da Web gerada no Apps Script
   (termina em /exec). Veja o arquivo apps-script.gs.
══════════════════════════════════════════ */
const SHEETS_URL = 'COLE_AQUI_A_URL_DO_APPS_SCRIPT';
const WA_LINK = 'https://wa.me/551434344268?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

function san(s) { return String(s).replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim().slice(0, 2000); }
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e); }

/* Origem do lead: guarda UTMs e de onde a pessoa veio na primeira visita */
const LEAD_ORIGEM = (() => {
  const p = new URLSearchParams(location.search);
  const utm = ['utm_source','utm_medium','utm_campaign'].map(k => p.get(k)).filter(Boolean).join(' / ');
  const ref = document.referrer && !document.referrer.includes(location.hostname) ? document.referrer : '';
  return utm || ref || 'Acesso direto';
})();

function showFeedback(type, html) {
  const ffb = document.getElementById('ffb');
  ffb.style.display = 'block';
  ffb.className = 'ffb ' + type;
  ffb.innerHTML = html;
}

const cform = document.getElementById('contactForm');
if (cform) {
  let enviando = false;
  cform.addEventListener('submit', async e => {
    e.preventDefault();
    if (enviando) return;

    const nome         = san(cform.nome.value);
    const email        = san(cform.email.value);
    const telefone     = san(cform.telefone.value || '');
    const profissional = san(cform.profissional?.value || '');
    const area         = san(cform.area?.value || '');
    const msg          = san(cform.mensagem.value);
    let ok = true;

    ['nome','email','msg'].forEach(id => {
      const er = document.getElementById('e-' + id);
      if (er) er.textContent = '';
      const fc = cform.querySelector('#' + id);
      if (fc) fc.classList.remove('err');
    });

    if (nome.length < 2) { document.getElementById('e-nome').textContent = 'Informe seu nome completo.'; cform.nome.classList.add('err'); ok = false; }
    if (!validEmail(email)) { document.getElementById('e-email').textContent = 'Confira o e-mail: ex. nome@email.com'; cform.email.classList.add('err'); ok = false; }
    if (msg.length < 10) { document.getElementById('e-msg').textContent = 'Descreva sua situação em poucas palavras.'; document.getElementById('msg').classList.add('err'); ok = false; }
    if (!ok) { cform.querySelector('.err')?.focus(); return; }

    // Robô preencheu o campo-armadilha: finge sucesso e não envia
    if (cform.website && cform.website.value) { showFeedback('ok', '✓ Mensagem enviada!'); cform.reset(); return; }

    if (!SHEETS_URL.startsWith('https://script.google.com/')) {
      showFeedback('fail', 'O formulário ainda não está configurado. Fale conosco pelo <a href="' + WA_LINK + '" target="_blank" rel="noopener">WhatsApp</a>.');
      return;
    }

    const sbtn = document.getElementById('sbtn'), stxt = document.getElementById('stxt');
    enviando = true; sbtn.disabled = true; stxt.textContent = 'Enviando...';

    try {
      const payload = new URLSearchParams({
        nome, email, telefone, profissional, area, mensagem: msg,
        origem: LEAD_ORIGEM, pagina: location.href
      });
      // no-cors: o Google não devolve a resposta ao navegador, mas grava na planilha
      await fetch(SHEETS_URL, { method: 'POST', body: payload, mode: 'no-cors' });
      showFeedback('ok', '✓ Mensagem enviada! Retornaremos em até 24 horas úteis. Se preferir, fale agora pelo <a href="' + WA_LINK + '" target="_blank" rel="noopener">WhatsApp</a>.');
      cform.reset();
      // Evento de conversão (Google Ads / GA4 / Tag Manager, se instalados)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_formulario', area: area || 'Não informada' });
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { form: 'contato', area });
    } catch {
      showFeedback('fail', '✗ Não foi possível enviar agora. Tente pelo <a href="' + WA_LINK + '" target="_blank" rel="noopener">WhatsApp</a> ou pelo telefone (14) 3434-4268.');
    } finally {
      enviando = false; sbtn.disabled = false; stxt.textContent = 'Enviar Mensagem';
    }
  });
}

/* ══════════════════════════════════════════
   ANO DINÂMICO
══════════════════════════════════════════ */
document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());



/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  injectImages();
  buildHomeGrid();
  setTimeout(() => { initReveal(); initCounters(); }, 250);
});
