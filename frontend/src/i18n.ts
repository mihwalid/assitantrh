import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
  en : {
    translation: {
      "newQuestion": "Type a new question",
      "chatGPT": {
          "mainTitle": "Start chatting",
          "message": "This chatbot is configured to answer your questions"
      },
      "meetingMinutes": {
          "mainTitle": "Share your transcript with me",
          "message": ""
      },
      "cnv": {
          "mainTitle": "Share your message with me",
          "message": "This chat is configured to rephrase your message"
      },
      "displayChatHistory": "Show chat history",
      "hideChatHistory": "Hide chat history",
      "share": "Share",
      "new": "New",
      "edit": "Edit",
      "delete": "Delete",
      "hide": "Hide",
      "cancel": "Cancel",
      "clearAll": "Clear all",
      "shareWebApp": "Share the web app",
      "copyUrl": "Copy URL",
      "clearAllHistory": "Clean all chat history",
      "copiedUrl": "Copied URL",
      "generatingAnswer": "Generating answer",
      "stopGenerating": "Stop generating",
      "warningMessageAIContent": "AI-generated content may be incorrect",
      "recent": "Recent",
      "chatHistory": "Chat history",
      "chatHistoryClearWarning": "Are you sure you want to clear all chat history ?",
      "chatHistoryClearDescription": "All chat history will be permanently removed.",
      "chatHistoryClearError": "Error deleting all of chat history",
      "chatHistoryClearErrorDescription": "Please try again. If the problem persists, please contact the site administrator.",
      "submitFeedBack": "Submit feedback",
      "improveFeedback": "Your feedback will improve this experience.",
      "questionFeedback": "Why wasn't this response helpful ?",
      "citationsMissing": "Citations are missing",
      "citationsWrong": "Citations are wrong",
      "outOfScope": "The response is not from my data",
      "inaccurateIrrelevant": "Inaccurate or irrelevant",
      "other": "Other",
      "inappropriateContent": "Report inappropriate content",
      "lastMessageFeedBack": "By pressing submit, your feedback will be visible to the application owner.",
      "submit": "Submit",
      "contentIs": "The content is",
      "reportHate": "Hate speech, stereotyping, demeaning",
      "reportViolence": "Violent: glorification of violence, self-harm",
      "reportSexualContent": "Sexual: explicit content, grooming",
      "reportManipulative": "Manipulative: devious, emotional, pushy, bullyin"
    }
  },
  fr: {
    translation: {
      "newQuestion": "Entrer une nouvelle question",
      "chatGPT": {
          "mainTitle": "Commencer à discuter",
          "message": "Ce chat est configuré pour répondre à vos questions"
      },
      "meetingMinutes": {
          "mainTitle": "Partagez votre transcription avec moi",
          "message": ""
      },
      "cnv": {
          "mainTitle": "Partagez votre message avec moi",
          "message": "Ce chat est configuré pour reformuler votre message"
      },
      "displayChatHistory": "Afficher l'historique du chat",
      "hideChatHistory": "Cacher l'historique du chat",
      "share": "Partager",
      "new": "Nouveau",
      "edit": "Modifier",
      "delete": "Supprimer",
      "cancel": "Annuler",
      "clearAll": "Tout effacer",
      "hide": "Hide",
      "shareWebApp": "Partager l'application web",
      "copyUrl": "Copier l'url",
      "clearAllHistory": "Effacer tout l'historique du chat",
      "copiedUrl": "URL copiée",
      "generatingAnswer": "Génération de la réponse",
      "stopGenerating": "Arrêter la génération",
      "warningMessageAIContent": "Le contenu généré par IA peut être incorrect",
      "recent": "Récent",
      "chatHistory": "Historique du chat",
      "chatHistoryClearWarning": "Êtes-vous sûr de vouloir effacer tout l'historique du chat ?",
      "chatHistoryClearDescription": "Tout l'historique du chat sera définitivement supprimé.",
      "chatHistoryClearError": "Erreur lors de la suppression de tout l'historique du chat.",
      "chatHistoryClearErrorDescription": "Veuillez réessayer. Si le problème persiste, veuillez contacter l'administrateur du site.",
      "submitFeedBack": "Soumettre le feedback",
      "improveFeedback": "Votre feedback améliorera cette expérience.",
      "questionFeedback": "Pourquoi cette réponse n'était pas utile ?",
      "citationsMissing": "Les citations sont manquantes",
      "citationsWrong": "Les citations sont incorrectes",
      "outOfScope": "La réponse ne provient pas de mes données",
      "inaccurateIrrelevant": "Imprécis ou non pertinent",
      "other": "Autre",
      "inappropriateContent": "Signaler un contenu inapproprié",
      "lastMessageFeedBack": "En appuyant sur Soumettre, votre feedback sera visible par le propriétaire de l'application.",
      "submit": "Soumettre",
      "contentIs": "Le contenue est",
      "reportHate": "Discours haineux, stéréotypes, dénigrement",
      "reportViolence": "Violence : glorification de la violence, automutilation",
      "reportSexualContent": "Sexuel : contenu explicite, grooming",
      "reportManipulative": "Manipulation : sournoiserie, émotionnel, insistance, intimidation"
    }
  }
}

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en", // Default language
    debug: true, // Enable console logs for debugging
    interpolation: { escapeValue: false },
    detection: {
      order: ['navigator', 'localStorage', 'sessionStorage', 'cookie', 'htmlTag'], // Order of language detection
      caches: ['localStorage', 'cookie'] // Store detected language for persistence
    }
  });

export default i18n;