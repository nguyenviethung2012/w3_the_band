// <!-- MOBILE Script -->
// <script>

    // Khai báo biến
    const header = document.querySelector('#header');
    const menuButton = document.querySelector('.header_menu');
    const headerHeight = header.getBoundingClientRect().height;
    const menuOptions = document.querySelectorAll('.menu_option');
    const moreButton = document.querySelector('#more');
    const subNav = document.querySelector('.header_subnav');
    const subMenuOptions = document.querySelectorAll('.subMenu_option');



    // Đóng mở menu 
    function showMenu() {
        let menuIsClosed = header.getBoundingClientRect().height === headerHeight;
        let moreIsOpened = subNav.classList.contains('display-block-mobile');
        if (menuIsClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null; /* lúc này sẽ lấy lại giá trị cũ */
            // nếu menu con đang mở thì cũng đóng nó vào nốt
            if (moreIsOpened) {
                subNav.classList.remove('display-block-mobile');
            }
        }
    }
    menuButton.addEventListener('click', showMenu);
// Done: đóng mở menu


    // logic khi click vào option của menu (đóng menu, chạy đến bookmark - tự động xong)
    for (const option of menuOptions) {
        // var isParentMenu = option.nextElementSibling && option.nextElementSibling.classList.contains("subnav");
        option.addEventListener('click', function(event) {
            if (option == moreButton) {
                event.preventDefault();

            } else {
                header.style.height = null;
            }
        });
    }
// Done: click to option of menu --> close menu, move to bookmark



    // Logic: click to option "More" --> open subnav
    function showMore() {
        let moreIsOpened = subNav.classList.contains('display-block-mobile');
        if (moreIsOpened) {
            subNav.classList.remove('display-block-mobile');
        } else {
            subNav.classList.add('display-block-mobile');
        }
    }
    moreButton.addEventListener('click', showMore);
// Done: click to option "More" --> open subnav



    // logic: click to option in subnav --> close menu 
    for (const option of subMenuOptions) {
        option.addEventListener('click', function(event) {             
                header.style.height = null;
        });
    }

// </script>
// <!-- End: Mobile Script -->