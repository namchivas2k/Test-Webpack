export class NCDom {
  node: HTMLElement;

  constructor(html: string | HTMLElement) {
    if (html instanceof HTMLElement) {
      this.node = html;
    } else {
      const parent = document.createElement("div");
      parent.insertAdjacentHTML("beforeend", String(html));
      this.node = (parent.lastElementChild || parent.lastChild) as HTMLElement;
    }
  }

  query(selector: string) {
    return this.node.querySelector(selector);
  }

  queryAll(selector: string, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }

  addClass(className: string): NCDom {
    this.node.classList.add(className);
    return this;
  }

  removeClass(className: string): NCDom {
    this.node.classList.remove(className);
    return this;
  }

  hasClass(className: string) {
    return this.node.classList.contains(className);
  }

  toggleClass(className: string) {
    this[this.hasClass(className) ? "removeClass" : "addClass"](className);
  }

  append(html: string) {
    const dom = $(html);
    this.node.appendChild(dom.node);
    return dom;
  }

  prepend(html: string) {
    const dom = $(html);
    this.node.prepend(dom.node);
    return dom;
  }

  remove() {
    return this.node.parentNode?.removeChild(this.node);
  }

  css(key: CSSStyleDeclaration | string, value: string | number) {
    //@ts-ignore
    this.node.style[key] = value;
    return this.node;
  }

  getStyle(key: string, numberType = true) {
    const value = window.getComputedStyle(this.node, null).getPropertyValue(key);
    return numberType ? parseFloat(value) : value;
  }

  attr(key: string, value: string | number | undefined) {
    if (value == undefined) return this.node.getAttribute(key);
    return this.node.setAttribute(key, value.toString());
  }

  removeAttr(key: string) {
    this.node.removeAttribute(key);
  }

  on(event: keyof HTMLElementEventMap, callback: any): NCDom {
    this.node.addEventListener(event, callback);
    return this;
  }

  click(callback: EventListenerOrEventListenerObject) {
    this.on("click", callback);
  }

  html(value: string | undefined): NCDom {
    if (value == undefined) {
      this.node.innerHTML;
    } else {
      this.node.innerHTML = value;
    }
    return this;
  }
}

const $ = (html: string) => new NCDom(html);

export default $;
