import { z } from 'zod';

export const subscriptionFormSchema = z.object({
    name: z.string()
        .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
        .trim(),

    email: z.string()
        .email({ message: 'Email inválido' })
        .trim()
        .toLowerCase(),

    sexo: z.enum(['masculino', 'feminino'], {
        required_error: 'Selecione o sexo',
    }),

    course: z.string()
        .min(1, { message: 'Selecione um curso' }),

    comments: z.string().optional(),

    terms: z.literal(true, {
        errorMap: () => ({ message: 'Você deve aceitar os termos de serviço' }),
    }),
});

export type SubscriptionFormData = z.infer<typeof subscriptionFormSchema>;
