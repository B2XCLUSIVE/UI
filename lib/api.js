

const baseUrl = "https://b2xclusive.onrender.com/api/v1/track"

export async function getMovies() {
  const url =
    `${baseUrl}/movies?page=1&limit=12`;

  const response = await fetch(url, { cache: "no-store" }); // No caching for dynamic data
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();

  return data?.data?.movies || [];
}

  

export async function fetchSeriesData(id) {
  const url = `${baseUrl}/season/${id}`;
  
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch series data");
  }
  const data = await response.json();

  return data?.data || null;
}
  