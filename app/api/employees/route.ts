import employees from "@/app/lib/employees/employees";

export async function GET(request: Request) {
    

    return new Response(JSON.stringify({ employees }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}