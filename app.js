(function(){
"use strict";
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

const I18N={
ru:{
title:"Манифест GNU/Linux",
skip:"[ Esc ] пропустить",
nav_manifest:"манифест",nav_why:"принципы",nav_compare:"сравнение",nav_distro:"дистрибутив",nav_shell:"терминал",
hero_h:'GNU/Linux — право <span class="g">владеть машиной</span>.',
hero_lead:"Манифест свободного пользователя. Система, которую можно читать, менять и передавать — без EULA на 40 страниц и без телеметрии по умолчанию.",
chip1:"<b>0 ₽</b> лицензия",chip2:"<b>4</b> свободы ПО",chip3:"<b>0</b> телеметрии по умолчанию",
nf_license:"GPL и друзья",nf_owner:"ты",
s01:"01 · преамбула",manifest_h:"Мы заявляем",
manifest_p1:"Компьютер — инструмент. Он должен служить человеку, а не корпорации, которая решает, когда тебе обновляться и какие данные собирать.",
manifest_p2:"«Linux» — это ядро. Полная система — <b>GNU/Linux</b>: ядро плюс userland проекта GNU. Этот манифест фиксирует принципы и факты. Решение — за тобой.",
s02:"02 · GNU",gnu_h:"Четыре свободы",
gnu_lead:"В 1983 Ричард Столлман объявил проект GNU — полностью свободную Unix-совместимую систему. Ядро Linux (1991) сделало эту систему завершённой.",
f0:"Запускать",f0d:"Использовать программу с любой целью",
f1:"Изучать",f1d:"Читать код и менять под свои нужды",
f2:"Распространять",f2d:"Делиться копиями с кем угодно",
f3:"Улучшать",f3d:"Публиковать изменения на благо всех",
s03:"03 · принципы",why_h:"Пять опор",
p1t:"Свобода кода",p1d:"Исходный код ядра и утилит открыт. Ты можешь читать, исправлять и распространять. GPL защищает это право.",
p2t:"Приватность по умолчанию",p2d:"В типичном дистрибутиве нет встроенной телеметрии. Если что-то собирает данные — это явный выбор пользователя.",
p3t:"Полный контроль",p3d:"Процессы, файлы, сервисы — под управлением. Обновления ставятся когда удобно тебе, а не когда решил сервер.",
p4t:"Экономия ресурсов",p4d:"Минимальная установка — единицы гигабайт. Лёгкий рабочий стол — сотни мегабайт ОЗУ. Старое железо снова работает.",
p5t:"Сообщество",p5d:"Документация, форумы, issue-трекеры. Вопрос часто уже решён годы назад. Культура делиться знаниями.",
s04:"04 · сравнение",cmp_h:"Другие приоритеты",
cmp_lead:"Цифры ориентировочные. Важен порядок величин и модель поведения системы.",
th_c:"Критерий",th_l:"GNU/Linux",th_w:"Windows 11",
r1c:"Стоимость ОС",r1l:"0 ₽ (дистрибутив)",r1w:"лицензия / OEM",
r2c:"ОЗУ после входа",r2l:"~300–900 МБ",r2w:"~3–5 ГБ",
r3c:"Место на диске",r3l:"~5–15 ГБ база",r3w:"~40–70 ГБ+",
r4c:"Обновления",r4l:"когда решаешь ты",r4w:"часто принудительные",
r5c:"Телеметрия",r5l:"нет / отключаема",r5w:"включена по умолчанию",
r6c:"Исходный код",r6l:"открыт",r6w:"закрытый",
s05:"05 · контекст",facts_h:"Где уже норма",
fact1:"суперкомпьютеров TOP500",fact2:"серверов публичного интернета",
fact3:"ядро Linux на миллиардах устройств",fact4v:"космос",fact4:"марсоходы, МКС, спутники",
s06:"06 · старт",distro_h:"Подбор дистрибутива",
distro_lead:"Три вопроса. Результат — отправная точка: официальный сайт и краткое обоснование.",
s07:"07 · практика",shell_h:"Терминал (симуляция)",
shell_lead:"Команды отвечают по смыслу. Это не настоящий shell — но достаточно, чтобы почувствовать тон.",
foot_h:"Владей машиной.<br>Не арендуй её.",foot_cta:"подобрать дистрибутив",foot_meta:"Без трекеров",
q_label:"вопрос",result:"результат:",again:"пройти снова",matching:"сопоставление…",
q1:"Какой опыт с Linux?",q1a1:"Только Windows / macOS",q1a2:"Уже пробовал",q1a3:"Комфортно в терминале",q1a4:"Хочу собирать сам",
q2:"Что важнее?",q2a1:"Чтобы «просто работало»",q2a2:"Свежие пакеты",q2a3:"Максимальный контроль",q2a4:"Красивый UI",
q3:"Готовность читать документацию?",q3a1:"Минимум — хочу GUI",q3a2:"Нормально, по делу",q3a3:"Wiki и man — часть процесса",
site:"официальный сайт →",
welcome:"Сессия открыта. Введи help или gnu.",
hint:"Подсказки ниже — или любая команда из списка.",
phrases:["sudo apt install свобода","chmod +x жизнь","systemctl enable ясность","echo 'привет, GNU'"],
cat_manifest:"Владей машиной.\nЧитай код.\nЧетыре свободы.\nОбновляйся когда нужно тебе.",
not_found:"команда не найдена. введи help",
no_file:"нет такого файла"
},
en:{
title:"GNU/Linux Manifest",
skip:"[ Esc ] skip",
nav_manifest:"manifesto",nav_why:"principles",nav_compare:"compare",nav_distro:"distro",nav_shell:"terminal",
hero_h:'GNU/Linux — the right to <span class="g">own your machine</span>.',
hero_lead:"A manifesto for the free user. An OS you can read, change, and share — without a 40-page EULA and without telemetry by default.",
chip1:"<b>$0</b> OS license",chip2:"<b>4</b> software freedoms",chip3:"<b>0</b> telemetry by default",
nf_license:"GPL & friends",nf_owner:"you",
s01:"01 · preamble",manifest_h:"We state",
manifest_p1:"A computer is a tool. It should serve the human, not a corporation that decides when you update and what data to collect.",
manifest_p2:"“Linux” is the kernel. The full system is <b>GNU/Linux</b>: kernel plus GNU userland. This manifesto records principles and facts. The choice is yours.",
s02:"02 · GNU",gnu_h:"Four freedoms",
gnu_lead:"In 1983 Richard Stallman announced the GNU project — a fully free Unix-compatible system. The Linux kernel (1991) completed that stack.",
f0:"Run",f0d:"Use the program for any purpose",
f1:"Study",f1d:"Read the code and change it for your needs",
f2:"Share",f2d:"Redistribute copies to anyone",
f3:"Improve",f3d:"Publish your changes for everyone’s benefit",
s03:"03 · principles",why_h:"Five pillars",
p1t:"Freedom of code",p1d:"Kernel and utilities source is open. You can read, fix, and redistribute. GPL protects that right.",
p2t:"Privacy by default",p2d:"A typical distro has no built-in telemetry. If something collects data, it is an explicit user choice.",
p3t:"Full control",p3d:"Processes, files, services — under your control. Updates when it suits you, not when a server decides.",
p4t:"Resource efficiency",p4d:"A minimal install is a few gigabytes. A light desktop uses hundreds of MB of RAM. Old hardware works again.",
p5t:"Community",p5d:"Docs, forums, issue trackers. Your question was often answered years ago. A culture of sharing knowledge.",
s04:"04 · comparison",cmp_h:"Different priorities",
cmp_lead:"Numbers are approximate. What matters is the order of magnitude and the system’s behaviour model.",
th_c:"Criterion",th_l:"GNU/Linux",th_w:"Windows 11",
r1c:"OS cost",r1l:"$0 (distro)",r1w:"license / OEM",
r2c:"RAM after login",r2l:"~300–900 MB",r2w:"~3–5 GB",
r3c:"Disk space",r3l:"~5–15 GB base",r3w:"~40–70 GB+",
r4c:"Updates",r4l:"when you decide",r4w:"often forced",
r5c:"Telemetry",r5l:"none / opt-out",r5w:"on by default",
r6c:"Source code",r6l:"open",r6w:"closed",
s05:"05 · context",facts_h:"Where it is already the norm",
fact1:"of TOP500 supercomputers",fact2:"of public internet servers",
fact3:"Linux kernel on billions of devices",fact4v:"space",fact4:"rovers, ISS, satellites",
s06:"06 · start",distro_h:"Distro picker",
distro_lead:"Three questions. Result is a starting point: official site and a short rationale.",
s07:"07 · practice",shell_h:"Terminal (simulation)",
shell_lead:"Commands answer in spirit. Not a real shell — enough to feel the tone.",
foot_h:"Own the machine.<br>Don’t rent it.",foot_cta:"pick a distro",foot_meta:"No trackers",
q_label:"question",result:"result:",again:"try again",matching:"matching…",
q1:"Experience with Linux?",q1a1:"Windows / macOS only",q1a2:"Tried it before",q1a3:"Comfortable in a terminal",q1a4:"I want to build it myself",
q2:"What matters most?",q2a1:"Just works",q2a2:"Fresh packages",q2a3:"Maximum control",q2a4:"Polished UI",
q3:"Willing to read docs?",q3a1:"Minimal — I want a GUI",q3a2:"Fine, when needed",q3a3:"Wiki and man are part of the process",
site:"official site →",
welcome:"Session open. Type help or gnu.",
hint:"Hints below — or any command from the list.",
phrases:["sudo apt install freedom","chmod +x life","systemctl enable clarity","echo 'hello, GNU'"],
cat_manifest:"Own the machine.\nRead the code.\nFour freedoms.\nUpdate when you need to.",
not_found:"command not found. try help",
no_file:"no such file"
}
};

let lang=localStorage.getItem("manifest-lang")||((navigator.language||"").startsWith("en")?"en":"ru");
if(lang!=="ru"&&lang!=="en")lang="ru";
const t=k=>(I18N[lang]&&I18N[lang][k]!=null)?I18N[lang][k]:(I18N.ru[k]!=null?I18N.ru[k]:k);

function applyLang(){
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    const val=t(key);
    if(el.tagName==="TITLE"){document.title=val;return}
    el.textContent=val;
  });
  $$("[data-i18n-html]").forEach(el=>{
    el.innerHTML=t(el.getAttribute("data-i18n-html"));
  });
  $("#lang-ru")?.classList.toggle("active",lang==="ru");
  $("#lang-en")?.classList.toggle("active",lang==="en");
  localStorage.setItem("manifest-lang",lang);
  if(typeof window._restartPicker==="function") window._restartPicker();
}

$("#lang-ru")?.addEventListener("click",()=>{lang="ru";applyLang()});
$("#lang-en")?.addEventListener("click",()=>{lang="en";applyLang()});

const bootEl=$("#boot"),bootLog=$("#bootlog"),bootInput=$("#boot-input");
const timers=[];let phase="logs",login="";
const LOGS=[[160,'<span class="boot-dim">[  0.000] Linux 6.x SMP</span>'],[120,'<span class="boot-ok">[  OK  ]</span> Mounted /boot'],[100,'<span class="boot-ok">[  OK  ]</span> Network'],[110,'<span class="boot-warn">[ WARN ]</span> No telemetry modules'],[100,'<span class="boot-ok">[  OK  ]</span> Graphical Interface'],[80,'<span class="boot-dim">GNU/Linux tty1</span>']];
function line(h){const d=document.createElement("div");d.innerHTML=h;bootLog.appendChild(d);bootLog.scrollTop=bootLog.scrollHeight}
function runBoot(){bootLog.innerHTML="";phase="logs";let tmr=RM?0:150;LOGS.forEach(([ms,h])=>{tmr+=RM?0:ms;timers.push(setTimeout(()=>line(h),tmr))});timers.push(setTimeout(()=>{phase="login";line('<span style="color:#c8d4c8">login: </span><span id="mir"></span><span class="cursor"></span>');bootInput.value="";setTimeout(()=>bootInput.focus(),40)},tmr+300))}
function finish(){phase="done";[["Welcome, <b style=color:var(--a)>"+esc(login||"guest")+"</b>.",400],["startx",400]].forEach(([m,d],i)=>{timers.push(setTimeout(()=>line(m),RM?20:(i+1)*d))});timers.push(setTimeout(()=>{bootEl.classList.add("off");setTimeout(()=>{bootEl.classList.add("hidden");bootEl.classList.remove("off");document.body.style.overflow="";startUp()},RM?50:450)},RM?50:1200))}
function skip(){timers.forEach(clearTimeout);bootEl.classList.add("off");setTimeout(()=>{bootEl.classList.add("hidden");bootEl.classList.remove("off");document.body.style.overflow="";startUp()},RM?30:450)}
bootInput.addEventListener("input",()=>{const m=$("#mir");if(!m)return;m.textContent=phase==="password"?"•".repeat(bootInput.value.length):bootInput.value});
bootInput.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const v=bootInput.value.trim();if(phase==="login"){if(!v)return;login=v;const m=$("#mir");if(m){m.textContent=v;m.parentElement.querySelector(".cursor")?.remove()}phase="password";line('<span style="color:#c8d4c8">Password: </span><span id="mir"></span><span class="cursor"></span>');bootInput.value=""}else if(phase==="password"){const m=$("#mir");if(m){m.textContent="••••••";m.parentElement.querySelector(".cursor")?.remove()}finish()}});
$("#skip").onclick=skip;document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!bootEl.classList.contains("hidden"))skip();if(!bootEl.classList.contains("hidden"))bootInput.focus({preventScroll:true})});
function reboot(){scrollTo(0,0);bootEl.classList.remove("hidden","off");document.body.style.overflow="hidden";runBoot()}
$("#reboot").onclick=reboot;
let t0=null,iv=null;
function fmt(ms){const s=Math.floor(ms/1000);return String(Math.floor(s/3600)).padStart(2,"0")+":"+String(Math.floor(s%3600/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
function startUp(){t0=Date.now();if(iv)clearInterval(iv);iv=setInterval(()=>{$("#upt").textContent=fmt(Date.now()-t0)},1000)}
$$(".hero .wrap, .principle, .freedom, .fact, .card, .section-label, h2, .lead, .table-wrap").forEach(el=>{if(!el.classList.contains("rv"))el.classList.add("rv")});
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(el=>ro.observe(el));
(function(){const el=$("#typeline");if(!el)return;let pi=0,ci=0,del=false;function step(){const phrases=I18N[lang].phrases;const p=phrases[pi%phrases.length];el.textContent=p.slice(0,ci);if(!del){ci++;if(ci>p.length){del=true;return setTimeout(step,1600)}}else{ci--;if(ci<0){ci=0;del=false;pi++}}setTimeout(step,del?28:55)}if(!RM)step();else el.textContent=I18N[lang].phrases[0]})();
(function(){const items=["<b>sudo</b> apt update","pacman -Syu","dnf upgrade","chmod +x <b>freedom</b>","man gpl","echo four freedoms"];const h=items.map(x=>"<span>"+x+"</span>").join('<span style="color:#2a332c"> · </span>')+" · ";["tick1","tick2"].forEach(id=>{const e=document.getElementById(id);if(e)e.innerHTML=h+h})})();
const DISTROS={mint:{n:"Linux Mint",t:{ru:"Знакомый стол, минимум сюрпризов",en:"Familiar desktop, minimal surprises"},d:1,p:"APT",u:"https://linuxmint.com/",x:{ru:"Отличная точка входа после Windows.",en:"Great entry point after Windows."}},ubuntu:{n:"Ubuntu",t:{ru:"Самая задокументированная экосистема",en:"Most documented ecosystem"},d:2,p:"APT",u:"https://ubuntu.com/download",x:{ru:"LTS и огромная база знаний.",en:"LTS releases and a huge knowledge base."}},debian:{n:"Debian",t:{ru:"Стабильность как философия",en:"Stability as a philosophy"},d:2,p:"APT",u:"https://www.debian.org/",x:{ru:"Медленные предсказуемые релизы.",en:"Slow, predictable releases."}},fedora:{n:"Fedora",t:{ru:"Современный стек",en:"Modern stack"},d:3,p:"DNF",u:"https://fedoraproject.org/",x:{ru:"Близко к upstream.",en:"Close to upstream."}},pop:{n:"Pop!_OS",t:{ru:"Удобство и GPU",en:"Convenience and GPU"},d:2,p:"APT",u:"https://pop.system76.com/",x:{ru:"NVIDIA из коробки.",en:"NVIDIA out of the box."}},arch:{n:"Arch Linux",t:{ru:"Собрать осознанно",en:"Build deliberately"},d:5,p:"pacman",u:"https://archlinux.org/",x:{ru:"Rolling-release и wiki.",en:"Rolling-release and wiki."}},nixos:{n:"NixOS",t:{ru:"Система как код",en:"System as code"},d:4,p:"Nix",u:"https://nixos.org/",x:{ru:"Декларативный конфиг.",en:"Declarative config."}},zorin:{n:"Zorin OS",t:{ru:"Похоже на Windows/macOS",en:"Windows/macOS-like"},d:1,p:"APT",u:"https://zorin.com/os/",x:{ru:"Мягкий переход.",en:"Gentle transition."}}};
function getQS(){return[{t:t("q1"),a:[[t("q1a1"),{mint:3,zorin:3,ubuntu:2}],[t("q1a2"),{ubuntu:2,debian:2,mint:1,pop:1}],[t("q1a3"),{fedora:2,arch:2,debian:1}],[t("q1a4"),{arch:3,nixos:2}]]},{t:t("q2"),a:[[t("q2a1"),{mint:3,zorin:2,ubuntu:2}],[t("q2a2"),{fedora:3,arch:2}],[t("q2a3"),{arch:3,nixos:2,debian:1}],[t("q2a4"),{zorin:2,pop:2,mint:1}]]},{t:t("q3"),a:[[t("q3a1"),{mint:2,zorin:2,ubuntu:2}],[t("q3a2"),{fedora:2,debian:2,pop:1}],[t("q3a3"),{arch:3,nixos:2}]]}]}
let qi=0,sc={};const po=$("#picker-out"),pa=$("#picker-actions");
function pp(h){const d=document.createElement("div");d.innerHTML=h;po.appendChild(d);po.scrollTop=po.scrollHeight}
function ask(){const QS=getQS(),q=QS[qi];pp('<span class="picker-prompt">'+t("q_label")+' '+(qi+1)+'/3:</span> '+q.t);pa.innerHTML="";q.a.forEach(([l,p])=>{const b=document.createElement("button");b.type="button";b.textContent=l;b.onclick=()=>{pp('<span class="picker-sys">→ '+esc(l)+'</span>');Object.entries(p).forEach(([k,v])=>sc[k]=(sc[k]||0)+v);qi++;if(qi<QS.length)setTimeout(ask,RM?0:250);else setTimeout(res,RM?0:350)};pa.appendChild(b)})}
function res(){pp('<span class="picker-sys">'+t("matching")+'</span>');const best=Object.keys(sc).sort((a,b)=>sc[b]-sc[a])[0]||"mint";const d=DISTROS[best];setTimeout(()=>{pp('<span class="picker-prompt" style="color:var(--a)">'+t("result")+'</span>');const c=document.createElement("div");c.className="distro-result";c.innerHTML='<div class="name">'+d.n+'</div><div class="tagline">'+(d.t[lang]||d.t.ru)+'</div><div class="meta">'+'●'.repeat(d.d)+'○'.repeat(5-d.d)+' · '+d.p+'</div><p>'+(d.x[lang]||d.x.ru)+'</p><a href="'+d.u+'" target="_blank" rel="noopener">'+t("site")+'</a>';po.appendChild(c);pa.innerHTML="";const rb=document.createElement("button");rb.type="button";rb.textContent=t("again");rb.onclick=startP;pa.appendChild(rb)},RM?0:400)}
function startP(){qi=0;sc={};po.innerHTML="";pa.innerHTML="";pp('<span class="picker-sys"># choose-distro</span>');setTimeout(ask,RM?0:250)}
window._restartPicker=()=>{if(po&&po.children.length)startP()};
new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting))startP()},{threshold:.2}).observe($("#distro .card"));
const so=$("#shell-out"),si=$("#shell-input");
function sp(txt,c){const d=document.createElement("div");d.className="shell-line "+(c||"");d.textContent=txt;so.appendChild(d);so.scrollTop=so.scrollHeight}
function sh(h,c){const d=document.createElement("div");d.className="shell-line "+(c||"");d.innerHTML=h;so.appendChild(d);so.scrollTop=so.scrollHeight}
const CMDS={help(){sp("help whoami uname date ls neofetch gnu freedoms cat манифест free uptime clear exit","shell-ok")},whoami(){sp("guest")},uname(){sp("Linux 6.x GNU/Linux")},date(){sp(new Date().toLocaleString(lang==="ru"?"ru-RU":"en-US"))},ls(){sp("манифест.txt  gnu/  freedom/")},neofetch(){sp("OS: GNU/Linux\nKernel: 6.x\nOwner: "+t("nf_owner"),"shell-pre")},gnu(){sp("GNU 1983 (RMS). Linux 1991.\nFour freedoms: 0 run, 1 study, 2 share, 3 improve.","shell-ok")},freedoms(){sp("0 — run\n1 — study\n2 — share\n3 — improve","shell-ok")},free(){sp("Mem: ~400M")},uptime(){sp("up "+fmt(t0?Date.now()-t0:0))},clear(){so.innerHTML=""},exit(){sp("session closed","shell-dim");setTimeout(reboot,500)}};
function run(raw){const line=raw.trim();if(!line)return;sh('<span class="p">guest@gnu-linux:~$</span> '+esc(line),"shell-cmd");const p=line.split(/\s+/),c=p[0].toLowerCase(),r=p.slice(1);if(c==="cat"){if(/манифест|manifest/i.test(r.join(" ")))sp(t("cat_manifest"),"shell-ok");else sp(t("no_file"),"shell-err");return}if(CMDS[c]){CMDS[c]();return}sp(t("not_found"),"shell-err")}
si.addEventListener("keydown",e=>{if(e.key==="Enter"){run(si.value);si.value=""}});
$(".card",$("#shell"))?.addEventListener("click",()=>si.focus({preventScroll:true}));
["help","neofetch","gnu","freedoms","cat манифест","clear"].forEach(h=>{const b=document.createElement("button");b.type="button";b.textContent=h;b.onclick=()=>{si.focus();run(h)};$("#shell-hints").appendChild(b)});
sh('<span style="color:var(--a)">'+t("welcome")+'</span>');
sp(t("hint"),"shell-dim");
applyLang();
document.body.style.overflow="hidden";
runBoot();
})();
