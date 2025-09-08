import { FiBarChart2, FiActivity, FiClipboard, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Saúde & Performance",
        description: "Leve seu condicionamento físico para o próximo nível com treinos intensos de CrossFit. Nosso programa combina força, resistência e agilidade para transformar seu corpo e mente.",
        bullets: [
            {
                title: "Treinos de Alta Intensidade",
                description: "Aprimore força, velocidade e resistência com sessões dinâmicas e desafiadoras.",
                icon: <FiActivity size={26} /> // Representa intensidade e movimento
            },
            {
                title: "Metas Personalizadas",
                description: "Defina e acompanhe seus objetivos, seja perda de peso, ganho de massa muscular ou condicionamento geral.",
                icon: <FiTarget size={26} /> // Ícone de metas
            },
            {
                title: "Análise de Performance",
                description: "Monitore seu progresso com métricas precisas e feedback especializado.",
                icon: <FiBarChart2 size={26} /> // Representa análise de desempenho
            }
        ],
        imageSrc: "/images/others/2.png"
    },
    {
        title: "Foco & Disciplina",
        description: "Desenvolva força mental e física com o CrossFit. Treine com determinação, domine a técnica e construa uma mentalidade inabalável.",
        bullets: [
            {
                title: "Treinamento Estruturado",
                description: "Treinos planejados para melhorar resistência, técnica e mobilidade.",
                icon: <FiClipboard size={26} /> // Representa planejamento e estruturação
            },
            {
                title: "Mentalidade de Campeão",
                description: "Aprenda a dominar o foco e a disciplina dentro e fora do box.",
                icon: <FiShield size={26} /> // Simboliza força mental e disciplina
            },
            {
                title: "Acompanhamento de Progresso",
                description: "Acompanhe sua evolução com métricas claras e feedback especializado.",
                icon: <FiTrendingUp size={26} /> // Indicador de progresso e evolução
            }
        ],
        imageSrc: "/images/others/3.png"
    }
]