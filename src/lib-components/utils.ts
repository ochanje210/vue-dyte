export function loadHeadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src='${src}']`)) {
      return;
    }
    let script = document.createElement("script");
    script.setAttribute("src", src);
    script.setAttribute("type", "text/javascript");
    document.head.appendChild(script);

    script.onload = () => {
      resolve();
    };
    script.onerror = (e) => {
      reject(e);
    };
  });
}

export function loadHeadLink(href: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href='${href}']`)) {
      return;
    }
    let link = document.createElement("link");
    link.setAttribute("href", href);
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    document.head.appendChild(link);

    link.onload = () => {
      resolve();
    };
    link.onerror = (e) => {
      reject(e);
    };
  });
}
