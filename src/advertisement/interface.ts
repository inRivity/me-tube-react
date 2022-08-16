/**
 * 広告用コンポーネントのPropsの共通Interface
 */
export interface AdverticementProps {
  /** 広告をクリアした際に行いたい処理を記載する */
  clearAdvertisement: () => void;
  isDisplay: boolean;
  muted: boolean;
}
