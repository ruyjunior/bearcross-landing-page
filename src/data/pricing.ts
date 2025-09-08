import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Básico',
        price: 139,
        features: [
            '2 aulas semanais',
        ],
    },
    {
        name: 'Plus',
        price: 169,
        features: [
            '3 aulas semanais',
        ],
    },
    {
        name: 'Gold',
        price: 189,
        features: [
            '5 aulas semanais',
        ],
    },
]