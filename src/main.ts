import '../public/assets/css/index.css';
import { subscriptionFormSchema, type SubscriptionFormData } from './utils/form-schema';
import { saveSubscription } from './services/api';
import { getSubscriptions } from './services/api';

const form = document.querySelector('form') as HTMLFormElement;
const nameInput = document.querySelector('#name') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const sexoMasc = document.querySelector('#masculino') as HTMLInputElement;
const sexoFem = document.querySelector('#feminino') as HTMLInputElement;
const courseSelect = document.querySelector('#course') as HTMLSelectElement;
const commentsTextarea = document.querySelector('#comments') as HTMLTextAreaElement;
const termsCheckbox = document.querySelector('#terms') as HTMLInputElement;
const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
const themeToggle = document.querySelector('.header-icon') as HTMLImageElement;

function resetForm() {
    nameInput.value = '';
    emailInput.value = '';
    sexoMasc.checked = false;
    sexoFem.checked = false;
    courseSelect.selectedIndex = 0;
    commentsTextarea.value = '';
    termsCheckbox.checked = false;
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


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    if (!termsCheckbox.checked) {
        alert('Por favor, aceite os termos de serviço.');
        return;
    }

    let sexo = '';
    if (sexoMasc.checked) sexo = 'masculino';
    if (sexoFem.checked) sexo = 'feminino';

    const data: SubscriptionFormData = {
        name: nameInput.value,
        email: emailInput.value,
        sexo: sexo as 'masculino' | 'feminino',
        course: courseSelect.value,
        comments: commentsTextarea.value,
        terms: termsCheckbox.checked as true
    };
    
    const result = subscriptionFormSchema.safeParse(data);

    if (!result.success) {
        const errors = result.error.issues.map(err => err.message).join('\n');
        alert(`Erros no formulário:\n${errors}`);
        return;
    }
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Salvando...';
        
        const savedData = await saveSubscription(result.data);
        console.log('Dados salvos com sucesso:', savedData);
        
        alert('Inscrição realizada com sucesso!');
        
        resetForm();
    } catch (error) {
        console.error('Falha ao salvar dados:', error);
        alert('Ocorreu um erro ao salvar sua inscrição. Por favor, tente novamente.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Realizar inscrição';
    }
});