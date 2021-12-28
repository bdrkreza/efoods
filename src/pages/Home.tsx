import AboutSection from "../components/aboutSection/AboutSection";
import ArticleB from "../components/article/Article";
import ElementorSectoin from "../components/ElementorSection/ElementorSectoin";
import HeroSection from "../components/HeroSection/HeroSection";
import MenuItems from "../components/menuItems/MenuItems";
import VideoSection from "../components/videoSection/VideoSection";
import productService from "../services/api/productService";
import useHooks from "../utils/useHooks";

export default function Home() {
  const { data, isLoading } = useHooks(productService.getProducts);

  return (
    <>
      <HeroSection />
      <ElementorSectoin />
      <AboutSection />
      <MenuItems />
      <VideoSection />
      <ArticleB data={data} isLoading={isLoading} />
    </>
  );
}
