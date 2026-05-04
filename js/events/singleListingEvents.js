export function changeMainImage() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest("[data-action]");
    if (!button) return;

    const container = button.closest("[data-carousel]");
    const image = container.querySelector('[data-role="main-image"]');

    const media = JSON.parse(container.dataset.media);
    let index = Number(image.dataset.index);

    if (button.dataset.action === "next") {
      index++;
    } else if (button.dataset.action === "prev") {
      index--;
    }

    if (index >= media.length) index = 0;
    if (index < 0) index = media.length - 1;

    const imageUrl = media[index]?.url;

    image.src =
      imageUrl && imageUrl.trim() !== ""
        ? imageUrl
        : "/images/placeholder-img.jpg";

    image.dataset.index = index;
  });
}
