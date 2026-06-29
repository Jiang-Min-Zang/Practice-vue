export interface GoodsItem {
  id: string;
  title: string;
  price: number;
  stock: number;
  imageUrl: string;
  status: string; // '1' 代表啟用, '0' 代表禁用
  updater?: string; // 加個問號代表這欄位可有可無
  updateTime?: string;
}
