// Système de quiz personnalisé
class BiohackingQuiz {
    constructor() {
        this.questions = {
            sleep: [
                {
                    question: "Combien d'heures dormez-vous en moyenne ?",
                    type: "range",
                    min: 4,
                    max: 10,
                    weight: 2
                },
                {
                    question: "Combien de temps vous faut-il pour vous endormir ?",
                    type: "choice",
                    options: ["0-15min", "15-30min", "30-60min", "+60min"],
                    weight: 1.5
                }
            ],
            focus: [
                {
                    question: "Combien de fois perdez-vous votre concentration par jour ?",
                    type: "choice",
                    options: ["1-5", "5-10", "10-20", "+20"],
                    weight: 2
                },
                {
                    question: "Utilisez-vous des techniques de concentration ?",
                    type: "multiple",
                    options: ["Méditation", "Pomodoro", "Nootropiques", "Aucune"],
                    weight: 1.5
                }
            ],
            stress: [
                {
                    question: "Comment évaluez-vous votre niveau de stress ?",
                    type: "range",
                    min: 1,
                    max: 10,
                    weight: 2
                },
                {
                    question: "Quels symptômes ressentez-vous ?",
                    type: "multiple",
                    options: ["Anxiété", "Fatigue", "Troubles du sommeil", "Irritabilité"],
                    weight: 1.5
                }
            ]
        };
    }

    // Calcule le score pour chaque catégorie
    calculateScores(answers) {
        let scores = {
            sleep: 0,
            focus: 0,
            stress: 0
        };

        // Logique de calcul des scores
        return scores;
    }

    // Génère des recommandations personnalisées
    generateRecommendations(scores) {
        let recommendations = {
            programs: [],
            products: [],
            articles: []
        };

        // Logique de recommandation basée sur les scores
        return recommendations;
    }

    // Crée un plan d'action personnalisé
    createActionPlan(recommendations) {
        return {
            immediate: [], // Actions à faire immédiatement
            shortTerm: [], // Actions pour les 2 prochaines semaines
            longTerm: []  // Actions pour les 3 prochains mois
        };
    }
}

// Export de la classe
export default BiohackingQuiz;
