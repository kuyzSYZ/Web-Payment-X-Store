
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const about = document.getElementById('about');
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    about.classList.add('active');
                }, 200);
            }, 2500);
        });

        function showPayment() {
            const about = document.getElementById('about');
            const payment = document.getElementById('payment');
            const productStore = document.getElementById('product-store');
            
            about.classList.remove('active');
            about.classList.add('hidden');
            productStore.classList.remove('active');
            
            setTimeout(() => {
                payment.classList.remove('hidden');
                payment.classList.add('active');
            }, 900);
        }

        function showAbout() {
            const payment = document.getElementById('payment');
            const about = document.getElementById('about');
            const productStore = document.getElementById('product-store');
            
            payment.classList.remove('active');
            payment.classList.add('hidden');
            productStore.classList.remove('active');
            
            setTimeout(() => {
                about.classList.remove('hidden');
                about.classList.add('active');
            }, 900);
        }

        function showProductStore() {
            const about = document.getElementById('about');
            const payment = document.getElementById('payment');
            const productStore = document.getElementById('product-store');
            
            about.classList.remove('active');
            about.classList.add('hidden');
            payment.classList.remove('active');
            payment.classList.add('hidden');
            
            setTimeout(() => {
                productStore.classList.add('active');
                window.scrollTo(0, 0);
            }, 900);
        }

        function zoomQR() {
            const qrImage = document.getElementById('qrisImage').src;
            const overlay = document.getElementById('qrOverlay');
            document.getElementById('zoomedQR').src = qrImage;
            overlay.classList.add('active');
        }

        function closeZoom() {
            const overlay = document.getElementById('qrOverlay');
            overlay.classList.remove('active');
        }

        function showPopup(id) {
            document.getElementById(id).classList.add('active');
        }

        function hidePopup(id) {
            document.getElementById(id).classList.remove('active');
        }
    