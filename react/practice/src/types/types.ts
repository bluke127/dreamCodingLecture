// export type DataType = {
//   id?: string | undefined;
//   homeKeepingIndex: string | number;
//   dateValue: any;
//   place: string;
//   expenditure: any;
//   importation: any;
//   etc?: string | undefined;
// };
export type UnknownObj = {
  [key: string]: any;
};

export type ModalPopupStateType = {
  type: string;
  content: string;
  btnList: { word: string; func: Event }[];
  isOpen: boolean;
};
export type loadingStateType = {
  isLoading: boolean;
};
