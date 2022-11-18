// <!-- MODAL SCRIPT -->
//     <script>

        const buy_buttons = document.querySelectorAll(".js-buy-ticket");

        const modal = document.querySelector(".js-modal");

        const close_buttons = document.querySelectorAll(".js-close-modal");

        const modal_container = document.querySelector(".js-modal-container");

        modal_container.addEventListener('click', function(event) {
            event.stopPropagation();
        })

        function showModal() {
            modal.classList.add("modal-open");
        }

        function hideModal() {
            modal.classList.remove("modal-open");
        }

        for (const buy_button of buy_buttons) {
            buy_button.addEventListener('click', showModal);
        }

        for (const close_button of close_buttons) {
            close_button.addEventListener('click', hideModal);
        }

        modal.addEventListener('click', hideModal);
    {/* </script>
    <!-- End: Modal Script --> */}