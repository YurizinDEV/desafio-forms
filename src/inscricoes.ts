import '../public/assets/css/index.css';
import { getSubscriptions } from './services/api';

const loadButton = document.getElementById('loadInscricoes') as HTMLButtonElement;
const loadingElement = document.getElementById('loading') as HTMLDivElement;
const listaElement = document.getElementById('lista-inscricoes') as HTMLDivElement;
const themeToggle = document.querySelector('.header-icon') as HTMLImageElement;

async function carregarInscricoes() {
    try {
        loadingElement.style.display = 'flex';
        listaElement.innerHTML = '';

        const inscricoes = await getSubscriptions();

        loadingElement.style.display = 'none';

        if (inscricoes.length === 0) {
            listaElement.innerHTML = '<p class="no-data">Nenhuma inscrição encontrada.</p>';
            return;
        }

        const table = document.createElement('table');
        table.className = 'inscricoes-table';

        const thead = document.createElement('thead');
        thead.innerHTML = `
        <tr>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Sexo</th>
        <th>Curso</th>
        <th>Comentários</th></tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        inscricoes.forEach(inscricao => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${inscricao.name}</td>
        <td>${inscricao.email}</td>
        <td>${inscricao.sexo}</td>
        <td>${inscricao.course}</td>
        <td>${inscricao.comments || '-'}</td>
        `;
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        listaElement.appendChild(table);

    } catch (error: any) {
        loadingElement.style.display = 'none';
        listaElement.innerHTML = `<p class="error-message">Erro ao carregar inscrições: ${error.message || 'Erro desconhecido'}</p>`;
    }
}

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
        themeToggle.src = '/assets/images/sun-moon 1.svg';
    } else {
        themeToggle.src = '/assets/images/moon-star 1.svg';
    }
}

themeToggle.addEventListener('click', toggleTheme);

loadButton.addEventListener('click', carregarInscricoes);

themeToggle.addEventListener('click', toggleTheme);
