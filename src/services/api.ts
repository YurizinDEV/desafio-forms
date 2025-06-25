import type { SubscriptionFormData } from '../utils/form-schema';

const API_URL = 'http://localhost:3010';

export async function saveSubscription(data: SubscriptionFormData): Promise<any> {
    try {
        const response = await fetch(`${API_URL}/inscricoes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Erro ao salvar: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao salvar inscrição:', error);
        throw error;
    }
}

export async function getSubscriptions(): Promise<SubscriptionFormData[]> {
    try {
        const response = await fetch(`${API_URL}/inscricoes`);
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar inscrições:', error);
        throw error;
    }
}
