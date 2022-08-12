window.onload = () =>{
    initiEvents()
    MenuMobileEvents ()
}

const initEvents = () =>{
    const bars = document.querySelector(".toggle_menu")
    const mainNavigation = document.querySelector(".modal_window_menu")
    const closeButton = document.querySelector(".modal_window_menu .close_button")
    const modalHolder = document.querySelector(".modal_window_menu .modal_holder")

    bars.onclick = () => {
        mainNavigation.classList.add ("opened")
    }

    mainNavigation.onclick = (ev) => {
        const path = ev.composedPath() || ev.path
        if (!path.includes(modalHolder)) {
            mainNavigation.classList.remove("opened")
        }
    }
    closeButton.onclick = () => {
        mainNavigation.classList.remove("opened")
    }

    window.onkeyup = (ev) => {
        if (ev.key = "Escape")
            mainNavigation.classList.remove("opened")
    }

}

const MenuMobileEvents = () => {
    const mobileNavigation = document.querySelector(".mobile_navgation")
    const mobileToggle = document.querySelector(".mobile_toggle")
    mobileToggle.onclick = () => {
        mobileNavigation.classList.toggle("opened")
    }
    window.onscroll = () => {
        mobileNavigation.classList.remove("opened")
    }

} 