const paintings = [
    { id: 3, title: "Tempest", src: "pics/og_res_gradient.png" },
    { id: 1, title: "Ethereal", src: "pics/very recent proj.png" },
    { id: 2, title: "Aka", src: "pics/eltree port.png" },
    { id: 7, title: "Liberated", src: "pics/gae.png" },
    { id: 8, title: "Undying", src: "pics/trio.png" },
    { id: 6, title: "Serpent", src: "pics/snek.png" },
    { id: 9, title: "Ciel", src: "pics/fav.png" },
    { id: 10, title: "Order", src: "pics/greenich.png" },
    { id: 15, title: "Arrival", src: "pics/FinalPhantomTroupe_20210506224623.png" },
    { id: 11, title: "Gold", src: "pics/upvotes.png" },
    { id: 4, title: "Seed", src: "pics/orcsword port.png" },
    { id: 5, title: "Shine", src: "pics/eltandress port.png" },
    { id: 13, title: "Empress", src: "pics/ded.png" },
    { id: 14, title: "Stare", src: "pics/mingot.png" },
    { id: 12, title: "Unravel", src: "pics/new.png" },
   

  ]
  
  const gallery = document.querySelector(".gallery-grid")
  const fullscreenView = document.getElementById("fullscreen-view")
  const fullscreenImage = document.getElementById("fullscreen-image")
  const closeButton = document.getElementById("close-button")
  const fullscreenButton = document.getElementById("fullscreen-button")
  
  function createGalleryItem(painting) {
    const item = document.createElement("div")
    item.classList.add("gallery-item")
  
    const img = document.createElement("img")
    img.src = painting.src
    img.alt = painting.title
  
    // Check image orientation after it's loaded
    img.onload = function () {
      if (this.naturalWidth > this.naturalHeight) {
        item.classList.add("landscape")
      }
    }
  
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = painting.title
  
    item.appendChild(img)
    item.appendChild(title)
    item.addEventListener("click", () => openFullscreen(painting))
  
    return item
  }
  
  function openFullscreen(painting) {
    fullscreenImage.src = painting.src
    fullscreenImage.alt = painting.title
    fullscreenView.classList.remove("hidden")
  
    // Check image orientation after it's loaded
    fullscreenImage.onload = function () {
      if (this.naturalWidth > this.naturalHeight) {
        this.classList.add("landscape")
      } else {
        this.classList.remove("landscape")
      }
    }
  }
  
  function closeFullscreen() {
    fullscreenView.classList.add("hidden")
  }
  
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }
  
  paintings.forEach((painting) => {
    gallery.appendChild(createGalleryItem(painting))
  })
  
  closeButton.addEventListener("click", closeFullscreen)
  fullscreenButton.addEventListener("click", toggleFullscreen)
  
  // Smooth scrolling for all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  // Handle window resize for fullscreen images
  window.addEventListener("resize", () => {
    if (!fullscreenView.classList.contains("hidden")) {
      if (fullscreenImage.naturalWidth > fullscreenImage.naturalHeight) {
        fullscreenImage.classList.add("landscape")
      } else {
        fullscreenImage.classList.remove("landscape")
      }
    }
  })
  
  // Smooth scrolling for the entire page
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "smooth"
  })
  
  