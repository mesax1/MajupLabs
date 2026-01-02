/**
 * Centralized pricing configuration
 * All pricing values are defined here and imported where needed
 * to ensure consistency across the website.
 */

// Training Programs
export const trainingPricing = {
  // Individual course prices
  bootcampInnovacion: {
    startingPrice: 3000,
    currency: "USD",
    unit: "per team",
    label: {
      en: "Starting at $3,000 USD per team",
      es: "Desde $3,000 USD por equipo",
    },
  },
  aceleradorPrototipos: {
    startingPrice: 500,
    currency: "USD",
    unit: "per participant",
    label: {
      en: "Starting at $500 USD per participant",
      es: "Desde $500 USD por participante",
    },
  },
  laboratorioTransformacion: {
    startingPrice: 4000,
    currency: "USD",
    unit: "per team",
    label: {
      en: "Starting at $4,000 USD per team",
      es: "Desde $4,000 USD por equipo",
    },
  },

  // Generic training formats (used on services page)
  weekWorkshop: {
    startingPrice: 1500,
    currency: "USD",
    label: {
      en: "Starting at $1,500",
      es: "Desde $1,500",
    },
  },
  monthProgram: {
    pricePerEmployee: 100,
    currency: "USD",
    label: {
      en: "$100 per employee",
      es: "$100 por empleado",
    },
  },
  ongoingProgram: {
    monthlyPrice: 2000,
    currency: "USD",
    label: {
      en: "$2,000/month",
      es: "$2,000/mes",
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

