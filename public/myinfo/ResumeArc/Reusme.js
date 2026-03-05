// resume.js
async function loadJSON(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load " + path);
  return res.json();
}

function get(obj, path) {
  if (!path || path === ".") return obj;
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

function setText(el, val) {
  if (val == null) return;
  if (el.hasAttribute("data-unsafe-html")) {
    el.innerHTML = val;
  } else {
    el.textContent = val;
  }
}

function bindAll(root, data) {
  // data-if
  root.querySelectorAll("[data-if]").forEach(el => {
    const key = el.getAttribute("data-if");
    const v = get(data, key);
    if (!v || (Array.isArray(v) && v.length === 0)) el.remove();
  });

  // loops
  root.querySelectorAll("[data-loop]").forEach(loopEl => {
    const key = loopEl.getAttribute("data-loop");
    const arr = get(data, key);
    if (!Array.isArray(arr)) { loopEl.replaceWith(document.createComment("loop-empty")); return; }

    const tpl = loopEl.cloneNode(true);
    loopEl.innerHTML = "";
    arr.forEach(item => {
      const node = tpl.cloneNode(true);
      node.removeAttribute("data-loop");
      // inside of node: bind text/attrs/loops recursively
      bindNode(node, item);
      // append node children (flatten)
      loopEl.append(...Array.from(node.childNodes));
    });
  });

  // single binds
  root.querySelectorAll("[data-bind]").forEach(el => {
    const key = el.getAttribute("data-bind");
    setText(el, get(data, key));
  });
  // attr binds
  root.querySelectorAll("[data-bind-src]").forEach(el => {
    const key = el.getAttribute("data-bind-src");
    const val = get(data, key);
    if (val) el.setAttribute("src", val);
  });
  root.querySelectorAll("[data-bind-alt]").forEach(el => {
    const key = el.getAttribute("data-bind-alt");
    const val = get(data, key);
    if (val) el.setAttribute("alt", val);
  });
  root.querySelectorAll("[data-bind-href]").forEach(el => {
    const key = el.getAttribute("data-bind-href");
    const val = get(data, key);
    if (val) el.setAttribute("href", val);
  });
}

function bindNode(node, data) {
  bindAll(node, data); // handle nested first
  // then again to catch elements created/leftover
  bindAll(node, data);
}

window.__loadResume__ = async function (jsonPath) {
  try {
    const data = await loadJSON(jsonPath);
    bindAll(document, data);
  } catch (e) {
    console.error(e);
  }
};
