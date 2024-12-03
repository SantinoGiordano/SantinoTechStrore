// import employees from "@/app/lib/employeesData/employees";

export async function GET(request: Request) {
    
const employees = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "position": "Software Engineer",
      "email": "alice@techcompany.com"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "position": "Product Manager",
      "email": "bob@techcompany.com"
    },
    {
      "id": 3,
      "name": "Catherine Lee",
      "position": "UX Designer",
      "email": "catherine@techcompany.com"
    },
    {
      "id": 4,
      "name": "David Wilson",
      "position": "Data Scientist",
      "email": "david@techcompany.com"
    }
  ]

    return new Response(JSON.stringify({ employees}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}