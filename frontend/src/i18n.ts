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
      "chat": {
        "mainTitlerhpv": "Start chatting with the HR Pierre & Vacances chatbot",
        "mainTitlerhcorpo": "Start chatting with the Corporate HR chatbot",
        "mainTitleit": "Start chatting with the IT Support chatbot",
        "mainTitlepolo": "Start chatting with the Polo Support chatbot",
        "mainTitlesap": "Start chatting with the SAP chatbot",
          "message": "This chatbot is configured to answer your questions"
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
      "newQuestion": "Tapez une nouvelle question",
      "chat": {
        "mainTitle": "Commencez à discuter avec le chatbot RH Pierre & Vacances",
        "mainTitlerhcorpo": "Commencez à discuter avec le chatbot - RH Corporate",
        "mainTitleit": "Commencez à discuter avec le chatbot Support Infomatique",
        "mainTitlepolo": "Commencez à discuter avec le chatbot Support Polo",
        "mainTitlesap": "Commencez à discuter avec le chatbot SAP",
        "message": "Ce chatbot est configuré pour répondre à vos questions"
      },
      "displayChatHistory": "Afficher l'historique de chat",
      "hideChatHistory": "Masquer l'historique de chat",
      "share": "Partager",
      "new": "Nouveau",
      "edit": "Modifier",
      "delete": "Supprimer",
      "hide": "Masquer",
      "cancel": "Annuler",
      "clearAll": "Tout effacer",
      "shareWebApp": "Partager l'application web",
      "copyUrl": "Copier l'URL",
      "clearAllHistory": "Effacer tout l'historique",
      "copiedUrl": "URL copiée",
      "generatingAnswer": "Génération de la réponse",
      "stopGenerating": "Arrêter la génération",
      "warningMessageAIContent": "Le contenu généré par l'IA peut être incorrect",
      "recent": "Récent",
      "chatHistory": "Historique de chat",
      "chatHistoryClearWarning": "Êtes-vous sûr de vouloir effacer tout l'historique de chat ?",
      "chatHistoryClearDescription": "Tout l'historique de chat sera définitivement supprimé.",
      "chatHistoryClearError": "Erreur lors de la suppression de l'historique",
      "chatHistoryClearErrorDescription": "Veuillez réessayer. Si le problème persiste, contactez l'administrateur du site.",
      "submitFeedBack": "Soumettre un retour",
      "improveFeedback": "Votre retour améliorera cette expérience.",
      "questionFeedback": "Pourquoi cette réponse n'était-elle pas utile ?",
      "citationsMissing": "Citations manquantes",
      "citationsWrong": "Citations incorrectes",
      "outOfScope": "La réponse ne vient pas de mes données",
      "inaccurateIrrelevant": "Inexacte ou hors sujet",
      "other": "Autre",
      "inappropriateContent": "Signaler un contenu inapproprié",
      "lastMessageFeedBack": "En soumettant, votre retour sera visible par le propriétaire de l'application.",
      "submit": "Soumettre",
      "contentIs": "Le contenu est",
      "reportHate": "Discours haineux, stéréotypes, dénigrement",
      "reportViolence": "Violent : glorification de la violence, automutilation",
      "reportSexualContent": "Sexuel : contenu explicite, prédation",
      "reportManipulative": "Manipulatoire : sournois, émotionnel, insistant, intimidant"
    }
  },
  es: {
    translation: {
      "newQuestion": "Escribe una nueva pregunta",
      "chat": {
        "mainTitle": "Comience a chatear con el chatbot de RRHH de Pierre & Vacances",
        "mainTitlerhcorpo": "Comience a chatear con el chatbot de RRHH Corporativo",
        "mainTitleit": "Comience a chatear con el chatbot de Soporte Informático",
        "mainTitlepolo": "Comience a chatear con el chatbot de Soporte Polo",
        "mainTitlesap": "Comience a chatear con el chatbot de SAP",
        "message": "Este chatbot está configurado para responder tus preguntas"
      },
      "displayChatHistory": "Mostrar historial de chat",
      "hideChatHistory": "Ocultar historial de chat",
      "share": "Compartir",
      "new": "Nuevo",
      "edit": "Editar",
      "delete": "Eliminar",
      "hide": "Ocultar",
      "cancel": "Cancelar",
      "clearAll": "Borrar todo",
      "shareWebApp": "Compartir la aplicación web",
      "copyUrl": "Copiar URL",
      "clearAllHistory": "Borrar todo el historial",
      "copiedUrl": "URL copiada",
      "generatingAnswer": "Generando respuesta",
      "stopGenerating": "Detener generación",
      "warningMessageAIContent": "El contenido generado por IA puede ser incorrecto",
      "recent": "Reciente",
      "chatHistory": "Historial de chat",
      "chatHistoryClearWarning": "¿Estás seguro de que deseas borrar todo el historial de chat?",
      "chatHistoryClearDescription": "Todo el historial se eliminará permanentemente.",
      "chatHistoryClearError": "Error al eliminar el historial",
      "chatHistoryClearErrorDescription": "Intenta de nuevo. Si el problema persiste, contacta al administrador.",
      "submitFeedBack": "Enviar comentarios",
      "improveFeedback": "Tus comentarios mejorarán esta experiencia.",
      "questionFeedback": "¿Por qué no fue útil esta respuesta?",
      "citationsMissing": "Faltan citas",
      "citationsWrong": "Citas incorrectas",
      "outOfScope": "La respuesta no está basada en mis datos",
      "inaccurateIrrelevant": "Inexacta o irrelevante",
      "other": "Otro",
      "inappropriateContent": "Reportar contenido inapropiado",
      "lastMessageFeedBack": "Al enviar, tus comentarios serán visibles para el propietario de la aplicación.",
      "submit": "Enviar",
      "contentIs": "El contenido es",
      "reportHate": "Discurso de odio, estereotipos, despectivo",
      "reportViolence": "Violento: glorificación de la violencia, autolesiones",
      "reportSexualContent": "Sexual: contenido explícito, acoso",
      "reportManipulative": "Manipulador: engañoso, emocional, insistente, intimidante"
    }
  },
  de: {
    translation: {
      "newQuestion": "Gib eine neue Frage ein",
      "chat": {
        "mainTitle": "Beginnen Sie den Chat mit dem HR-Chatbot von Pierre & Vacances",
        "mainTitlerhcorpo": "Beginnen Sie den Chat mit dem Corporate HR-Chatbot",
        "mainTitleit": "Beginnen Sie den Chat mit dem IT-Support-Chatbot",
        "mainTitlepolo": "Beginnen Sie den Chat mit dem Polo-Support-Chatbot",
        "mainTitlesap": "Beginnen Sie den Chat mit dem SAP-Chatbot",
        "message": "Dieser Chatbot ist darauf eingestellt, deine Fragen zu beantworten"
      },
      "displayChatHistory": "Chatverlauf anzeigen",
      "hideChatHistory": "Chatverlauf ausblenden",
      "share": "Teilen",
      "new": "Neu",
      "edit": "Bearbeiten",
      "delete": "Löschen",
      "hide": "Ausblenden",
      "cancel": "Abbrechen",
      "clearAll": "Alles löschen",
      "shareWebApp": "Web-App teilen",
      "copyUrl": "URL kopieren",
      "clearAllHistory": "Gesamten Verlauf löschen",
      "copiedUrl": "URL kopiert",
      "generatingAnswer": "Antwort wird generiert",
      "stopGenerating": "Generierung stoppen",
      "warningMessageAIContent": "Von KI generierter Inhalt kann fehlerhaft sein",
      "recent": "Kürzlich",
      "chatHistory": "Chatverlauf",
      "chatHistoryClearWarning": "Möchtest du wirklich den gesamten Chatverlauf löschen?",
      "chatHistoryClearDescription": "Der gesamte Verlauf wird dauerhaft gelöscht.",
      "chatHistoryClearError": "Fehler beim Löschen des Verlaufs",
      "chatHistoryClearErrorDescription": "Bitte versuche es erneut. Wenn das Problem weiterhin besteht, kontaktiere den Administrator.",
      "submitFeedBack": "Feedback senden",
      "improveFeedback": "Dein Feedback wird diese Erfahrung verbessern.",
      "questionFeedback": "Warum war diese Antwort nicht hilfreich?",
      "citationsMissing": "Quellenangaben fehlen",
      "citationsWrong": "Quellenangaben sind falsch",
      "outOfScope": "Die Antwort stammt nicht aus meinen Daten",
      "inaccurateIrrelevant": "Unzutreffend oder irrelevant",
      "other": "Andere",
      "inappropriateContent": "Unangemessenen Inhalt melden",
      "lastMessageFeedBack": "Durch das Absenden wird dein Feedback dem App-Inhaber angezeigt.",
      "submit": "Absenden",
      "contentIs": "Der Inhalt ist",
      "reportHate": "Hassrede, Stereotype, abwertend",
      "reportViolence": "Gewalt: Verherrlichung von Gewalt, Selbstverletzung",
      "reportSexualContent": "Sexuell: expliziter Inhalt, Belästigung",
      "reportManipulative": "Manipulativ: hinterhältig, emotional, aufdringlich, mobbend"
    }
  },
  nl: {
    translation: {
      "newQuestion": "Typ een nieuwe vraag",
      "chat": {
        "mainTitle": "Begin met chatten met de HR-chatbot van Pierre & Vacances",
        "mainTitlerhcorpo": "Begin met chatten met de Corporate HR-chatbot",
        "mainTitleit": "Begin met chatten met de IT-supportchatbot",
        "mainTitlepolo": "Begin met chatten met de Polo-supportchatbot",
        "mainTitlesap": "Begin met chatten met de SAP-chatbot",
        "message": "Deze chatbot is ingesteld om je vragen te beantwoorden"
      },
      "displayChatHistory": "Toon chatgeschiedenis",
      "hideChatHistory": "Verberg chatgeschiedenis",
      "share": "Delen",
      "new": "Nieuw",
      "edit": "Bewerken",
      "delete": "Verwijderen",
      "hide": "Verbergen",
      "cancel": "Annuleren",
      "clearAll": "Alles wissen",
      "shareWebApp": "Deel de webapp",
      "copyUrl": "URL kopiëren",
      "clearAllHistory": "Hele chatgeschiedenis wissen",
      "copiedUrl": "URL gekopieerd",
      "generatingAnswer": "Antwoord wordt gegenereerd",
      "stopGenerating": "Stop met genereren",
      "warningMessageAIContent": "Door AI gegenereerde inhoud kan onjuist zijn",
      "recent": "Recent",
      "chatHistory": "Chatgeschiedenis",
      "chatHistoryClearWarning": "Weet je zeker dat je alle chatgeschiedenis wilt wissen?",
      "chatHistoryClearDescription": "Alle chatgeschiedenis wordt permanent verwijderd.",
      "chatHistoryClearError": "Fout bij het verwijderen van de chatgeschiedenis",
      "chatHistoryClearErrorDescription": "Probeer het opnieuw. Als het probleem aanhoudt, neem contact op met de beheerder.",
      "submitFeedBack": "Feedback versturen",
      "improveFeedback": "Je feedback helpt om de ervaring te verbeteren.",
      "questionFeedback": "Waarom was dit antwoord niet nuttig?",
      "citationsMissing": "Bronvermeldingen ontbreken",
      "citationsWrong": "Verkeerde bronvermeldingen",
      "outOfScope": "Het antwoord komt niet uit mijn gegevens",
      "inaccurateIrrelevant": "Onnauwkeurig of irrelevant",
      "other": "Anders",
      "inappropriateContent": "Ongepaste inhoud melden",
      "lastMessageFeedBack": "Door te verzenden wordt je feedback zichtbaar voor de eigenaar van de app.",
      "submit": "Verzenden",
      "contentIs": "De inhoud is",
      "reportHate": "Haatspraak, stereotypering, kleinerend",
      "reportViolence": "Geweld: verheerlijken van geweld, zelfbeschadiging",
      "reportSexualContent": "Seksueel: expliciete inhoud, grooming",
      "reportManipulative": "Manipulatief: sluw, emotioneel, opdringerig, intimiderend"
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