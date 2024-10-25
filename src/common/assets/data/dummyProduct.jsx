import {
  business,
  custom_software,
  data_analytics,
  hardware,
  infrastructure,
  mobile,
  webdev,
} from "../images/services/services";
const services = [
  {
    id: 1,
    serviceName: "Web Design / Development",
    description:
      "Create and develop custom web and application systems tailored to meet your business needs.",
    price: {
      usd: 5000, // Harga dalam Dolar
    },
    duration: "1-3 Months",
    features: [
      "Responsive Web Design",
      "Custom Web Applications",
      "SEO Optimization",
      "E-commerce Development",
    ],
    image: [webdev],
  },
  {
    id: 2,
    serviceName: "IT Infrastructure Optimization",
    description:
      "Enhance and streamline your IT infrastructure for improved performance and efficiency.",
    price: {
      usd: 7000,
    },
    duration: "2-4 Months",
    features: [
      "Network Optimization",
      "Cloud Integration",
      "Security Enhancements",
      "System Monitoring",
    ],
    image: [infrastructure],
  },
  {
    id: 3,
    serviceName: "Data Analytics Implementation",
    description:
      "Integrate data analysis tools to make informed decisions and boost business insights.",
    price: {
      usd: 8000,
    },
    duration: "3-6 Months",
    features: [
      "Data Integration",
      "Business Intelligence Tools",
      "Predictive Analytics",
      "Custom Reporting",
    ],
    image: [data_analytics],
  },
  {
    id: 4,
    serviceName: "Mobile Application",
    description:
      "Build custom mobile apps to enhance customer engagement and accessibility.",
    price: {
      usd: 10000,
    },
    duration: "4-6 Months",
    features: [
      "iOS and Android Development",
      "Custom UI/UX Design",
      "Push Notifications",
      "App Store Deployment",
    ],
    image: [mobile],
  },
  {
    id: 5,
    serviceName: "Hardware Provisioning",
    description:
      "Supply necessary hardware equipment to support your business operations.",
    price: {
      usd: 15000,
    },
    duration: "1-2 Months",
    features: [
      "Servers and Storage Solutions",
      "Networking Equipment",
      "Workstations",
      "Peripheral Devices",
    ],
    image: [hardware],
  },
  {
    id: 6,
    serviceName: "Business Development Strategy",
    description:
      "Develop effective strategies to grow and scale your business successfully.",
    price: {
      usd: 12000,
    },
    duration: "2-4 Months",
    features: [
      "Market Analysis",
      "Business Growth Plans",
      "Sales Optimization",
      "Brand Development",
    ],
    image: [business],
  },
  {
    id: 7,
    serviceName: "Custom Software Development",
    description:
      "Create specialized software solutions designed specifically for your business requirements.",
    price: {
      usd: 20000,
    },
    duration: "6-12 Months",
    features: [
      "Custom Software Design",
      "API Integrations",
      "Scalable Solutions",
      "Continuous Support & Maintenance",
    ],
    image: [custom_software],
  },
];

export default services;
