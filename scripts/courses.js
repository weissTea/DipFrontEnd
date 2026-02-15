 const menuBox = document.getElementById("menuBox");
    const toggle = document.getElementById("menuToggle");
    const menuList = document.getElementById("menuList");

    function setOpen(open){
      menuBox.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(!menuBox.classList.contains("open"));
    });

    // click outside closes
    document.addEventListener("click", () => setOpen(false));

    // prevent closing when clicking inside menu
    menuList.addEventListener("click", (e) => e.stopPropagation());