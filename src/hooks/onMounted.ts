import { ref, watch, onMounted, onUnmounted } from "vue";

export default () => {
  const newList = ref<string[]>([]);
  const isLoading = ref(true);
  const test = ref(0);
  const changeTest = () => {
    test.value += 1;
  };
  watch(test, (newTest) => {
    console.log("test變了，目前是:", newTest);
    if (newTest === 5) {
      alert("到五了");
    }
  });
  onMounted(() => {
    test.value = 3;
    isLoading.value = false;
  });
  //   onMounted(async () => {
  //     console.log("...正在加載新聞...");
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     newList.value = ["Vue 3 超難", "TypeScript 真的很嚴謹", "今天天氣不錯"];
  //     isLoading.value = false;
  //   });
  //   return { newList, isLoading };
  return { test, changeTest, isLoading };
};
