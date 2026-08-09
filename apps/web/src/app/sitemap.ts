import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/services/intelligence", "/services/growth", "/services/build", "/work", "/work/commerce-journey", "/work/operations-visibility", "/about", "/contact"];
  return routes.map((route) => ({ url: `https://articial.me${route}`, lastModified: new Date() }));
}
