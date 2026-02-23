// 🚉 GARE DE BAILLEUL - ENQUÊTE DE MOBILITÉ MULTIMODALE
// Based on the French mobility survey questionnaire for the Pôle d'Échanges Multimodal de Bailleul

export const templateSurveyQuestions = [

    // 🎯 Q1 - Raison de présence en gare
    {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        note: "L'enquêteur peut pré-remplir directement cette question sans avoir à la poser. Cibler les montants en priorité.",
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2" },
            { id: 2, text: "Je viens de descendre du train", next: "end" }, // Fin de l'enquête pour les descendants
            { id: 3, text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q9" },
            { id: 4, text: "Autre raison (achat billet, commerces en gare…)", next: "Q9" }
        ]
    },

    // === MONTANTS (Q1 = 1) ===

    // 📍 Q2 - Origine du déplacement
    {
        id: "Q2",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bailleul", next: "Q2_rue" },
            { id: 2, text: "Méteren", next: "Q2_rue" },
            { id: 3, text: "Autre commune", next: "Q2_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune
    {
        id: "Q2_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🏘️ Q2_rue - Nom de rue
    {
        id: "Q2_rue",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        note: "Nom de la rue où se situe le point d'origine du déplacement. Garder une option 'Autre' au cas où le répondant ne saurait pas ou ne voudrait pas répondre. Dans ce cas écrire l'indication donnée (Nord, Sud, centre-ville…) ou, à défaut, 'NSP'.",
        next: "Q3"
    },

    // 🚗 Q3 - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q3",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a1" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4" },
            { id: 5, text: "En transport en commun", next: "Q3b" },
            { id: 6, text: "À vélo", next: "Q3c" },
            { id: 7, text: "En trottinette", next: "Q3c" },
            { id: 8, text: "En Taxi/VTC", next: "Q4" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a1" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4" },
            { id: 11, text: "Autre", next: "Q3_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport
    {
        id: "Q3_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "e.g., skateboard, trottinette électrique en location...",
        next: "Q4"
    },

    // 🅿️ Q3a1 - Lieu de stationnement (conducteurs et 2 roues motorisés)
    // Note: Option 8 (arceau vélo) s'affiche uniquement pour Q3 = 9
    {
        id: "Q3a1",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: '/plan.png',
        note: "Utiliser le plan pour aider l'enquêté à répondre si besoin. L'option 'Sur un arceau vélo' est réservée aux 2 roues motorisés (Q3 = 9).",
        options: [
            { id: 1, text: "Dans le parking gratuit au nord-ouest (proche bâtiment voyageurs)", next: "Q3a2" },
            { id: 2, text: "Dans le parking gratuit au nord, en face de la gare routière", next: "Q3a2" },
            { id: 3, text: "Dans le parking gratuit au nord-est", next: "Q3a2" },
            { id: 4, text: "Dans le parking gratuit au sud (proche Lidl)", next: "Q3a2" },
            { id: 5, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q3a2" },
            { id: 6, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q3a2" },
            { id: 7, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q3a2" },
            { id: 8, text: "Sur un arceau vélo (2 roues motorisés uniquement)", next: "Q3a2", condition: { Q3: 9 } }
        ]
    },

    // ⏱️ Q3a2 - Durée de stationnement (suit directement Q3a1)
    {
        id: "Q3a2",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4" },
            { id: 4, text: "2 à 3 jours", next: "Q4" },
            { id: 5, text: "3 à 6 jours", next: "Q4" },
            { id: 6, text: "1 semaine ou plus", next: "Q4" }
        ]
    },

    // 🚌 Q3b - Ligne de bus/car utilisée (Q3 = 5)
    {
        id: "Q3b",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        note: "Menu déroulant",
        options: [
            { id: 1, text: "Navette urbaine NB", next: "Q4" },
            { id: 2, text: "L2 – Méteren-Steenwerck", next: "Q4" },
            { id: 3, text: "L3 – Outtersteene-Saint-Jans-Cappel", next: "Q4" },
            { id: 4, text: "Ligne 908", next: "Q4" },
            { id: 5, text: "Ligne 909", next: "Q4" },
            { id: 6, text: "Ligne 926", next: "Q4" },
            { id: 7, text: "Ligne 930", next: "Q4" },
            { id: 8, text: "Transport à la demande Hop Bus", next: "Q4" },
            { id: 9, text: "Car scolaire", next: "Q4" },
            { id: 10, text: "Autre", next: "Q3b_Autre" }
        ]
    },

    // 📝 Q3b - Autre ligne de bus
    {
        id: "Q3b_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "e.g., car interurbain, ligne régionale...",
        next: "Q4"
    },

    // 🚲 Q3c - Stationnement vélo/trottinette (Q3 = 6 ou 7)
    {
        id: "Q3c",
        text: "Où avez-vous stationné votre vélo/trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dans l'abri sécurisé au nord de la gare", next: "Q4" },
            { id: 2, text: "Sur un arceau au nord de la gare", next: "Q4" },
            { id: 3, text: "Je le transporte avec moi dans le train", next: "Q4" },
            { id: 4, text: "Autre", next: "Q3c_Autre" }
        ]
    },

    // 📝 Q3c - Autre stationnement vélo
    {
        id: "Q3c_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire l'emplacement...",
        next: "Q4"
    },

    // 🚉 Q4 - Gare de destination finale
    {
        id: "Q4",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Lille Flandres", next: "Q5" },
            { id: 2, text: "Lens", next: "Q5" },
            { id: 3, text: "Douai", next: "Q5" },
            { id: 4, text: "Arras", next: "Q5" },
            { id: 5, text: "Valenciennes", next: "Q5" },
            { id: 6, text: "Béthune", next: "Q5" },
            { id: 7, text: "Hazebrouck", next: "Q5" },
            { id: 8, text: "Tourcoing", next: "Q5" },
            { id: 9, text: "Autre", next: "Q4_Autre" }
        ]
    },

    // 🚄 Q4 - Autre gare de destination
    {
        id: "Q4_Autre",
        text: "Préciser :",
        type: 'gare',
        next: "Q5"
    },

    // 🎯 Q5 - Motif du déplacement en train
    {
        id: "Q5",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q6" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q6" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q5a" },
            { id: 4, text: "Déplacement professionnel", next: "Q6" },
            { id: 5, text: "Loisirs, tourisme", next: "Q6" },
            { id: 6, text: "Autres", next: "Q5_Autre" }
        ]
    },

    // 📝 Q5 - Autre motif
    {
        id: "Q5_Autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q6"
    },

    // 🏠 Q5a - Raison de la venue à Bailleul (pour ceux qui rentrent chez eux)
    {
        id: "Q5a",
        text: "Quel était la raison de votre venue à Bailleul ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q6" },
            { id: 2, text: "Études", next: "Q6" },
            { id: 3, text: "Déplacement professionnel", next: "Q6" },
            { id: 4, text: "Loisirs, tourisme", next: "Q6" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite...)", next: "Q5a_autre" }
        ]
    },

    {
        id: "Q5a_autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q6"
    },

    // 📅 Q6 - Fréquence de prise du train dans cette gare
    {
        id: "Q6",
        text: "À quelle fréquence prenez-vous un train dans cette gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours", next: "Q7" },
            { id: 2, text: "Au moins 3 jours par semaine", next: "Q7" },
            { id: 3, text: "Au moins une fois par semaine", next: "Q7" },
            { id: 4, text: "Au moins une fois par mois", next: "Q7" },
            { id: 5, text: "Exceptionnellement", next: "Q7" }
        ]
    },

    // 👤 Q7 - Tranche d'âge
    {
        id: "Q7",
        text: "Quelle est votre tranche d'âge ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 18 ans", next: "Q8" },
            { id: 2, text: "18 à 25 ans", next: "Q8" },
            { id: 3, text: "25 à 40 ans", next: "Q8" },
            { id: 4, text: "40 à 60 ans", next: "Q8" },
            { id: 5, text: "Plus de 60 ans", next: "Q8" }
        ]
    },

    // 💡 Q8 - Suggestions d'amélioration (montants)
    {
        id: "Q8",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    },

    // === NON-VOYAGEURS (Q1 = 3 ou 4) ===
    // Accompagnateurs, personnes venant chercher des voyageurs, achat billet, commerces en gare...

    // 📍 Q9 (Non-voyageurs) - Origine du déplacement
    {
        id: "Q9",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bailleul", next: "Q10" },
            { id: 2, text: "Méteren", next: "Q10" },
            { id: 3, text: "Autre commune", next: "Q9_Autre" }
        ]
    },

    // 🏙️ Q9 - Autre commune (non-voyageurs)
    {
        id: "Q9_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q11"
    },

    // 🏘️ Q10 (Non-voyageurs) - Nom de rue à Bailleul
    {
        id: "Q10",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        note: "Nom de la rue où se situe le point d'origine du déplacement. Garder une option 'Autre' au cas où le répondant ne saurait pas ou ne voudrait pas répondre (écrire l'indication donnée : Nord, Sud, centre-ville… ou 'NSP').",
        next: "Q11"
    },

    // 🚗 Q11 (Non-voyageurs) - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q11",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q12" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q11a" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q12" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q12" },
            { id: 5, text: "En transport en commun", next: "Q12" },
            { id: 6, text: "À vélo", next: "Q12" },
            { id: 7, text: "En trottinette", next: "Q12" },
            { id: 8, text: "En Taxi/VTC", next: "Q12" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q11a" },
            { id: 10, text: "Autre", next: "Q11_Autre" }
        ]
    },

    // 📝 Q11 - Autre mode de transport (non-voyageurs)
    {
        id: "Q11_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "e.g., skateboard, trottinette électrique en location...",
        next: "Q12"
    },

    // 🅿️ Q11a (Non-voyageurs) - Lieu de stationnement (conducteurs et 2 roues motorisés)
    {
        id: "Q11a",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: '/plan.png',
        note: "Utiliser le plan pour aider l'enquêté à répondre si besoin. L'option 'Sur un arceau vélo' est réservée aux 2 roues motorisés (Q11 = 9).",
        options: [
            { id: 1, text: "Dans le parking gratuit au nord-ouest (proche bâtiment voyageurs)", next: "Q12" },
            { id: 2, text: "Dans le parking gratuit au nord, en face de la gare routière", next: "Q12" },
            { id: 3, text: "Dans le parking gratuit au nord-est", next: "Q12" },
            { id: 4, text: "Dans le parking gratuit au sud (proche Lidl)", next: "Q12" },
            { id: 5, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q12" },
            { id: 6, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q12" },
            { id: 7, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q12" },
            { id: 8, text: "Sur un arceau vélo (2 roues motorisés uniquement)", next: "Q12", condition: { Q11: 9 } }
        ]
    },

    // 💡 Q12 (Non-voyageurs) - Suggestions d'amélioration
    {
        id: "Q12",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    }
];

/*
🚉 ENQUÊTE DE MOBILITÉ GARE DE BAILLEUL - VERSION vBai1 - FONCTIONNALITÉS IMPLÉMENTÉES :

📋 TYPES DE QUESTIONS :
✅ singleChoice - Toutes les questions à choix unique
✅ freeText - Réponses ouvertes et précisions
✅ commune - Sélecteur de commune pour l'origine
✅ street - Sélecteur de nom de rue pour les adresses à Bailleul
✅ gare - Sélecteur de gare pour les destinations (montants uniquement)

🔀 LOGIQUE CONDITIONNELLE :
✅ Le flux de l'enquête se divise à Q1 :
   - Option 1 (montants) → Questionnaire complet voyageurs (Q2 → Q8)
   - Option 2 (descendants) → Fin de l'enquête
   - Options 3 et 4 (non-voyageurs) → Branche courte (Q9 → Q12)
✅ Montants - La commune d'origine détermine si la question de rue s'affiche :
   - Communes connues (Q2 = 1 ou 2) → Q2_rue, puis Q3
   - Autre commune (Q2 = 3) → Q2_Autre (saisie libre), puis Q3
✅ Montants - Le mode de transport détermine les questions de suivi :
   - Conducteur / 2 roues motorisé (Q3 = 2 ou 9) → Q3a1 (stationnement) + Q3a2 (durée)
   - Transport en commun (Q3 = 5) → Q3b (ligne bus)
   - Vélo / Trottinette (Q3 = 6 ou 7) → Q3c (stationnement vélo)
   - Autres modes → directement Q4
✅ Montants - Motif du déplacement (Q5 = 3) → Q5a (raison venue à Bailleul)
   - Q5a option 5 (Autres) → Q5a_autre (champ libre), puis Q6
✅ Non-voyageurs - La commune d'origine déclenche la question de rue :
   - Communes connues (Q9 = 1 ou 2) → Q10 (rue), puis Q11
   - Autre commune (Q9 = 3) → Q9_Autre (saisie libre), puis Q11
✅ Non-voyageurs - Le mode de transport déclenche la question de stationnement :
   - Conducteur / 2 roues motorisé (Q11 = 2 ou 9) → Q11a (stationnement), puis Q12
   - Autres modes → directement Q12
✅ Option arceau vélo conditionnelle aux 2 roues motorisés (Q3a1 / Q11a)
✅ Questions de précision pour les options "Autre" partout

🎯 STRUCTURE DE L'ENQUÊTE :
MONTANTS (Q1=1) :
  Origine (+rue si Bailleul/Méteren) → Transport (+stationnement/bus/vélo selon mode) → Destination → Motif (+raison venue si retour domicile) → Fréquence → Âge → Améliorations

NON-VOYAGEURS (Q1=3 ou 4) :
  Origine (+rue si Bailleul/Méteren) → Transport (+stationnement si conducteur/2RM) → Améliorations

📊 COLLECTE DE DONNÉES :
MONTANTS :
- Commune d'origine : Bailleul, Méteren + niveau rue
- Mode de transport avec sous-questions détaillées
- Durée de stationnement (conducteurs/2RM)
- Lignes bus : Navette NB, L2 Méteren-Steenwerck, L3 Outtersteene-Saint-Jans-Cappel,
  908, 909, 926, 930, Transport à la demande Hop Bus, Car scolaire
- 4 parkings nommés : nord-ouest, nord (gare routière), nord-est, sud (Lidl)
- Gare de destination finale (Lille Flandres, Lens, Douai, Arras, Valenciennes, Béthune, Hazebrouck, Tourcoing)
- Motif et fréquence du déplacement
- Données démographiques (tranches d'âge)
- Suggestions d'amélioration (ouvert)

NON-VOYAGEURS :
- Commune d'origine : Bailleul, Méteren + niveau rue
- Mode de transport + lieu de stationnement (conducteurs/2RM)
- Suggestions d'amélioration (ouvert)

⚠️ NOTES D'IMPLÉMENTATION :
- L'option arceau vélo (id 8) dans Q3a1 et Q11a ne doit s'afficher que pour les 2 roues motorisés
- Q2_rue s'affiche pour les communes connues (Q2 = 1 ou 2) ; Q2_Autre pour saisie libre
- Q3a2 (durée stationnement) suit toujours directement Q3a1, sans branchement intermédiaire
- Les non-voyageurs n'ont pas de question sur la fréquence ni sur la tranche d'âge
- Les enquêteurs ciblent les montants en priorité ; Q1 peut être pré-remplie par l'enquêteur

Cette enquête correspond au questionnaire mobilité multimodale de la gare de Bailleul.
*/