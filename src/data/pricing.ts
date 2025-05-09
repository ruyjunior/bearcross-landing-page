import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: 139,
        features: [
            '2 weekly classes',
        ],
    },
    {
        name: 'Plus',
        price: 159,
        features: [
            '3 weekly classes',
        ],
    },
    {
        name: 'Gold',
        price: 189,
        features: [
            '5 weekly classes',
        ],
    },
]