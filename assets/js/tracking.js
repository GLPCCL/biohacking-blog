// Système de tracking et gamification
import CONFIG from './config.js';

class BiohackingTracker {
    constructor(userId) {
        this.userId = userId;
        this.metrics = {
            sleep: {
                duration: [],
                quality: [],
                latency: []
            },
            focus: {
                sessions: [],
                duration: [],
                interruptions: []
            },
            stress: {
                level: [],
                triggers: [],
                recovery: []
            },
            habits: {
                meditation: [],
                exercise: [],
                nutrition: []
            }
        };
        
        this.gamification = {
            points: 0,
            level: 'beginner',
            badges: [],
            streaks: {
                current: 0,
                best: 0
            }
        };
    }

    // Enregistre une métrique
    trackMetric(category, metric, value) {
        if (this.metrics[category] && this.metrics[category][metric]) {
            this.metrics[category][metric].push({
                value: value,
                timestamp: new Date()
            });
            this.calculatePoints(category, metric);
            return true;
        }
        return false;
    }

    // Calcule les points de gamification
    calculatePoints(category, metric) {
        const points = CONFIG.GAMIFICATION.points;
        if (points[`${category}_${metric}`]) {
            this.gamification.points += points[`${category}_${metric}`];
            this.checkLevel();
            this.checkBadges();
        }
    }

    // Vérifie et met à jour le niveau
    checkLevel() {
        const levels = CONFIG.GAMIFICATION.levels;
        for (let [level, threshold] of Object.entries(levels)) {
            if (this.gamification.points >= threshold) {
                this.gamification.level = level;
            }
        }
    }

    // Vérifie et attribue les badges
    checkBadges() {
        const badges = CONFIG.GAMIFICATION.badges;
        for (let [badge, requirement] of Object.entries(badges)) {
            if (this.meetsRequirement(requirement) && !this.gamification.badges.includes(badge)) {
                this.gamification.badges.push(badge);
                this.notifyBadgeEarned(badge);
            }
        }
    }

    // Génère des rapports de progression
    generateReport(timeframe = 'week') {
        return {
            metrics: this.calculateMetrics(timeframe),
            progress: this.calculateProgress(timeframe),
            recommendations: this.generateRecommendations()
        };
    }

    // Génère des visualisations de données
    generateVisualizations(metric, timeframe = 'week') {
        // Logique pour créer des graphiques et visualisations
        return {
            type: 'chart',
            data: this.prepareChartData(metric, timeframe),
            options: this.getChartOptions(metric)
        };
    }

    // Exporte les données pour l'API
    exportData() {
        return {
            userId: this.userId,
            metrics: this.metrics,
            gamification: this.gamification,
            timestamp: new Date()
        };
    }
}

// Export de la classe
export default BiohackingTracker;
