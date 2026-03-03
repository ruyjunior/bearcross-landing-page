import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Venha treinar com a gente! Descubra como alcançar seus objetivos de forma saudável e divertida no nosso centro de treinamento.",
    quickLinks: [
        { text: "Funcionalidades", url: "#features" },
        { text: "Preços", url: "#pricing" },
        { text: "Pagamentos", url: "#payments" },
        //{ text: "Equipe", url: "#team" },
        { text: "FAQ", url: "#faq" },
        { text: "Localização", url: "#location" },
        ],
    email: 'bearcrossct2024@gmail.com',
    telephone: '+55 71 9 9985-7902',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/bearcrossct/',
    },

}