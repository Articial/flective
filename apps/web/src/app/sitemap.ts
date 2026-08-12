import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/audit", "/services", "/services/intelligence", "/services/growth", "/services/build", "/work", "/work/commerce-journey", "/work/operations-visibility", "/about", "/contact"];
  const locales = ["/id", "/en"];
  return [
    ...routes.map((route) => ({ url: `https://articial.me${route}`, lastModified: new Date() })),
    ...locales.flatMap((locale) => ["", "/audit", "/services", "/work", "/about", "/contact"].map((route) => ({ url: `https://articial.me${locale}${route}`, lastModified: new Date() }))),
  ];
}
