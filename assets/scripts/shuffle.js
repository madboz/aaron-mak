const photoDump  = document.getElementsByClassName("photo-dump")[0];

for (let i = photoDump.children.length; i >= 0; i--) {
    photoDump.appendChild(photoDump.children[Math.random() * i | 0]);
};