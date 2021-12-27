import { useEffect, useState } from "react";
import AboutSection from "../components/aboutSection/AboutSection";
import ArticleB from "../components/article/Article";
import ElementorSectoin from "../components/ElementorSection/ElementorSectoin";
import HeroSection from "../components/HeroSection/HeroSection";
import MenuItems from "../components/menuItems/MenuItems";
import VideoSection from "../components/videoSection/VideoSection";
import productService from "../services/api/productService";
import { IProduct } from "../types";

export default function Home() {
  const [product, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    productService.getProducts().then((res) => setProduct(res));
  }, []);
  return (
    <div>
      <HeroSection />
      <ElementorSectoin />
      <AboutSection />
      <MenuItems />
      <VideoSection />
      <ArticleB data={product} />
    </div>
  );
}
