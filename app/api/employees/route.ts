// import employees from "@/app/lib/employeesData/employees";

export async function GET() {
    
const employees = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "position": "Software Engineer",
      "email": "alice@techcompany.com",
      "img":"redShirtGirl.jpg"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "position": "Product Manager",
      "email": "bob@techcompany.com",
      "img":"blueShirtPerson.jpg"
    },
    {
      "id": 3,
      "name": "Charles Lee",
      "position": "UX Designer",
      "email": "charles@techcompany.com",
      "img":"BlackShirtBoy.jpg"
    },
    {
      "id": 4,
      "name": "David Wilson",
      "position": "Data Scientist",
      "email": "david@techcompany.com",
      "img":"blueBeardBoy.jpg"
    }
  ]

    return new Response(JSON.stringify({ employees}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}