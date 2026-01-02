/**
 * Centralized pricing configuration
 * All pricing values are defined here and imported where needed
 * to ensure consistency across the website.
 */

// Training Programs
export const trainingPricing = {
  // Specialized Programs (team-based)
  bootcampInnovacion: {
    startingPrice: 2500,
    currency: "USD",
    unit: "per team",
    label: {
      en: "$2,500 USD per team (max. 10 participants per team)",
      es: "$2,500 USD por equipo (máx. 10 participantes por equipo)",
    },
  },
  aceleradorPrototipos: {
    startingPrice: 200,
    currency: "USD",
    unit: "per participant",
    minParticipants: 5,
    label: {
      en: "$200 USD per participant (min. 5)",
      es: "$200 USD por participante (mín. 5)",
    },
  },
  laboratorioTransformacion: {
    startingPrice: 4000,
    currency: "USD",
    unit: "per team",
    label: {
      en: "$4,000 USD per team (max. 10 participants per team)",
      es: "$4,000 USD por equipo (máx. 10 participantes por equipo)",
    },
  },

  // Tools & Technologies Training
  n8nAiAgents: {
    startingPrice: 2000,
    currency: "USD",
    unit: "per team",
    label: {
      en: "$2,000 USD per team (max. 10 participants per team)",
      es: "$2,000 USD por equipo (máx. 10 participantes por equipo)",
    },
  },
  googleWorkspace: {
    startingPrice: 2000,
    currency: "USD",
    unit: "per team",
    label: {
      en: "$2,000 USD per team (max. 10 participants per team)",
      es: "$2,000 USD por equipo (máx. 10 participantes por equipo)",
    },
  },
  microsoftPowerAutomate: {
    startingPrice: 2000,
    currency: "USD",
    unit: "per team",
    label: {
      en: "$2,000 USD per team (max. 10 participants per team)",
      es: "$2,000 USD por equipo (máx. 10 participantes por equipo)",
    },
  },

  // Generic training formats (used on services page)
  weekWorkshop: {
    startingPrice: 2500,
    currency: "USD",
    label: {
      en: "Starting at $2,500",
      es: "Desde $2,500",
    },
  },
  monthProgram: {
    pricePerEmployee: 150,
    currency: "USD",
    minEmployees: 10,
    label: {
      en: "$150 per employee (min. 10)",
      es: "$150 por empleado (mín. 10)",
    },
  },
  ongoingProgram: {
    monthlyPrice: 3000,
    currency: "USD",
    label: {
      en: "$3,000/month",
      es: "$3,000/mes",
    },
  },
  intensiveProgram: {
    label: {
      en: "Custom pricing",
      es: "Precios personalizados",
    },
  },
} as const;

// Consulting Services
export const consultingPricing = {
  standardSubscription: {
    monthlyPrice: 1000,
    currency: "USD",
    label: {
      en: "$1,000 per month",
      es: "$1,000 por mes",
    },
    features: {
      en: ["Weekly meetings", "Unlimited email/Slack access"],
      es: ["Reuniones semanales", "Acceso ilimitado por email/Slack"],
    },
  },
  enhancedSubscription: {
    monthlyPrice: 3000,
    currency: "USD",
    label: {
      en: "$3,000 per month",
      es: "$3,000 por mes",
    },
    features: {
      en: [
        "Daily 45-minute syncs",
        "Unlimited email/Slack/WhatsApp access",
        "Network access",
      ],
      es: [
        "Sincronizaciones diarias de 45 minutos",
        "Acceso ilimitado por email/Slack/WhatsApp",
        "Acceso a la red",
      ],
    },
  },
  handsOnDevelopment: {
    startingPrice: 8000,
    currency: "USD",
    label: {
      en: "Starting at $8,000",
      es: "Desde $8,000",
    },
    features: {
      en: [
        "Complete hands-on development and implementation",
        "All included services as detailed above",
        "Custom scope and pricing based on project requirements",
      ],
      es: [
        "Desarrollo e implementación práctica completa",
        "Todos los servicios incluidos como se detalla arriba",
        "Alcance y precios personalizados según requisitos del proyecto",
      ],
    },
  },
} as const;

// Helper function to format price for display
export function formatPrice(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Type exports for TypeScript support
export type TrainingPricingKey = keyof typeof trainingPricing;
export type ConsultingPricingKey = keyof typeof consultingPricing;

// Helper function to get localized price label from training pricing key
export function getTrainingPriceLabel(
  key: string,
  lang: "en" | "es" = "en"
): string {
  if (key in trainingPricing) {
    return trainingPricing[key as TrainingPricingKey].label[lang];
  }
  return lang === "es" ? "Precio a consultar" : "Contact for pricing";
}

