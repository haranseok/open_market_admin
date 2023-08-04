export class Calculator {
  static setPriceComma(price: string) {
    let changeNumber = parseInt(price);
    return changeNumber.toLocaleString();
  }
}
