// ===========================
// PROJECT DATA
// ===========================
// Instructions: Add your projects here. Each project should include:
// - title, platform, sector, description, technologies, link

const projectsData = {
    healthcare: [
        {
            title: "HIPAA-Compliant Patient Data Platform",
            platform: "gcp",
            description: "Designed and implemented a secure, scalable patient data management system using GCP services, ensuring HIPAA compliance and real-time data processing.",
            technologies: ["GCP", "BigQuery", "Cloud Functions", "Firebase", "Kubernetes"],
            link: "https://medium.com/@adityareddych/hipaa-compliant-platform"
        },
        {
            title: "Healthcare Analytics Pipeline",
            platform: "azure",
            description: "Built an end-to-end analytics pipeline for processing medical records and generating insights using Azure Synapse and Machine Learning.",
            technologies: ["Azure", "Synapse", "Azure ML", "Data Factory", "Power BI"],
            link: "https://medium.com/@adityareddych/healthcare-analytics"
        },
        {
            title: "Telemedicine Infrastructure",
            platform: "aws",
            description: "Architected a highly available telemedicine platform with video streaming capabilities, deployed on AWS with auto-scaling and disaster recovery.",
            technologies: ["AWS", "EC2", "RDS", "S3", "CloudFront", "Lambda"],
            link: "https://medium.com/@adityareddych/telemedicine-aws"
        }
    ],
    utilities: [
        {
            title: "Smart Grid Monitoring System",
            platform: "azure",
            description: "Developed an IoT-based smart grid monitoring solution using Azure IoT Hub for real-time energy consumption tracking and predictive maintenance.",
            technologies: ["Azure", "IoT Hub", "Stream Analytics", "Cosmos DB", "Functions"],
            link: "https://medium.com/@adityareddych/smart-grid-monitoring"
        },
        {
            title: "Power Distribution Optimization",
            platform: "gcp",
            description: "Created a machine learning model to optimize power distribution using GCP's AI Platform, reducing energy waste by 25%.",
            technologies: ["GCP", "AI Platform", "Dataflow", "BigQuery", "Pub/Sub"],
            link: "https://medium.com/@adityareddych/power-optimization"
        },
        {
            title: "Utility Billing Microservices",
            platform: "aws",
            description: "Modernized legacy billing system into cloud-native microservices architecture on AWS, improving scalability and reducing operational costs.",
            technologies: ["AWS", "EKS", "DynamoDB", "API Gateway", "Lambda"],
            link: "https://medium.com/@adityareddych/utility-billing"
        }
    ],
    finance: [
        {
            title: "Real-time Trading Platform",
            platform: "aws",
            description: "Architected a low-latency trading platform processing millions of transactions per second using AWS managed services.",
            technologies: ["AWS", "Kinesis", "DynamoDB", "Lambda", "ElastiCache"],
            link: "https://medium.com/@adityareddych/trading-platform"
        },
        {
            title: "Fraud Detection System",
            platform: "gcp",
            description: "Implemented machine learning-based fraud detection system analyzing transaction patterns in real-time on GCP.",
            technologies: ["GCP", "AI Platform", "Dataflow", "BigQuery", "Cloud Functions"],
            link: "https://medium.com/@adityareddych/fraud-detection"
        }
    ],
    retail: [
        {
            title: "E-commerce Microservices Platform",
            platform: "azure",
            description: "Built a containerized microservices architecture for e-commerce platform handling millions of daily transactions on Azure AKS.",
            technologies: ["Azure", "AKS", "Service Bus", "Cosmos DB", "Redis Cache"],
            link: "https://medium.com/@adityareddych/ecommerce-platform"
        },
        {
            title: "Inventory Management System",
            platform: "gcp",
            description: "Developed real-time inventory tracking system with predictive analytics for stock optimization across multiple warehouses.",
            technologies: ["GCP", "Firestore", "Cloud Functions", "BigQuery", "AI Platform"],
            link: "https://medium.com/@adityareddych/inventory-system"
        }
    ],
    manufacturing: [
        {
            title: "Industrial IoT Data Pipeline",
            platform: "aws",
            description: "Designed IoT data pipeline for manufacturing floor monitoring, processing sensor data from 10,000+ devices in real-time.",
            technologies: ["AWS", "IoT Core", "Kinesis", "S3", "Athena", "QuickSight"],
            link: "https://medium.com/@adityareddych/industrial-iot"
        },
        {
            title: "Supply Chain Optimization",
            platform: "azure",
            description: "Created AI-powered supply chain optimization platform reducing delivery times and costs using Azure cognitive services.",
            technologies: ["Azure", "Machine Learning", "Synapse", "Logic Apps", "Functions"],
            link: "https://medium.com/@adityareddych/supply-chain"
        }
    ]
};

// ===========================
// ARTICLES DATA
// ===========================
// Instructions: Add your Medium and LinkedIn articles here

const articlesData = [
    {
        title: "Migrating Legacy Applications to GCP: A Comprehensive Guide",
        category: "Cloud Architecture",
        excerpt: "Learn best practices and strategies for successfully migrating legacy applications to Google Cloud Platform with minimal downtime.",
        date: "2025-01-15",
        platform: "medium",
        link: "https://medium.com/@adityareddych/migrating-to-gcp"
    },
    {
        title: "Building Resilient Microservices on Azure Kubernetes",
        category: "Development",
        excerpt: "Explore patterns and practices for building highly available microservices using Azure Kubernetes Service (AKS) and Azure DevOps.",
        date: "2025-01-10",
        platform: "medium",
        link: "https://medium.com/@adityareddych/azure-microservices"
    },
    {
        title: "AWS Cost Optimization: 10 Proven Strategies",
        category: "Best Practices",
        excerpt: "Discover practical techniques to reduce AWS costs without compromising performance or reliability in your cloud infrastructure.",
        date: "2025-01-05",
        platform: "medium",
        link: "https://medium.com/@adityareddych/aws-cost-optimization"
    },
    {
        title: "Serverless Architecture: When and How to Use It",
        category: "Cloud Architecture",
        excerpt: "A detailed comparison of serverless offerings across AWS Lambda, Azure Functions, and Google Cloud Functions with real-world use cases.",
        date: "2024-12-20",
        platform: "linkedin",
        link: "https://linkedin.com/pulse/serverless-architecture"
    },
    {
        title: "Infrastructure as Code: Terraform Best Practices",
        category: "Development",
        excerpt: "Master Terraform with proven patterns for managing multi-cloud infrastructure across GCP, Azure, and AWS environments.",
        date: "2024-12-15",
        platform: "medium",
        link: "https://medium.com/@adityareddych/terraform-best-practices"
    },
    {
        title: "Security in Multi-Cloud Environments",
        category: "Best Practices",
        excerpt: "Essential security considerations and implementation strategies for organizations operating across multiple cloud providers.",
        date: "2024-12-10",
        platform: "linkedin",
        link: "https://linkedin.com/pulse/multi-cloud-security"
    }
];