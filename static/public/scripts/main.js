// Modal

const modal = document.querySelector(".modal");
const html = document.querySelector("html");

const showModal = () => {
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
};

const hideModal = () => {
  modal.classList.remove("is-active");
  html.classList.remove("is-clipped");
};

document.querySelector("a.show-modal").addEventListener("click", (e) => {
  e.preventDefault();
  showModal();
});

modal.querySelector(".modal .delete").addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
});

// Form Submition
const form    = document.querySelector("#note-form");
const url     = form.getAttribute("action");
const method  = form.getAttribute("method");

const prependNote = html => {
  const noteList =  document.querySelector(".notes-list");
  const div =       document.createElement("div");
  div.innerHTML =   html;
  noteList.insertBefore(div.firstChild, noteList.firstChild);
};

const updateNote = html => {
  const article = document.querySelector("article");
  const div =     document.createElement("div");
  div.innerHTML = html;
  article.parentNode.replaceChild(div.firstChild, article);
};

const onSuccess = html => {
  hideModal();
  form.reset();

  if (method == "POST") {
    prependNote(html);
  } else if (method == "PUT") {
    updateNote(html);
  }
};

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(url, {
    method,
    body: new FormData(form)
  })
    .then(response => response.text())
    .then(text => onSuccess(text))
    .catch(error => console.log(error));
});
