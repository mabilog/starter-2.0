// Stripe
export interface HtmlContent {
  html: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  body: HtmlContent;
}

export interface ProductCategory {
  categoryName: string;
  description: HtmlContent;
  slug: string;
  id: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  altText: string;
}

export interface SellerInformation {
  businessName: string;
  businessDescription: string;
  businessLogo: Image;
}

export interface ProductCategoryForGrid {
  categoryName: string;
}

export interface Product {
  id: string;
  productName: string;
  productSlug: string;
  productPrice: number;
  productDescription: HtmlContent;
  productImages: Image[];
  ProductCategories: ProductCategoryForGrid[];
}

export interface ProductGrid {
  __typename: "ProductGrid";
  id: string;
  headline: string;
  description: HtmlContent;
  products: Product[];
}

export interface Button {
  text: string;
  url: string;
}

export interface CallToAction {
  __typename: "CallToAction";
  id: string;
  body: HtmlContent;
  button: Button;
  heading: string;
  image: Image;
}

export type Stripe = ProductGrid | CallToAction;

export interface LandingPage {
  landingPageTitle: string;
  link: string;
  locale: string;
  blogPosts: BlogPost[];
  productCategories: ProductCategory[];
  sellerInformation: SellerInformation[];
  stripes: Stripe[];
}

export interface PageBySlugResponse {
  id: string;
  landingPage: LandingPage;
}

// Navigations

export type NavLink = {
  id: string;
  displayText: string;
  externalUrl: string;
  page: {
    id: string;
    url: string;
  } | null;
};

export type Navigation = {
  navId: string;
  navLink: NavLink[];
};
