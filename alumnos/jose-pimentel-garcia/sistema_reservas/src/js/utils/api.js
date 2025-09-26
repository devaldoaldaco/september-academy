import data from "../../data/listings.json" assert { type: "json" };
export async function searchListings({ minPrice, maxPrice, location, type }) {
  await new Promise((r) => setTimeout(r, 120));
  const qLocation = (location || "").trim().toLowerCase();
  const qType = (type || "").trim().toLowerCase();

  return data.filter((item) => {
    const okPrice =
      (minPrice == null || item.price >= minPrice) && (maxPrice == null || item.price <= maxPrice);
    const okLoc = qLocation
      ? item.location.toLowerCase().includes(qLocation)
      : true;
    const okType = qType ? item.type.toLowerCase().includes(qType) : true;
    return okPrice && okLoc && okType;
  });
}