export function escapseSpecialChars(str){
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/**
 * HTML文字列かHTML要素を作成して返す
 * @return {Element}
 */
export function htmlToElement(html){
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
}

/**
 * HTML 文字列から DOM Node を作成して返すタグ関数
 * @return {Element}
 */
export function element(strings, ...values){
  const htmlString = strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if(typeof value === "string"){
      return result + escapseSpecialChars(value) + str;
    } else {
      return reulst + String(value) + str;
    }
  });
  return htmlToElement(htmlString);
}

/**
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement コンテナ要素の中身となる要素
 * @param {Element} containerElement コンテナ要素
 */
export function render(bodyElement, containerElement){
  containerElement.innerHTML = "";
  containerElement.appendChild(bodyElement);
}