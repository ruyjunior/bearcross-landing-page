import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Os treinos na ${siteDetails.siteName} são indicados para iniciantes?`,
        answer: 'Sim! Nossos treinos são adaptáveis para todos os níveis, desde iniciantes até atletas avançados. Você irá evoluir no seu próprio ritmo com orientação profissional.',
    },
    {
        question: `Preciso ter meu próprio equipamento para treinar?`,
        answer: 'Não é obrigatório. Fornecemos os equipamentos necessários para o treino, mas recomendamos ter itens próprios, como luvas e grips, para maior conforto e higiene.',
    },
    {
        question: 'O CrossFit ajuda na perda de peso e condicionamento físico?',
        answer: `Com certeza! Os treinos de CrossFit combinam exercícios de alta intensidade que aceleram a queima de gordura, melhoram o condicionamento físico geral e aumentam a força muscular.`,
    },
    {
        question: 'Posso fazer uma aula experimental antes de me matricular?',
        answer: 'Sim! Oferecemos aulas experimentais para que você possa conhecer nossa estrutura, metodologia e professores antes de iniciar sua jornada no CrossFit.',
    },
    {
        question: 'Quais os benefícios do CrossFit além do condicionamento físico?',
        answer: 'Além de melhorar o condicionamento físico, o CrossFit promove disciplina, foco, trabalho em equipe, autoconfiança e bem-estar.'
    }
]
