export const handleNumberFormat = (
  number?: any | number | bigint,
  notation:
    | "compact"
    | "standard"
    | "scientific"
    | "engineering"
    | undefined = "compact",
) =>{
  let _num=number.toString().replace(/[^0-9]/g,'')
  let v=new Intl.NumberFormat("ko", {
    notation:notation,
  }).format(_num);
  console.log(v,"vvv")
  return v?v:'0'
}
export const handleDateFormat = (
  date?: any | number | bigint,
  dateStyle: "long" | "full" | "medium" | "short" | undefined = "long",
) =>
  new Intl.DateTimeFormat("ko", {
    dateStyle,
  }).format(date ?? new Date());
