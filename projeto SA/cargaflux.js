// === CargaFlux Moderno v2 ===
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
  body {
    margin:0; padding:20px;
    background: radial-gradient(circle at top, #1a0033, #000);
    font-family: 'Orbitron', sans-serif;
    color:#e0e0e0;
  }
  h1 {
    font-size:2.5em;
    text-align:center;
    background: linear-gradient(90deg,#00ffff,#ff00ff,#ffcc00);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-shadow:0 0 10px #ff00ff77;
    margin-bottom:10px;
  }
  h2 { color:#ffcc00; text-align:center; margin-bottom:20px;}
  button {
    background: linear-gradient(90deg,#00ffff,#ff00ff);
    color:#111;
    padding:10px 16px;
    border:none;
    border-radius:12px;
    margin:6px;
    cursor:pointer;
    font-weight:bold;
    transition:transform .2s, box-shadow .2s;
    box-shadow:0 0 10px #00ffff55;
  }
  button:hover {
    transform:scale(1.05);
    box-shadow:0 0 20px #ff00ff88;
  }
  input,select {
    background:#111; border:1px solid #555; color:#fff;
    padding:10px; margin:8px 0; border-radius:10px;
    width:95%;
    display:block;
    font-size:1em;
  }
  table {
    width:100%; border-collapse:collapse; margin-top:15px;
    box-shadow:0 0 10px #00ffff33;
  }
  th,td {
    border:1px solid #444; padding:10px; text-align:center;
  }
  th {
    background:linear-gradient(90deg,#3a0ca3,#7209b7);
    color:#fff;
  }
  tr:nth-child(even){background:#1a1a1a;}
  .modal {
    position:fixed; top:0; left:0; width:100%; height:100%;
    display:flex; justify-content:center; align-items:center;
    background:rgba(0,0,0,0.8);
    animation:fadeIn .3s ease;
  }
  .modal-content {
    background:#222;
    padding:25px; border-radius:14px;
    border:2px solid #ff00ff;
    width:320px;
    box-shadow:0 0 20px #00ffff55;
  }
  @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
  @media(max-width:600px){ th,td,input,select,button{font-size:12px; width:100%;} }
`;
document.head.appendChild(style);

const state = { cargas:[], current:null };

// Verifica se já tem usuário logado
const loggedUser = localStorage.getItem('cargafluxUser');

const app = document.createElement('div');
document.body.appendChild(app);

function showLogin(){
  if(loggedUser){
    showAgendamento();
    return;
  }
  app.innerHTML = `
    <h1>CargaFlux</h1>
    <h2>Login / Cadastro</h2>
    <input id="user" placeholder="Usuário">
    <input id="pass" type="password" placeholder="Senha">
    <button id="btnLogin">Entrar</button>
  `;
  document.getElementById('btnLogin').onclick = ()=>{
    const user = document.getElementById('user').value.trim();
    if(!user){ alert("Digite um usuário"); return;}
    localStorage.setItem('cargafluxUser', user);
    showAgendamento();
  };
}

function showAgendamento(){
  app.innerHTML = `
    <h1>CargaFlux</h1>
    <h2>Agendar Carga</h2>
    <p>Usuário: ${localStorage.getItem('cargafluxUser')} <button id="logout">Encerrar Sessão</button></p>
    <select id="tipo">
      <option>Transferência</option><option>Venda</option><option>Compra</option>
    </select>
    <input id="veiculo" placeholder="Veículo">
    <input id="placa1" placeholder="Placa 1">
    <input id="placa2" placeholder="Placa 2 (opcional)">
    <input id="motorista" placeholder="Motorista">
    <input id="cidade" placeholder="Cidade">
    <input id="transportadora" placeholder="Transportadora">
    <input id="clienteEnv" placeholder="Cliente Envio">
    <input id="clienteRec" placeholder="Cliente Recebe">
    <input id="tipoVeic" placeholder="Tipo Veículo">
    <input id="peso" placeholder="Peso">
    <input id="valor" placeholder="Valor">
    <label>Data/Hora Envio:</label><input type="datetime-local" id="dtEnvio">
    <label>Data/Hora Início:</label><input type="datetime-local" id="dtInicio"><br>
    <button id="btnAgendar">Agendar</button>
    <button id="btnLista">Ver Lista</button>
    <button id="btnDash">Dashboard</button>
  `;
  document.getElementById('btnAgendar').onclick = agendar;
  document.getElementById('btnLista').onclick = showLista;
  document.getElementById('btnDash').onclick = showDashboard;
  document.getElementById('logout').onclick = ()=>{
    localStorage.removeItem('cargafluxUser');
    showLogin();
  };
}

function agendar(){
  const get = id => document.getElementById(id).value;
  const c = {
    tipo:get('tipo'), veiculo:get('veiculo'),
    placas:get('placa1')+(get('placa2')?"/"+get('placa2'):""),
    motorista:get('motorista'), cidade:get('cidade'),
    transportadora:get('transportadora'), clienteEnv:get('clienteEnv'),
    clienteRec:get('clienteRec'), tipoVeic:get('tipoVeic'),
    peso:get('peso'), valor:get('valor'),
    envio:get('dtEnvio'), inicio:get('dtInicio'),
    status:"Agendado", doca:"-", historico:[]
  };
  state.cargas.push(c);
  alert("Carga agendada!");
  showAgendamento();
}

function showLista(){
  let rows = state.cargas.map((c,i)=>`
    <tr>
      <td>${c.tipo}</td><td>${c.veiculo}</td><td>${c.placas}</td><td>${c.motorista}</td>
      <td>${c.cidade}</td><td>${c.transportadora}</td><td>${c.clienteEnv}</td><td>${c.clienteRec}</td>
      <td>${c.tipoVeic}</td><td>${c.peso}</td><td>${c.valor}</td>
      <td>${c.envio}</td><td>${c.inicio}</td><td>${c.status}</td><td>${c.doca}</td>
      <td><button onclick="openModal(${i})">Atualizar</button></td>
    </tr>`).join('');
  if(!rows) rows = `<tr><td colspan="16">Nenhuma carga</td></tr>`;
  app.innerHTML = `
    <h1>CargaFlux</h1>
    <h2>Lista de Cargas</h2>
    <table>
      <thead>
        <tr>
          <th>Tipo</th><th>Veículo</th><th>Placas</th><th>Motorista</th><th>Cidade</th>
          <th>Transportadora</th><th>Cliente Env</th><th>Cliente Rec</th>
          <th>Tipo Veic</th><th>Peso</th><th>Valor</th>
          <th>Envio</th><th>Início</th><th>Status</th><th>Doca</th><th>Ações</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <button id="btnVoltar">Voltar</button>
    <button id="btnDash">Dashboard</button>
    <div id="modalContainer"></div>
  `;
  document.getElementById('btnVoltar').onclick = showAgendamento;
  document.getElementById('btnDash').onclick = showDashboard;
}

function openModal(i){
  state.current = i;
  const container = document.getElementById('modalContainer');
  container.innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <h3>Atualizar Status</h3>
        <select id="statusSel">
          <option value="No Pátio">No Pátio</option>
          <option value="Carregando">Doca 1</option>
          <option value="Carregando">Doca 2</option>
          <option value="Carregando">Doca 3</option>
          <option value="Carregando">Doca 4</option>
          <option value="Finalizado">Finalizado</option>
        </select><br>
        <button id="btnSave">Salvar</button>
        <button id="btnCancel">Cancelar</button>
      </div>
    </div>
  `;
  document.getElementById('btnSave').onclick = saveStatus;
  document.getElementById('btnCancel').onclick = closeModal;
}

function closeModal(){ document.getElementById('modalContainer').innerHTML=''; }

function saveStatus(){
  const s = document.getElementById('statusSel').value;
  const c = state.cargas[state.current];
  c.status = s;
  c.doca = s.startsWith('Doca') ? s : (s==="Finalizado"?"-":"-");
  c.historico.push({status:s, time:new Date().toLocaleString()});
  closeModal();
  showLista();
}

function showDashboard(){
  const resumo = state.cargas.map(c=>`<p>${c.tipo} - ${c.veiculo} - ${c.status} (Doca:${c.doca})</p>`).join('') || "<p>Nenhuma carga</p>";
  app.innerHTML = `
    <h1>CargaFlux</h1>
    <h2>Dashboard</h2>
    ${resumo}
    <label>Data para relatório:</label>
    <input type="date" id="relData">
    <button id="btnPrint">Imprimir</button><br>
    <button id="btnVoltar">Voltar</button>
  `;
  document.getElementById('btnPrint').onclick = printReport;
  document.getElementById('btnVoltar').onclick = showAgendamento;
}

function printReport(){
  const d = document.getElementById('relData').value;
  const filtered = state.cargas.filter(c=>!d || c.envio.startsWith(d));
  const text = filtered.map(c=>`${c.tipo}, Veículo:${c.veiculo}, Placas:${c.placas}, Motorista:${c.motorista}, Status:${c.status}, Doca:${c.doca}, Peso:${c.peso}, Valor:${c.valor}, Envio:${c.envio}, Início:${c.inicio}`).join('\n');
  const w = window.open('', '', 'width=800,height=600');
  w.document.write('<pre>'+text+'</pre>');
  w.print();
  w.close();
}

// Iniciar
showLogin();


