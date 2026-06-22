// 切換暗黑，明亮模式
import { ref, onMounted } from "vue";

export function useTheme() {
  // 1. 初始化主題：先去看看 LocalStorage 有沒有存過，沒有的話預設是明亮模式 'light'
  const theme = ref(localStorage.getItem("theme") || "light");

  // 2. 切換主題的核心函式
  const toggleTheme = () => {
    if (theme.value === "light") {
      theme.value = "dark";
      document.documentElement.classList.add("dark"); // 幫 <html> 加上 dark class
    } else {
      theme.value = "light";
      document.documentElement.classList.remove("dark"); // 移除 <html> 的 dark class
    }
    // 記得同步存入 LocalStorage，下次重新整理網頁才不會失效
    localStorage.setItem("theme", theme.value);
  };

  // 3. 確保使用者重新整理網頁時，能抓回上次的設定
  onMounted(() => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  // 把外面的元件需要用到的東西丟出去
  return {
    theme,
    toggleTheme,
  };
}
