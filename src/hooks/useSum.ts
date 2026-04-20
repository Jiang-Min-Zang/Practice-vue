import { ref } from "vue";

export default () => {
  let sum = ref(0);
  const changeSum = () => {
    sum.value += 1;
  };
  return { sum, changeSum };
};
