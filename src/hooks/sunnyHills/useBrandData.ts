import { ref } from "vue";
import Navbar from "@/components/SunnyHills/Navbar.vue";
interface BrandItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export function useBrandData() {
  const brandItem = ref<BrandItem[]>([
    {
      id: 1,
      title: "",
      desc: "北回歸線穿過台灣\n讓八卦山連線的紅土丘陵終日陽光普照\n孕育豐饒的作物",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_1_Story151209153127295.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 2,
      title: "",
      desc: "紅色泥土不僅孕育出熱情的人們\n更蘊含堅韌的生命力\n以及訴說不完的故事\n等候用心挖掘",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_2_Story151209153137097.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 3,
      title: "",
      desc: "未經馴服的台灣土產鳳梨\n在田間自然生長\n以時間醞釀令人兩頰生津\n獨特而濃郁的風味",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_3_Story151214160305147.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 4,
      title: "",
      desc: "辛勤的農民俯身收穫老天爺的恩賜\n用心對待的態度，謹慎且真誠\n只因為信仰\n“所有事物值得被善待”",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_4_Story160111105908245.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 5,
      title: "",
      desc: "我們承接農民辛勤的收穫\n更感謝老天爺的恩賜\n全心全意呈現大自然的真實美味",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_5_Story160304130911889.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 6,
      title: "",
      desc: "長桌延伸山丘的溫度\n在充滿綠意的城市一角靜候\n\n一杯微溫的烏龍茶\n搭配返璞歸真的陽光美點\n專為您的到訪而準備",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_6_Story190307183637581.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 7,
      title: "",
      desc: "即便行色匆匆\n也能擁有片刻的美好\n熟悉的問候，暖和的微笑\n撒滿陽光的紅土山丘\n隨時以微熱的溫度恭候您",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_7_Story190307183539008.jpg",
        import.meta.url,
      ).href,
    },
    {
      id: 8,
      title: "",
      desc: "用在地特色水果製成的甜點\n最能代表每個地方的美好\n而真實美味是大家樸實簡單的追求\n我們不只把台灣的美好帶到海外\n也想讓全球各地的美好相互交流",
      img: new URL(
        "../../assets/SunnyHills/story/imgi_8_Story190311162950499.jpg",
        import.meta.url,
      ).href,
    },
  ]);
  return {
    brandItem,
  };
}
