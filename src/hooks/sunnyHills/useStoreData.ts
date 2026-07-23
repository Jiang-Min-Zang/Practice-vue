import { ref, computed } from "vue";
export interface Store {
  id: string;
  name: string;
  address: string;
  time: string;
  phone: string;
  fax?: string;
  image: string;
  slogan: string;
  other?: string;
}
export interface RegionData {
  region: string;
  bannerImg: string;
  stores: Store[];
}
export function useStoreData() {
  //門市資料結構
  const storeData = [
    {
      region: "台灣中部",
      sidebarImg: new URL(
        "../../assets/SunnyHills/store/imgi_2_CitysSimg151215173034360.jpg",
        import.meta.url,
      ).href,
      bannerImg: new URL(
        "../../assets/SunnyHills/store/Taichung/imgi_1_CitysBimg151215173034360.jpg",
        import.meta.url,
      ).href,
      stores: [
        {
          id: "nantou",
          name: "南投 三合院",
          address: "南投縣南投市鳳山里八卦路1100巷2號（139縣道）",
          time: "10:00 ~ 18:00",
          phone: "049-2292767",
          fax: "049-2291500",
          image: new URL(
            "../../assets/SunnyHills/store/Taichung/imgi_3_StoreDetailPics170517153657666.jpg",
            import.meta.url,
          ).href,
          slogan: "",
        },
        {
          id: "qingshui",
          name: "台中 清水服務區",
          address: "436台中市清水區吳厝二街89號_清水服務區（櫃號L120））",
          time: "週一～四：09:00-21:00 || 週五：09:00-22:00 || 週六日及國定假日：08:00-22:00",
          phone: "04-26201310",
          fax: "",
          image: new URL(
            "../../assets/SunnyHills/store/Taichung/imgi_3_StoreDetailPics241115144958094.jpg",
            import.meta.url,
          ).href,
          slogan: "",
        },
        {
          id: "villager",
          name: "村民市集",
          address: "南投縣南投市鳳山里八卦路1100巷2號（139縣道）",
          time: "09:00-17:00 (逢假日營業)",
          phone: "電話:049-2292767 手機:0800-292-767",
          fax: "049-2291500",
          image: new URL(
            "../../assets/SunnyHills/store/Taichung/imgi_4_StoreDetailPics151217123537721.jpg",
            import.meta.url,
          ).href,
          slogan: "",
        },
      ],
    },
    {
      region: "台灣北部",
      sidebarImg: new URL(
        "../../assets/SunnyHills/store/imgi_2_CitysSimg151215172925684.jpg",
        import.meta.url,
      ).href,
      bannerImg: new URL(
        "../../assets/SunnyHills/store/Taipei/imgi_3_StoreDetailPics151216162750491.jpg",
        import.meta.url,
      ).href,
      stores: [
        {
          id: "taipei",
          name: "台北  民生公園",
          address: "台北市松山區民生東路五段36巷4弄1號1樓",
          time: "10:00 ~ 18:00",
          phone: "02-27600508",
          fax: "02-27600509",
          image: new URL(
            "../../assets/SunnyHills/store/Taipei/imgi_3_StoreDetailPics151216162750491.jpg",
            import.meta.url,
          ).href,
          slogan: "",
        },
        {
          id: "taipei 101",
          name: "台北101購物中心 To Go專櫃",
          address:
            "台北101購物中心地下一樓(台灣伴手禮專區)近1F信義環入口/B1捷運101大樓站4號出口",
          time: "週日至週四 11:00-21:30 || 週五、週六、國定假日及國定假日前夕 11:00-22:00",
          phone: "(02)8101-7667",
          fax: "",
          image: new URL(
            "../../assets/SunnyHills/store/Taipei/imgi_3_StoreDetailPics190628104837654.jpg",
            import.meta.url,
          ).href,
          slogan: "",
          other:
            "https://www.taipei-101.com.tw/tw/food/content/baf07654-6391-404e-9f56-5d131fb5b6b7",
        },
        {
          id: "Terminal 2",
          name: "桃園機場第二航廈To Go專櫃",
          address: "桃園國際機場 第二航廈2樓 伴手禮大街（不須入海關 ）",
          time: "07:00 ~ 20:00",
          phone: "03-2754591",
          fax: "",
          image: new URL(
            "../../assets/SunnyHills/store/Taipei/imgi_4_StoreDetailPics151216182431491.jpg",
            import.meta.url,
          ).href,
          slogan: "",
          other: "https://reurl.cc/YXEE5L",
        },
        {
          id: "Terminal 1",
          name: "桃園機場第一航廈 PopUp 快閃店",
          address: "桃園國際機場 一樓出境報到大廳南側（非管制區）",
          time: "07:00 ~ 19:30",
          phone: "0972-762-850",
          fax: "",
          image: new URL(
            "../../assets/SunnyHills/store/Taipei/imgi_3_StoreDetailPics220830103855551.png",
            import.meta.url,
          ).href,
          slogan: "",
          other: "https://reurl.cc/1GVa1G",
        },
        {
          id: "Terminal 3",
          name: "桃園機場第三航廈To Go專櫃",
          address: "桃園國際機場 第三航廈管制區3F（出境樓層）近D14R登機口 ",
          time: "06:00 ~ 17:00",
          phone: "0800-292-767",
          fax: "",
          image: new URL(
            "../../assets/SunnyHills/store/Taipei/imgi_3_StoreDetailPics260128165114644.jpg",
            import.meta.url,
          ).href,
          slogan: "",
        },
      ],
    },
    {
      region: "台灣南部",
      sidebarImg: new URL(
        "../../assets/SunnyHills/store/imgi_2_CitysSimg151215172807364.jpg",
        import.meta.url,
      ).href,
      bannerImg: new URL(
        "../../assets/SunnyHills/store/Kaohsiung/imgi_1_CitysBimg151215180447570.jpg",
        import.meta.url,
      ).href,
      stores: [
        {
          id: "kaohsiung",
          name: "高雄 駁二特區",
          address: "高雄市鹽埕區大義街2-6號C11-1倉庫",
          time: "10:00 ~ 18:00",
          phone: "07-5510558",
          fax: "07-5519558",
          image: new URL(
            "../../assets/SunnyHills/store/Kaohsiung/imgi_3_StoreDetailPics160219113035607.jpg",
            import.meta.url,
          ).href,
          slogan: "",
        },
      ],
    },
  ];

  //預設狀態
  const currentRegionIndex = ref(0);
  const currentStoreId = ref(storeData[0].stores[0].id);

  //當前選中地區物件
  const currentRegion = computed(() => storeData[currentRegionIndex.value]);
  //當前地區包含門市(sidebar清單)
  const currentStores = computed(() => currentRegion.value.stores);
  //選中門市完整資料(給StoreCard slot資料)
  const activeStore = computed(() => {
    return (
      currentStores.value.find((store) => store.id === currentStoreId.value) ||
      currentStores.value[0]
    );
  });
  //切換地區
  const setRegion = (index: number) => {
    currentRegionIndex.value = index;
    //自動將選中的門市切換到該地區第一個
    if (currentStores.value.length > 0) {
      currentStoreId.value = currentStores.value[0].id;
    }
  };
  //切換門市
  const setStore = (id: string) => {
    currentStoreId.value = id;
  };

  return {
    storeData,
    currentRegionIndex,
    currentRegion,
    currentStores,
    activeStore,
    setRegion,
    setStore,
  };
}
