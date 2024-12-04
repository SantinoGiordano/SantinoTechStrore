// import { NextResponse } from "next/server";
  
export async function GET() {

    const softwareSolutionsItems = [
        {
          "id": 1,
          "name": "Custom Software Development",
          "price": 50000,  // Example price for custom development services
          "description": "Tailored software solutions to meet the specific needs of a business or industry, enhancing efficiency and innovation.",
          "img": "placeholder"
        },
        {
          "id": 2,
          "name": "Mobile App Development",
          "price": 40000,  // Example price for mobile app development
          "description": "Design and development of custom mobile applications for iOS and Android platforms to expand your business reach.",
          "img": "placeholder"
        },
        {
          "id": 3,
          "name": "Cloud Solutions",
          "price": 60000,  // Example price for cloud infrastructure services
          "description": "Cloud infrastructure setup, management, and migration services, including SaaS, PaaS, and IaaS solutions for businesses.",
          "img": "placeholder"
        },
        {
          "id": 4,
          "name": "Web Development Services",
          "price": 45000,  // Example price for web development services
          "description": "Design and development of websites and web applications, including e-commerce and content management systems (CMS).",
          "img": "placeholder"
        },
        {
          "id": 5,
          "name": "Enterprise Resource Planning (ERP) Systems",
          "price": 70000,  // Example price for ERP implementation
          "description": "Implementation and customization of ERP software to streamline business operations, including finance, HR, and supply chain management.",
          "img": "placeholder"
        },
        {
          "id": 6,
          "name": "Customer Relationship Management (CRM) Solutions",
          "price": 55000,  // Example price for CRM solutions
          "description": "Development or integration of CRM platforms to manage customer interactions, improve sales processes, and enhance marketing efforts.",
          "img": "placeholder"
        },
        {
          "id": 7,
          "name": "Cybersecurity Solutions",
          "price": 80000,  // Example price for cybersecurity services
          "description": "Security audits, risk assessments, and the implementation of security protocols to protect data and systems from cyber threats.",
          "img": "placeholder"
        },
        {
          "id": 8,
          "name": "Data Analytics & Business Intelligence",
          "price": 65000,  // Example price for data analytics services
          "description": "Data analysis and business intelligence services to turn raw data into actionable insights, enabling better business decisions.",
          "img": "placeholder"
        },
        {
          "id": 9,
          "name": "Software Integration Services",
          "price": 60000,  // Example price for integration services
          "description": "Integrating various software platforms to ensure seamless communication and data flow across different business systems.",
          "img": "placeholder"
        },
        {
          "id": 10,
          "name": "Software Maintenance & Support",
          "price": 40000,  // Example price for software maintenance
          "description": "Ongoing support, bug fixes, updates, and upgrades to ensure software systems are running optimally and securely.",
          "img": "placeholder"
        }
      ];

    return new Response(JSON.stringify({ softwareSolutionsItems}),{
      status: 200,
      headers: { "Content-Type": "application/json" },
  })
}