import Swal from "sweetalert2";

export function CalculatePercentage(price: any, discountPrice: any) {
  return Math.floor((discountPrice / price) * 100);
}

export function FormatTimeNumeric(date: Date) {
  // let options:any = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric' };
  let options: any = { year: "numeric", month: "numeric", day: "numeric" };
  let newDate = new Date(date).toLocaleDateString("fa-IR", options);
  return newDate;
}

export function FormatTimelong(date: Date) {
  // let options:any = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric' };
  let options: any = { year: "numeric", month: "long", day: "numeric" };
  let newDate = new Date(date).toLocaleDateString("fa-IR", options);
  return newDate;
}

export function FormatTimelongWithHour(date: Date) {
  // let options:any = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric' };
  let options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
  };
  let newDate = new Date(date).toLocaleDateString("fa-IR", options);
  return newDate;
}

