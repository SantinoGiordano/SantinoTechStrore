// import { NextResponse } from "next/server";

export async function GET() {
  const services = [
    {
      id: 1,
      name: "Custom Software Development",
      price: 500, 
      description:
        "Tailored software solutions to meet the specific needs of a business or industry, enhancing efficiency and innovation.",
      img: "customSoftware.jpg",
    },
    {
      id: 2,
      name: "Mobile App Development",
      price: 400, 
      description:
        "Design and development of custom mobile applications for iOS and Android platforms to expand your business reach.",
      img: "mobileApp.jpg",
    },
    {
      id: 3,
      name: "Cloud Solutions",
      price: 600,
      description:
        "Cloud infrastructure setup, management, and migration services, including SaaS, PaaS, and IaaS solutions for businesses.",
      img: "cloudSoutions.jpg",
    },
    {
      id: 4,
      name: "Web Development Services",
      price: 450,
      description:
        "Design and development of websites and web applications, including e-commerce and content management systems (CMS).",
      img: "webDevelopment.jpg",
    },
    {
      id: 5,
      name: "Enterprise Resource Planning (ERP) Systems",
      price: 700, 
      description:
        "Implementation and customization of ERP software to streamline business operations, including finance, HR, and supply chain management.",
      img: "erp.jpg",
    },
    {
      id: 6,
      name: "Customer Relationship Management (CRM) Solutions",
      price: 550, 
      description:
        "Development or integration of CRM platforms to manage customer interactions, improve sales processes, and enhance marketing efforts.",
      img: "crm.jpg",
    },
    {
      id: 7,
      name: "Cybersecurity Solutions",
      price: 800, 
      description:
        "Security audits, risk assessments, and the implementation of security protocols to protect data and systems from cyber threats.",
      img: "security.jpg",
    },
    {
      id: 8,
      name: "Data Analytics & Business Intelligence",
      price: 650, 
      description:
        "Data analysis and business intelligence services to turn raw data into actionable insights, enabling better business decisions.",
      img: "https://placehold.co/200x200",
    },
    {
      id: 9,
      name: "Software Integration Services",
      price: 600, 
      description:
        "Integrating various software platforms to ensure seamless communication and data flow across different business systems.",
      img: "softwareIntagration.jpg",
    },
    {
      id: 10,
      name: "Software Maintenance & Support",
      price: 400, 
      description:
        "Ongoing support, bug fixes, updates, and upgrades to ensure software systems are running optimally and securely.",
      img: "softwareMaintenance.jpg",
    },
  ];

  return new Response(JSON.stringify({ services }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
