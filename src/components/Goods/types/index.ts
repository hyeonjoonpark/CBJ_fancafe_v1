// types.ts

export interface GoodsItem {
  goodsId: number;
  goodsName: string;
  goodsDetail: string;
  price: number;
  seller: string;
  sellerProfileImg: string | null;
  goodsImage: string | null;
}
