export async function GET({ params }) {
  const blogs = [
    { id: 1, title: "Title 1", description: "description 1" },
    { id: 2, title: "Title 2", description: "description 2" },
    { id: 3, title: "Title 3", description: "description 3" },
    { id: 4, title: "Title 4", description: "description 4" },
    { id: 5, title: "Title 5", description: "description 5" },
  ];

  const id = params.id;
  if (!blogs[params.id]) {
    return new Response(
      JSON.stringify({ id, title: "NOT FOUND", description: "DESCRIPTION" })
    );
  }

  return new Response(JSON.stringify(blogs[id]), {
    headers: { "Content-type": "application/json" },
  });
}
