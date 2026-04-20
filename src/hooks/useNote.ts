import { ref, onMounted, watch } from "vue";
export const useNote = () => {
  const note = ref("");
  onMounted(() => {
    const data = localStorage.getItem("my_note_data");
    if (data) {
      note.value = data;
    }
  });
  watch(note, (newVal) => {
    localStorage.setItem("my_note_data", newVal);
    console.log("已自動存檔");
  });
  return { note };
};
