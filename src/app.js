/* ===== SUPABASE CONFIG ===== */
const SUPABASE_URL = 'https://pleuufifeasjcsjhpgiv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_7iRVPbVHlyHie1tiJk-G_w_9NsiSw0n';

let supabase;
try { supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY); }
catch (e) { console.error('Supabase init failed:', e); }

/* ===== EXHIBITION DATA ===== */
const EXHIBITIONS_RAW = [
  {n:"香港嬰兒用品展",v:"香港會議展覽中心",o:"TDC",s:"2026-01-12",e:"2026-01-15",type:"trade"},
  {n:"香港玩具展",v:"香港會議展覽中心",o:"TDC",s:"2026-01-12",e:"2026-01-15",type:"trade"},
  {n:"香港國際文具及學習用品展",v:"香港會議展覽中心",o:"TDC",s:"2026-01-12",e:"2026-01-15",type:"trade"},
  {n:"年度品牌開倉節",v:"亞洲國際博覽館 Hall 5,7,9",o:"Exhibition Group",s:"2026-01-16",e:"2026-01-19",type:"retail"},
  {n:"教育及職業博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-01-22",e:"2026-01-25",type:"retail"},
  {n:"亞洲素食展2026",v:"香港會議展覽中心 Hall 1ABC",o:"BaoBao Tree",s:"2026-01-23",e:"2026-01-25",type:"retail"},
  {n:"香港寵物節2026",v:"香港會議展覽中心 Hall1",o:"Exhibition Group",s:"2026-01-29",e:"2026-02-01",type:"retail"},
  {n:"香港旅遊博覽會",v:"香港會議展覽中心 Hall 5BCD",o:"Exhibition Group",s:"2026-01-29",e:"2026-02-01",type:"retail"},
  {n:"2026 BB春季購物節暨兒童成長教育展",v:"會議展覽中心 Hall 1",o:"荷花集團",s:"2026-02-06",e:"2026-02-08",type:"retail"},
  {n:"第121屆香港結婚節暨2月婚紗展",v:"香港會議展覽中心 1號館",o:"HKAE",s:"2026-02-21",e:"2026-02-23",type:"retail"},
  {n:"香港國際鑽石、寶石及珍珠展",v:"亞洲國際博覽館",o:"TDC",s:"2026-03-02",e:"2026-03-06",type:"trade"},
  {n:"香港國際珠寶展",v:"香港會議展覽中心",o:"TDC",s:"2026-03-04",e:"2026-03-08",type:"trade"},
  {n:"香港國際影視展",v:"香港會議展覽中心",o:"TDC",s:"2026-03-17",e:"2026-03-20",type:"trade"},
  {n:"ComplexCon",v:"亞洲國際博覽館",o:"Complex Chinese",s:"2026-03-21",e:"2026-03-22",type:"retail"},
  {n:"第十一屆兒童書展暨超級親子用品展（3月）",v:"亞洲國際博覽館",o:"親子頭條",s:"2026-03-27",e:"2026-03-29",type:"retail"},
  {n:"香港國際試食節 暨 優質食品博覽 2026",v:"香港會議展覽中心 Hall 1ABCD",o:"Exhibition Group",s:"2026-04-03",e:"2026-04-07",type:"retail"},
  {n:"爵樂·品味 香港國際試食節 暨 優質食品博覽",v:"香港會議展覽中心 Hall 3BC",o:"Exhibition Group",s:"2026-04-03",e:"2026-04-06",type:"retail"},
  {n:"智識享退休 – 財富健康•優悠生活博覽",v:"香港會議展覽中心 Hall 3DE",o:"Exhibition Group",s:"2026-04-03",e:"2026-04-05",type:"retail"},
  {n:"香港春季電子產品展",v:"香港會議展覽中心",o:"TDC",s:"2026-04-13",e:"2026-04-16",type:"trade"},
  {n:"香港國際創科展",v:"香港會議展覽中心",o:"TDC",s:"2026-04-13",e:"2026-04-16",type:"trade"},
  {n:"香港國際春季燈飾展",v:"香港會議展覽中心",o:"TDC",s:"2026-04-20",e:"2026-04-23",type:"trade"},
  {n:"智慧照明博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-04-20",e:"2026-04-23",type:"retail"},
  {n:"香港時裝節",v:"香港會議展覽中心",o:"TDC",s:"2026-04-27",e:"2026-04-30",type:"trade"},
  {n:"香港時尚家品家紡展",v:"香港會議展覽中心",o:"TDC",s:"2026-04-27",e:"2026-04-30",type:"trade"},
  {n:"香港禮品及贈品展",v:"香港會議展覽中心",o:"TDC",s:"2026-04-27",e:"2026-04-30",type:"trade"},
  {n:"香港奢侈品包裝展",v:"亞洲國際博覽館",o:"TDC",s:"2026-04-27",e:"2026-04-30",type:"trade"},
  {n:"香港國際印刷及包裝展",v:"亞洲國際博覽館",o:"TDC",s:"2026-04-27",e:"2026-04-30",type:"trade"},
  {n:"香港國際醫療及保健展",v:"香港會議展覽中心",o:"TDC",s:"2026-05-11",e:"2026-05-13",type:"retail"},
  {n:"課外活動節 2026",v:"香港會議展覽中心 Hall 3BC",o:"Exhibition Group",s:"2026-05-15",e:"2026-05-17",type:"trade"},
  {n:"第十二屆兒童書展暨超級親子用品展（5月）",v:"亞洲國際博覽館",o:"親子頭條",s:"2026-05-23",e:"2026-05-25",type:"retail"},
  {n:"Comic Con",v:"香港會議展覽中心",o:"Exhibition Group",s:"2026-05-29",e:"2026-05-31",type:"retail"},
  {n:"第122屆香港結婚節 暨 夏日婚紗展 2026",v:"香港會議展覽中心",o:"HKAE",s:"2026-06-05",e:"2026-06-07",type:"retail"},
  {n:"優質寵物用品展2026",v:"香港會議展覽中心 Hall 3BCDE",o:"Exhibition Group",s:"2026-06-05",e:"2026-06-07",type:"retail"},
  {n:"香港家居博覽2026",v:"香港會議展覽中心 Hall 1",o:"Exhibition Group",s:"2026-06-25",e:"2026-06-28",type:"retail"},
  {n:"第6屆工展會購物節",v:"亞洲國際博覽館 5及7號展館",o:"廠商聯合會",s:"2026-06-26",e:"2026-06-29",type:"retail"},
  {n:"第32屆香港國際教育及職業展",v:"香港會議展覽中心",o:"廠商聯合會",s:"2026-07-04",e:"2026-07-05",type:"trade"},
  {n:"零食世界",v:"香港會議展覽中心",o:"TDC",s:"2026-07-15",e:"2026-07-21",type:"retail"},
  {n:"香港運動消閒博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-07-15",e:"2026-07-21",type:"retail"},
  {n:"香港書展",v:"香港會議展覽中心",o:"TDC",s:"2026-07-15",e:"2026-07-21",type:"retail"},
  {n:"第34屆國際嬰兒兒童用品博覽",v:"香港會議展覽中心",o:"荷花集團",s:"2026-07-30",e:"2026-08-02",type:"retail"},
  {n:"香港貓迷博覽2026",v:"香港會議展覽中心",o:"Exhibition Group",s:"2026-07-31",e:"2026-08-02",type:"retail"},
  {n:"第123屆香港結婚節暨秋日婚紗展",v:"香港會議展覽中心",o:"HKAE",s:"2026-08-07",e:"2026-08-09",type:"retail"},
  {n:"美與健生活博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-08-13",e:"2026-08-17",type:"retail"},
  {n:"美食博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-08-13",e:"2026-08-17",type:"retail"},
  {n:"家電·家居·博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-08-13",e:"2026-08-17",type:"retail"},
  {n:"香港國際茶展",v:"香港會議展覽中心",o:"TDC",s:"2026-08-13",e:"2026-08-15",type:"retail"},
  {n:"美食商貿博覽",v:"香港會議展覽中心",o:"TDC",s:"2026-08-13",e:"2026-08-15",type:"retail"},
  {n:"香港電腦通訊節",v:"香港會議展覽中心",o:"電腦商會",s:"2026-08-21",e:"2026-08-24",type:"trade"},
  {n:"香港鐘表展",v:"香港會議展覽中心",o:"TDC",s:"2026-09-01",e:"2026-09-05",type:"trade"},
  {n:"國際名表薈萃",v:"香港會議展覽中心",o:"TDC",s:"2026-09-01",e:"2026-09-05",type:"retail"},
  {n:"CENTRESTAGE",v:"香港會議展覽中心",o:"TDC",s:"2026-09-02",e:"2026-09-05",type:"trade"},
  {n:"秋季家居博覽 2026",v:"香港會議展覽中心 Hall 5BCDE",o:"Exhibition Group",s:"2026-09-25",e:"2026-09-28",type:"trade"},
  {n:"香港秋季旅遊博覽會 2026",v:"香港會議展覽中心 Hall 5FG",o:"Exhibition Group",s:"2026-09-25",e:"2026-09-28",type:"trade"},
  {n:"香港秋季電子產品展",v:"香港會議展覽中心",o:"TDC",s:"2026-10-13",e:"2026-10-16",type:"trade"},
  {n:"國際電子組件及生產技術展",v:"香港會議展覽中心",o:"TDC",s:"2026-10-13",e:"2026-10-16",type:"trade"},
  {n:"MEGA SHOW PART 1",v:"香港會議展覽中心",o:"Comasia",s:"2026-10-20",e:"2026-10-23",type:"retail"},
  {n:"第13屆香港美食嘉年華",v:"葵涌運動場",o:"廠商聯合會",s:"2026-10-24",e:"2026-11-01",type:"trade"},
  {n:"香港國際戶外及科技照明博覽",v:"亞洲國際博覽館",o:"TDC",s:"2026-10-26",e:"2026-10-29",type:"trade"},
  {n:"MEGA SHOW PART 2",v:"香港會議展覽中心",o:"Comasia",s:"2026-10-26",e:"2026-10-29",type:"retail"},
  {n:"香港國際秋季燈飾展",v:"香港會議展覽中心",o:"TDC",s:"2026-10-27",e:"2026-10-30",type:"retail"},
  {n:"國際環保博覽",v:"亞洲國際博覽館",o:"TDC",s:"2026-10-28",e:"2026-10-31",type:"trade"},
  {n:"美酒佳餚巡禮2026",v:"中環海濱公園",o:"旅發局",s:"2026-10-29",e:"2026-11-01",type:"trade"},
  {n:"香港國際眼鏡展",v:"香港會議展覽中心",o:"TDC",s:"2026-11-04",e:"2026-11-06",type:"trade"},
  {n:"香港國際美酒展",v:"香港會議展覽中心",o:"TDC",s:"2026-11-05",e:"2026-11-07",type:"trade"},
  {n:"第124屆香港結婚節暨聖誕婚紗展",v:"香港會議展覽中心",o:"HKAE",s:"2026-12-11",e:"2026-12-13",type:"trade"},
  {n:"第60屆工展會",v:"銅鑼灣維多利亞公園",o:"廠商聯合會",s:"2026-12-12",e:"2027-01-04",type:"retail"},
  {n:"第24屆香港冬季購物節",v:"香港會議展覽中心",o:"HKAE",s:"2026-12-24",e:"2026-12-27",type:"retail"},
  {n:"第26屆香港家居潮流博覽",v:"香港會議展覽中心",o:"HKAE",s:"2026-12-24",e:"2026-12-27",type:"retail"},
  {n:"數碼生活及車品博覽",v:"香港會議展覽中心",o:"HKAE",s:"2026-12-24",e:"2026-12-27",type:"retail"},
  {n:"第24屆香港冬日美食節",v:"香港會議展覽中心",o:"HKAE",s:"2026-12-24",e:"2026-12-28",type:"retail"},
  {n:"香港戶外用品及運動博覽 2026",v:"待定",o:"Exhibition Group",s:"",e:"",type:"retail"},
  {n:"第十三屆兒童書展暨超級親子用品展（12月）",v:"亞洲國際博覽館",o:"親子頭條",s:"",e:"",type:"retail"}
];

const MILESTONES = [
  {name:"前期合約與預算",tasks:"出manual、簽署展會合作協議、確認付款條款、法務及財務審批、門店排更",offset:-150,resp:"會展端",scope:"對外+對內"},
  {name:"展位與場地規劃",tasks:"預訂展位、確認搭建廠商、展位推廣設計、繪製平面圖、購買保險、車證",offset:-60,resp:"駐場",scope:"對外"},
  {name:"宣傳推廣啟動",tasks:"社交媒體宣傳、SF Media 對接、策劃抽獎活動、EDM 發送、官網更新",offset:-45,resp:"MKT Promotion",scope:"對外+對內"},
  {name:"營運準備（1個月前）",tasks:"進離場預訂、內外溝通、跨部門協調、駐場資源預訂、物資清單整理、件量預估",offset:-30,resp:"營運端+駐場",scope:"對內"},
  {name:"最終確認（2周前）",tasks:"確認 Move-in 時間、最終訂單與需求確認",offset:-14,resp:"營運端",scope:"對外"},
  {name:"展會期間",tasks:"展位運營、客戶諮詢接待、WhatsApp 跟進、駐場寄件、每日對賬",offset:0,resp:"營運+駐場+客服",scope:"對外",isShow:true},
  {name:"撤場與收尾",tasks:"Move out、展位拆除、物資回收盤點、現場收尾",offset:999,resp:"營運+駐場",scope:"對內",isEnd:true},
  {name:"日常跟進",tasks:"客服、下單、財務、WhatsApp、收入統計",offset:998,resp:"—",scope:"對內",isDaily:true}
];

/* ===== STATE ===== */
let currentDate = new Date(2026, 6, 1);
let selectedTaskId = null;
let filterExhibition = 'all';
let filterExhibitions = new Set();
let allTasks = [];
let currentUser = '';
let cloudMode = false;
let syncMode = 'local';   // 'internal' | 'supabase' | 'local'
let serverEdits = {};     // internal-server shared overrides

/* ===== IDENTITY ===== */
function getUserIdentity() { return localStorage.getItem('exhibition_kanban_user') || ''; }
function saveIdentityToStorage(n) { localStorage.setItem('exhibition_kanban_user', n); }
function saveIdentity() {
  const name = document.getElementById('userNameInput').value.trim();
  if (!name) { alert('請輸入你的名字'); return; }
  currentUser = name;
  saveIdentityToStorage(name);
  document.getElementById('identityModal').classList.add('hidden');
  document.getElementById('userBadgeName').textContent = name;
  initApp();
}
function changeIdentity() {
  const name = prompt('輸入你的名字：', currentUser);
  if (name && name.trim()) {
    currentUser = name.trim();
    saveIdentityToStorage(currentUser);
    document.getElementById('userBadgeName').textContent = currentUser;
  }
}
function showIdentityModal() { document.getElementById('identityModal').classList.remove('hidden'); }

/* ===== HELPERS ===== */
function dateStr(d) {
  if (typeof d === 'string') return d;
  const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function parseDate(s) { if (!s || s === '未知') return null; const p = s.split('-'); return new Date(+p[0], +p[1]-1, +p[2]); }
function addDays(base, days) { const d = parseDate(base); if (!d) return null; d.setDate(d.getDate()+days); return dateStr(d); }
function formatDate(s) { if (!s) return '待定'; const d = parseDate(s); if (!d) return s; return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`; }
function daysDiff(a, b) { const da = parseDate(a), db = parseDate(b); if (!da || !db) return 0; return Math.round((da-db)/86400000); }
function isToday(s) { const t = new Date(), d = parseDate(s); return d && d.getFullYear()===t.getFullYear() && d.getMonth()===t.getMonth() && d.getDate()===t.getDate(); }
function isSameMonth(s, y, m) { const d = parseDate(s); return d && d.getFullYear()===y && d.getMonth()===m; }
function genTaskId(a,b){ return `task_${a}_${b}`; }

function generateColors(count) {
  const colors = []; const golden = 137.508;
  for (let i=0;i<count;i++){ const hue=(i*golden)%360; colors.push(`hsl(${Math.round(hue)}, 65%, 55%)`); }
  return colors;
}
const EX_COLORS = generateColors(EXHIBITIONS_RAW.length);
const exhibitions = EXHIBITIONS_RAW.map((ex,i)=>({...ex, id:i, color:EX_COLORS[i]}));

function buildDefaultTasks() {
  const tasks = [];
  exhibitions.forEach((ex, exIdx) => {
    if (!ex.s) return;
    MILESTONES.forEach((ms, msIdx) => {
      const taskId = genTaskId(exIdx, msIdx);
      let taskDate;
      if (ms.isShow) taskDate = ex.s;
      else if (ms.isEnd) taskDate = ex.e;
      else if (ms.isDaily) taskDate = ex.s;
      else taskDate = addDays(ex.s, ms.offset);
      tasks.push({
        task_id: taskId, ex_idx: exIdx, ex_name: ex.n, milestone: ms.name, tasks_desc: ms.tasks,
        task_date: taskDate, completed:false, note:'', resp: ms.resp, scope: ms.scope,
        is_show:!!ms.isShow, is_end:!!ms.isEnd, is_daily:!!ms.isDaily, show_start: ex.s, show_end: ex.e,
        updated_by:'', updated_at:null
      });
    });
  });
  return tasks;
}

/* ===== SUPABASE OPS ===== */
async function seedDatabase() {
  if (!supabase) return false;
  try {
    const { data, error } = await supabase.from('tasks').select('task_id').limit(1);
    if (error) { console.warn('check tasks:', error); return false; }
    if (data && data.length > 0) return true;
    showLoading('正在初始化任務數據（首次可能需要 30 秒）...');
    const tasks = buildDefaultTasks();
    const { error: ie } = await supabase.from('tasks').upsert(tasks, { onConflict:'task_id' });
    if (ie) { console.error('seed failed:', ie); return false; }
    return true;
  } catch(e){ console.error('seed error:', e); return false; }
}
async function fetchAllTasks() {
  if (!supabase) return null;
  try { const { data, error } = await supabase.from('tasks').select('*').order('task_id'); if (error){console.error(error);return null;} return data; }
  catch(e){ console.error(e); return null; }
}
async function updateTask(taskId, updates) {
  updates.updated_by = currentUser;
  updates.updated_at = new Date().toISOString();
  if (syncMode === 'internal') {
    const cur = serverEdits[taskId] || {};
    if (updates.completed !== undefined) cur.completed = updates.completed;
    if (updates.note !== undefined) cur.note = updates.note;
    if (updates.task_date !== undefined) cur.task_date = updates.task_date;
    cur.updated_by = updates.updated_by;
    cur.updated_at = updates.updated_at;
    serverEdits[taskId] = cur;
    return await saveInternalEdit(taskId, cur);
  }
  if (syncMode === 'supabase' && supabase) {
    try { const { error } = await supabase.from('tasks').update(updates).eq('task_id', taskId); if (error){console.error(error);return false;} return true; }
    catch(e){ console.error(e); return false; }
  }
  // local fallback: persist to localStorage
  try {
    const le = JSON.parse(localStorage.getItem('exhibition_kanban_edits') || '{}');
    le[taskId] = Object.assign(le[taskId] || {}, updates);
    localStorage.setItem('exhibition_kanban_edits', JSON.stringify(le));
    return true;
  } catch(e){ return false; }
}

function mapDbTasksToUI(dbTasks) {
  const map = {}; (dbTasks||[]).forEach(t=>{map[t.task_id]=t;});
  return buildDefaultTasks().map(dt => {
    const db = map[dt.task_id];
    return {
      ...dt, id: dt.task_id, exIdx: dt.ex_idx, exName: dt.ex_name,
      exColor: exhibitions[dt.ex_idx]?.color || '#999',
      exVenue: exhibitions[dt.ex_idx]?.v || '', exType: exhibitions[dt.ex_idx]?.type || '',
      milestone: dt.milestone, tasks: dt.tasks_desc, resp: dt.resp, scope: dt.scope,
      date: db ? (db.task_date || dt.task_date) : dt.task_date, originalDate: dt.task_date,
      completed: db ? !!db.completed : false, note: db ? (db.note||'') : '',
      updatedBy: db ? (db.updated_by||'') : '', updatedAt: db ? db.updated_at : null,
      isShow: dt.is_show, isEnd: dt.is_end, isDaily: dt.is_daily, showStart: dt.show_start, showEnd: dt.show_end
    };
  });
}

function mapOverridesToUI(edits) {
  return buildDefaultTasks().map(dt => {
    const ov = edits[dt.task_id] || {};
    return {
      ...dt, id: dt.task_id, exIdx: dt.ex_idx, exName: dt.ex_name,
      exColor: exhibitions[dt.ex_idx]?.color || '#999',
      exVenue: exhibitions[dt.ex_idx]?.v || '', exType: exhibitions[dt.ex_idx]?.type || '',
      milestone: dt.milestone, tasks: dt.tasks_desc, resp: dt.resp, scope: dt.scope,
      date: ov.task_date || dt.task_date, originalDate: dt.task_date,
      completed: !!ov.completed, note: ov.note || '',
      updatedBy: ov.updated_by || '', updatedAt: ov.updated_at || null,
      isShow: dt.is_show, isEnd: dt.is_end, isDaily: dt.is_daily, showStart: dt.show_start, showEnd: dt.show_end
    };
  });
}

async function loadInternalEdits() {
  try {
    const r = await fetch('/api/edits', { cache: 'no-store' });
    if (!r.ok) return null;
    return await r.json();
  } catch (e) { return null; }
}
async function saveInternalEdit(taskId, override) {
  try {
    const r = await fetch('/api/edits', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ task_id: taskId, override }) });
    return r.ok;
  } catch (e) { return false; }
}

/* ===== FILTER ===== */
function getFilteredTasks() {
  const showCompleted = document.getElementById('showCompleted').checked;
  const statusFilter = document.getElementById('filterStatus').value;
  return allTasks.filter(t => {
    if (filterExhibition !== 'all' && t.exIdx !== +filterExhibition) return false;
    if (filterExhibitions.size > 0 && !filterExhibitions.has(t.exIdx)) return false;
    if (statusFilter === 'completed' && !t.completed) return false;
    if (statusFilter === 'incomplete' && t.completed) return false;
    if (!showCompleted && t.completed) return false;
    return true;
  });
}

/* ===== RENDER CALENDAR ===== */
function renderCalendar() {
  const year = currentDate.getFullYear(), month = currentDate.getMonth();
  const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  document.getElementById('monthTitle').textContent = `${year}年 ${monthNames[month]}`;
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const filteredTasks = getFilteredTasks();

  const tasksByDate = {};
  filteredTasks.forEach(t => {
    if (!t.date) return;
    if (t.isShow) {
      const start = parseDate(t.showStart), end = parseDate(t.showEnd);
      const mS = new Date(year, month, 1), mE = new Date(year, month+1, 0);
      const eS = start > mS ? start : mS, eE = end < mE ? end : mE;
      for (let d = new Date(eS); d <= eE; d.setDate(d.getDate()+1)) {
        const ds = dateStr(d); (tasksByDate[ds] = tasksByDate[ds]||[]).push(t);
      }
    } else {
      if (!isSameMonth(t.date, year, month)) return;
      (tasksByDate[t.date] = tasksByDate[t.date]||[]).push(t);
    }
  });

  const dayNames = ['日','一','二','三','四','五','六'];
  let html = dayNames.map(d=>`<div class="day-header">${d}</div>`).join('');
  const prevDays = new Date(year, month, 0).getDate();
  for (let i=startDay-1;i>=0;i--) html += `<div class="day-cell other-month"><div class="day-number">${prevDays-i}</div></div>`;

  for (let d=1; d<=daysInMonth; d++) {
    const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const todayCls = isToday(ds) ? ' today' : '';
    const dayTasks = tasksByDate[ds] || [];
    const seen = new Set();
    const uniq = dayTasks.filter(t=>{ const k=t.exIdx+(t.isShow?'_show':'_'+t.milestone); if(seen.has(k))return false; seen.add(k); return true; });
    uniq.sort((a,b)=> (a.completed!==b.completed) ? (a.completed?1:-1) : 0);
    const MAX=5; const shown=uniq.slice(0,MAX); const remaining=uniq.length-MAX;
    let th = shown.map(t=>{
      const comp=t.completed?' completed':''; const sc=t.isShow?' show-day':'';
      const ub = t.updatedBy && t.updatedBy!==currentUser ? `<span class="updated-by" title="由 ${t.updatedBy} 更新">${t.updatedBy}</span>` : '';
      return `<div class="task-item${comp}${sc}" style="border-left-color:${t.exColor}" data-action="openTask" data-id="${t.id}" title="${t.exName} - ${t.milestone}">
        <input type="checkbox" class="task-check" ${t.completed?'checked':''} data-action="toggleTask" data-id="${t.id}" title="勾選完成">
        <span class="task-dot" style="background:${t.exColor}"></span>
        <span class="task-name">${t.isShow?'🎪 ':''}${t.milestone}</span>${ub}</div>`;
    }).join('');
    if (remaining>0) th += `<div class="task-more" data-action="showAll" data-date="${ds}">還有 ${remaining} 項...</div>`;
    html += `<div class="day-cell${todayCls}" data-action="selectDate" data-date="${ds}"><div class="day-number">${d}</div><div class="task-list">${th}</div></div>`;
  }
  const total = startDay + daysInMonth;
  const rem = total%7===0?0:7-(total%7);
  for (let i=1;i<=rem;i++) html += `<div class="day-cell other-month"><div class="day-number">${i}</div></div>`;
  document.getElementById('calendarGrid').innerHTML = html;
}

function renderStats() {
  const year=currentDate.getFullYear(), month=currentDate.getMonth();
  const activeEx=new Set();
  exhibitions.forEach(ex=>{ if(!ex.s)return; const s=parseDate(ex.s),e=parseDate(ex.e); const mS=new Date(year,month,1),mE=new Date(year,month+1,0); if(s<=mE&&e>=mS)activeEx.add(ex.id); });
  const monthTasks=allTasks.filter(t=>t.date&&isSameMonth(t.date,year,month));
  const completed=monthTasks.filter(t=>t.completed).length;
  const overdue=allTasks.filter(t=>{ if(t.completed||!t.date||t.isDaily)return false; return parseDate(t.date)<new Date(); }).length;
  const pct=allTasks.length?Math.round(allTasks.filter(t=>t.completed).length/allTasks.length*100):0;
  document.getElementById('statsBar').innerHTML = `
    <div class="stat-card"><div class="stat-value">${activeEx.size}</div><div class="stat-label">本月展會</div></div>
    <div class="stat-card"><div class="stat-value">${monthTasks.length}</div><div class="stat-label">本月任務</div></div>
    <div class="stat-card"><div class="stat-value" style="color:var(--success)">${completed}</div><div class="stat-label">本月已完成</div></div>
    <div class="stat-card"><div class="stat-value" style="color:${overdue>0?'var(--danger)':'var(--success)'}">${overdue}</div><div class="stat-label">已逾期</div></div>
    <div class="stat-card"><div class="stat-value">${pct}%</div><div class="stat-label">總完成率</div></div>`;
  document.getElementById('taskSummary').textContent = `共 ${allTasks.length} 個任務`;
}

function renderLegend() {
  const year=currentDate.getFullYear(), month=currentDate.getMonth();
  const mS=new Date(year,month,1), mE=new Date(year,month+1,0);
  const activeEx=exhibitions.filter(ex=>{ if(!ex.s)return false; const s=parseDate(ex.s),e=parseDate(ex.e); return s<=mE&&e>=mS; });
  document.getElementById('legendItems').innerHTML = activeEx.map(ex=>{
    const active = filterExhibitions.size===0 || filterExhibitions.has(ex.id);
    return `<div class="legend-item ${active?'active':'dimmed'}" data-action="toggleLegend" data-id="${ex.id}" title="${ex.n} (${formatDate(ex.s)} - ${formatDate(ex.e)})">
      <span class="legend-dot" style="background:${ex.color}"></span><span>${ex.n.length>14?ex.n.slice(0,14)+'…':ex.n}</span></div>`;
  }).join('');
}

function renderFilterDropdown() {
  const sel=document.getElementById('filterExhibition');
  sel.innerHTML='<option value="all">全部展會</option>';
  exhibitions.forEach(ex=>{ if(!ex.s)return; sel.innerHTML+=`<option value="${ex.id}">${ex.n}</option>`; });
  sel.value=filterExhibition;
}

/* ===== INTERACTIONS ===== */
function prevMonth(){ currentDate.setMonth(currentDate.getMonth()-1); render(); }
function nextMonth(){ currentDate.setMonth(currentDate.getMonth()+1); render(); }
function goToday(){ currentDate=new Date(2026,6,1); render(); }

function tasksForDate(ds){
  return getFilteredTasks().filter(t=>{
    if(t.isShow){ const d=parseDate(ds); return d>=parseDate(t.showStart)&&d<=parseDate(t.showEnd); }
    return t.date===ds;
  });
}
function selectDate(ds){ const t=tasksForDate(ds); if(!t.length)return; const inc=t.find(x=>!x.completed); if(inc)openTask(inc.id); }

async function toggleTask(taskId){
  const task=allTasks.find(t=>t.id===taskId); if(!task)return;
  task.completed=!task.completed;
  setSyncStatus('💾 保存中...');
  const ok=await updateTask(taskId,{completed:task.completed});
  if(!ok){ task.completed=!task.completed; setSyncStatus('⚠️ 保存失敗'); render(); return; }
  setSyncStatus(syncMode==='internal'?'🏢 內網已同步': syncMode==='supabase'?'☁️ 已同步':'💾 已存本地');
  render();
}
function toggleLegendFilter(id){ if(filterExhibitions.has(id))filterExhibitions.delete(id); else filterExhibitions.add(id); render(); }

function showAllTasks(ds){
  const dayTasks=tasksForDate(ds);
  document.getElementById('panelTitle').textContent=`${formatDate(ds)} 所有任務`;
  document.getElementById('panelBody').innerHTML=dayTasks.map(t=>`
    <div style="padding:12px;border-left:4px solid ${t.exColor};background:#FAFBFD;border-radius:0 8px 8px 0;margin-bottom:8px;cursor:pointer" data-action="openTask" data-id="${t.id}">
      <div style="font-weight:600;font-size:13px;color:${t.exColor}">${t.exName}</div>
      <div style="font-size:14px;margin-top:4px">${t.milestone} ${t.completed?'✅':''} ${t.updatedBy?`<span style="font-size:11px;color:var(--text2)">— ${t.updatedBy}</span>`:''}</div>
    </div>`).join('');
  openPanelShell();
}

function openTask(taskId){
  const task=allTasks.find(t=>t.id===taskId); if(!task)return;
  selectedTaskId=taskId;
  document.getElementById('panelTitle').textContent=task.milestone;
  const daysUntil=daysDiff(task.date, dateStr(new Date()));
  const urgencyText=task.completed?'✅ 已完成': daysUntil<0?`⚠️ 已逾期 ${Math.abs(daysUntil)} 天`: daysUntil===0?'今天截止': daysUntil<=7?`⏰ 還有 ${daysUntil} 天`:`📅 還有 ${daysUntil} 天`;
  const urgencyColor=task.completed?'var(--success)': daysUntil<0?'var(--danger)': daysUntil<=7?'var(--warning)':'var(--text2)';
  document.getElementById('panelBody').innerHTML=`
    <div class="panel-exhibition-badge" style="background:${task.exColor}15;color:${task.exColor}">
      <span class="task-dot" style="background:${task.exColor};width:10px;height:10px"></span>${task.exName}</div>
    <label class="panel-check"><input type="checkbox" id="panelCompleted" ${task.completed?'checked':''}><span style="color:${urgencyColor}">${urgencyText}</span></label>
    <div class="panel-field"><label>展會日期</label><div class="value">${formatDate(task.showStart)} — ${formatDate(task.showEnd)}</div></div>
    <div class="panel-field"><label>場地</label><div class="value">${task.exVenue}</div></div>
    <div class="panel-field"><label>任務日期</label><input type="date" id="panelDate" value="${task.date}"></div>
    <div class="panel-field"><label>工作內容</label><div class="value">${task.tasks}</div></div>
    <div class="panel-field"><label>負責模塊</label><div class="value">${task.resp}</div></div>
    <div class="panel-field"><label>對內/對外</label><div class="value">${task.scope}</div></div>
    <div class="panel-field"><label>備註</label><textarea id="panelNote" placeholder="添加備註...">${task.note}</textarea></div>
    ${task.updatedBy?`<div class="panel-field"><label>上次更新</label><div class="value">${task.updatedBy} · ${task.updatedAt?new Date(task.updatedAt).toLocaleString('zh-HK'):''}</div></div>`:''}
    <div class="panel-actions"><button class="btn-save" data-action="saveTask">💾 保存</button><button class="btn-reset" data-action="resetTask">↩ 重置日期</button></div>`;
  openPanelShell();
}
function openPanelShell(){ document.getElementById('detailPanel').classList.add('open'); document.getElementById('panelOverlay').classList.add('open'); }
function closePanel(){ document.getElementById('detailPanel').classList.remove('open'); document.getElementById('panelOverlay').classList.remove('open'); selectedTaskId=null; }

async function saveTaskEdit(){
  if(!selectedTaskId)return;
  const task=allTasks.find(t=>t.id===selectedTaskId); if(!task)return;
  const newDate=document.getElementById('panelDate').value;
  const newNote=document.getElementById('panelNote').value;
  const newCompleted=document.getElementById('panelCompleted').checked;
  const updates={note:newNote, completed:newCompleted}; if(newDate)updates.task_date=newDate;
  setSyncStatus('💾 保存中...');
  const ok=await updateTask(selectedTaskId,updates);
  if(!ok){ setSyncStatus('⚠️ 保存失敗'); return; }
  setSyncStatus(syncMode==='internal'?'🏢 內網已同步': syncMode==='supabase'?'☁️ 已同步':'💾 已存本地');
  task.note=newNote; task.completed=newCompleted; if(newDate)task.date=newDate; task.updatedBy=currentUser; task.updatedAt=new Date().toISOString();
  closePanel(); render();
}
async function resetTaskEdit(){
  if(!selectedTaskId)return;
  const task=allTasks.find(t=>t.id===selectedTaskId); if(!task)return;
  setSyncStatus('💾 重置中...');
  const ok=await updateTask(selectedTaskId,{task_date:task.originalDate,note:'',completed:false,reset:true});
  if(!ok){ setSyncStatus('⚠️ 重置失敗'); return; }
  setSyncStatus(syncMode==='internal'?'🏢 內網已同步': syncMode==='supabase'?'☁️ 已同步':'💾 已存本地');
  task.date=task.originalDate; task.note=''; task.completed=false; task.updatedBy=currentUser; task.updatedAt=new Date().toISOString();
  closePanel(); render();
}

/* ===== LOADING / SYNC ===== */
function showLoading(t){ document.getElementById('loadingText').textContent=t||'載入中...'; document.getElementById('loadingOverlay').classList.remove('hidden'); }
function hideLoading(){ document.getElementById('loadingOverlay').classList.add('hidden'); }
function setSyncStatus(t){ document.getElementById('syncStatus').textContent=t; }

function render(){ filterExhibition=document.getElementById('filterExhibition').value; renderCalendar(); renderStats(); renderLegend(); }

async function initApp(){
  showLoading('正在連接數據...');
  // 1) internal same-origin server (best inside corporate firewall)
  const internal = await loadInternalEdits();
  if (internal !== null) {
    syncMode = 'internal'; cloudMode = true; serverEdits = internal;
    setSyncStatus('🏢 內網同步');
    allTasks = mapOverridesToUI(serverEdits);
  }
  // 2) supabase cloud
  else if (supabase) {
    const seeded = await seedDatabase();
    if (seeded) { syncMode='supabase'; cloudMode=true; setSyncStatus('☁️ 雲端同步');
      const db = await fetchAllTasks();
      if (db) allTasks = mapDbTasksToUI(db);
      else { allTasks = mapOverridesToUI({}); syncMode='local'; cloudMode=false; setSyncStatus('本地模式'); }
    } else { syncMode='local'; allTasks = mapOverridesToUI(loadLocalEdits()); setSyncStatus('⚠️ 離線・本地'); }
  }
  // 3) local
  else { syncMode='local'; allTasks = mapOverridesToUI(loadLocalEdits()); setSyncStatus('⚠️ 離線・本地'); }
  hideLoading(); renderFilterDropdown(); render();
}
function loadLocalEdits(){ try { return JSON.parse(localStorage.getItem('exhibition_kanban_edits')||'{}'); } catch(e){ return {}; } }

/* ===== EVENT WIRING (no inline handlers) ===== */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  const id = el.dataset.id;
  const date = el.dataset.date;
  switch(action){
    case 'prev': prevMonth(); break;
    case 'next': nextMonth(); break;
    case 'today': goToday(); break;
    case 'changeIdentity': changeIdentity(); break;
    case 'toggleTask': toggleTask(id); break;
    case 'openTask': openTask(id); break;
    case 'showAll': showAllTasks(date); break;
    case 'selectDate': selectDate(date); break;
    case 'toggleLegend': toggleLegendFilter(+id); break;
    case 'closePanel': closePanel(); break;
    case 'saveTask': saveTaskEdit(); break;
    case 'resetTask': resetTaskEdit(); break;
    case 'saveIdentity': saveIdentity(); break;
  }
});
document.getElementById('filterExhibition').addEventListener('change', render);
document.getElementById('filterStatus').addEventListener('change', render);
document.getElementById('showCompleted').addEventListener('change', render);
document.getElementById('userNameInput').addEventListener('keydown', e => { if(e.key==='Enter') saveIdentity(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closePanel(); });

/* ===== STARTUP ===== */
currentUser = getUserIdentity();
if (currentUser) {
  document.getElementById('identityModal').classList.add('hidden');
  document.getElementById('userBadgeName').textContent = currentUser;
  initApp();
} else {
  showIdentityModal();
}
