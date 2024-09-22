import Banners from "@/components/IndexPage/Banners/Banners";
import DeliveryBanner from "@/components/IndexPage/Banners/DeliveryBanner";
import Categories from "@/components/IndexPage/Categories/Categories";
import Discount from "@/components/IndexPage/Discount/Discount";
import LastArticle from "@/components/IndexPage/LastArticle/LastArticle";
import Latest from "@/components/IndexPage/Latest/Latest";
import Offers from "@/components/IndexPage/offers/Offers";
import SiteFeatures from "@/components/IndexPage/SiteFeatures/SiteFeatures";
import TopBrands from "@/components/IndexPage/TopBrands/TopBrands";

export default  async function Home() {

  return (
    <main className="">

   <Banners/>
   <SiteFeatures/>

   <Latest/>

   <Categories/>
   <Discount/>
   <DeliveryBanner/>
   {/* <Popular/> */}

   <TopBrands/>

   <Offers/>
   <LastArticle/>

    </main>
  );
}
