// Configuration principale du site
const CONFIG = {
    // Points d'entrée API
    API_ENDPOINTS: {
        newsletter: '/api/newsletter',
        membership: '/api/membership',
        community: '/api/community',
        programs: '/api/programs',
        chat: '/api/chat',
        tracking: '/api/tracking'
    },

    // Configuration des produits
    PRODUCTS: {
        membership: {
            starter: {
                price: 29,
                currency: 'EUR',
                interval: 'month',
                features: ['articles_premium', 'protocols_pdf', 'newsletter_premium', 'discount_10']
            },
            pro: {
                price: 79,
                currency: 'EUR',
                interval: 'month',
                features: ['starter_features', 'monthly_consultation', 'private_community', 'custom_trackers', 'discount_20']
            },
            elite: {
                price: 199,
                currency: 'EUR',
                interval: 'month',
                features: ['pro_features', 'weekly_coaching', 'quarterly_testing', 'premium_box', 'priority_events']
            }
        }
    },

    // Configuration des programmes
    PROGRAMS: {
        focus: {
            duration: '30 days',
            includes: ['video_course', 'workbook', 'community_access', 'coaching']
        },
        sleep: {
            duration: '14 days',
            includes: ['sleep_tracker', 'meditation_audio', 'protocols', 'coaching']
        },
        stress: {
            duration: '21 days',
            includes: ['biofeedback_device', 'daily_exercises', 'stress_tracker', 'coaching']
        }
    },

    // Configuration de la gamification
    GAMIFICATION: {
        points: {
            article_read: 10,
            comment: 5,
            protocol_complete: 50,
            challenge_complete: 100
        },
        levels: {
            beginner: 0,
            intermediate: 1000,
            advanced: 5000,
            expert: 10000,
            master: 25000
        },
        badges: {
            reader: 'Lu 10 articles',
            contributor: 'Posté 20 commentaires',
            achiever: 'Complété 5 protocoles',
            mentor: 'Aidé 10 membres'
        }
    },

    // Configuration de la communauté
    COMMUNITY: {
        features: ['forum', 'chat', 'events', 'challenges'],
        roles: ['member', 'contributor', 'expert', 'admin'],
        permissions: {
            member: ['read', 'comment', 'participate'],
            contributor: ['create_posts', 'create_events'],
            expert: ['create_protocols', 'mentor'],
            admin: ['manage_all']
        }
    }
};

// Export de la configuration
export default CONFIG;
