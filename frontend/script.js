document.addEventListener('alpine:init', () => {
    Alpine.data('artistryHaven', () => ({
        // STATE
        view: 'home', // 'home', 'product', 'login', 'admin'
        mobileMenuOpen: false,
        cartOpen: false,
        loginTab: 'login', // 'login', 'register'
        currentSlide: 0,

        // DATA
        heroSlides: [
            {
                image: 'https://placehold.co/1920x1080/f5e6e0/3d3d3d?text=New+Arrivals',
                title: 'Where Art Meets Soul',
                subtitle: 'Explore our handcrafted glass and acrylic paintings',
                buttonText: 'Shop Now'
            },
            {
                image: 'https://placehold.co/1920x1080/e8d0c8/3d3d3d?text=25%25+Off',
                title: 'Autumn Collection Sale',
                subtitle: 'Get 25% off on all seasonal artwork',
                buttonText: 'View Offers'
            },
            {
                image: 'https://placehold.co/1920x1080/d4e6f1/3d3d3d?text=Custom+Art',
                title: 'Create Your Own Masterpiece',
                subtitle: 'Commission a unique piece tailored to your vision',
                buttonText: 'Learn More'
            }
        ],
        user: null, // Holds logged in user object, e.g. {name: 'Admin User', role: 'admin'}
        users: [
            { email: 'admin@artistry.com', password: 'admin', name: 'Admin User', role: 'admin' },
            { email: 'demo@artistry.com', password: 'demo', name: 'Demo User', role: 'customer' }
        ],
        products: [
            { id: 1, name: 'Golden Glass Lotus', price: 1499, image: 'https://placehold.co/600x600/f5e6e0/c97c7c?text=🌸', category: 'Glass Paintings', description: 'Elegant glass painting featuring a golden lotus design with intricate detailing.', status: 'In Stock' },
            { id: 2, name: 'Acrylic Sunset Waves', price: 2199, image: 'https://placehold.co/600x600/d4e6f1/3d3d3d?text=🌊', category: 'Acrylic Paintings', description: 'Vibrant acrylic painting capturing the serene beauty of sunset over waves.', status: 'In Stock' },
            { id: 3, name: 'Royal Peacock Canvas', price: 1899, image: 'https://placehold.co/600x600/e8d0c8/c97c7c?text=🦚', category: 'Mixed Media', description: 'Majestic peacock artwork with rich colors and elaborate feather details.', status: 'Low Stock' },
            { id: 4, name: 'Minimalist Abstract Flow', price: 1299, image: 'https://placehold.co/600x600/faf8f3/3d3d3d?text=✨', category: 'Acrylic Paintings', description: 'Contemporary abstract design with flowing shapes and subtle color transitions.', status: 'In Stock' },
            { id: 5, name: 'Crimson Bloom Glass', price: 1799, image: 'https://placehold.co/600x600/c97c7c/ffffff?text=🌹', category: 'Glass Paintings', description: 'Deep crimson glass painting featuring blooming flowers with metallic accents.', status: 'In Stock' },
            { id: 6, name: 'Blue Mirage Acrylic', price: 1999, image: 'https://placehold.co/600x600/3d3d3d/d4e6f1?text=🌌', category: 'Acrylic Paintings', description: 'Dreamy acrylic artwork with mesmerizing blue tones and ethereal atmosphere.', status: 'Out of Stock' }
        ],
        currentProduct: null,
        cart: [],

        // FORMS
        loginForm: { email: '', password: '' },
        registerForm: { name: '', email: '', password: '' },

        productModal: {
            open: false,
            id: null,
            data: { name: '', price: 0, category: 'Glass Paintings', description: '', image: '', status: 'In Stock' }
        },

        toast: {
            visible: false,
            message: '',
            type: 'success' // 'success' or 'error'
        },

        // COMPUTED
        get cartTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        // METHODS
        init() {
            lucide.createIcons();

            setInterval(() => {
                this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
            }, 5000); // Change slide every 5 seconds

            // This observer re-initializes icons when Alpine makes DOM changes.
            const observer = new MutationObserver(() => {
                lucide.createIcons();
            });
            observer.observe(this.$root, { childList: true, subtree: true });
        },

        showToast(message, type = 'success') {
            this.toast.message = message;
            this.toast.type = type;
            this.toast.visible = true;
            setTimeout(() => this.toast.visible = false, 3000);
        },

        navigate(newView) {
            this.view = newView;
            window.scrollTo(0, 0);
        },

        scrollTo(elementId) {
            if (this.view !== 'home') {
                this.navigate('home');
                this.$nextTick(() => {
                    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
                });
            } else {
                document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
            }
        },

        viewProduct(product) {
            this.currentProduct = { ...product, quantity: 1 };
            this.navigate('product');
        },

        addToCart(product) {
            const existingItem = this.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += (product.quantity || 1);
            } else {
                this.cart.push({ ...product, quantity: product.quantity || 1 });
            }
            this.cartOpen = true;
            this.showToast(`${product.name} added to cart!`);
        },

        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.showToast('Item removed from cart', 'success');
        },

        updateCartQuantity(productId, change) {
            const item = this.cart.find(i => i.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    this.removeFromCart(productId);
                }
            }
        },

        handleLogin() {
            const user = this.users.find(u => u.email === this.loginForm.email && u.password === this.loginForm.password);
            if (user) {
                this.user = user;
                this.showToast(`Welcome back, ${user.name}!`);
                this.navigate(user.role === 'admin' ? 'admin' : 'home');
                this.loginForm = { email: '', password: '' };
            } else {
                this.showToast('Invalid email or password.', 'error');
            }
        },

        handleRegister() {
            if (!this.registerForm.name || !this.registerForm.email || !this.registerForm.password) {
                this.showToast('Please fill all fields.', 'error');
                return;
            }
            const existingUser = this.users.find(u => u.email === this.registerForm.email);
            if (existingUser) {
                this.showToast('Email already registered.', 'error');
                return;
            }
            const newUser = {
                id: this.users.length + 1,
                ...this.registerForm,
                role: 'customer'
            };
            this.users.push(newUser);
            this.showToast('Account created successfully! Please login.');
            this.loginTab = 'login';
            this.registerForm = { name: '', email: '', password: '' };
        },

        logout() {
            this.user = null;
            this.showToast('You have been logged out.');
            this.navigate('home');
        },

        openProductModal(product = null) {
            if (product) {
                this.productModal.id = product.id;
                this.productModal.data = { ...product };
            } else {
                this.productModal.id = null;
                this.productModal.data = { name: '', price: 0, category: 'Glass Paintings', description: '', image: '', status: 'In Stock' };
            }
            this.productModal.open = true;
        },

        saveProduct() {
            if (this.productModal.id) {
                const index = this.products.findIndex(p => p.id === this.productModal.id);
                if (index > -1) {
                    this.products[index] = { ...this.productModal.data, id: this.productModal.id };
                }
                this.showToast('Product updated successfully!');
            } else {
                const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
                this.products.push({ ...this.productModal.data, id: newId });
                this.showToast('Product added successfully!');
            }
            this.productModal.open = false;
        },

        deleteProduct(productId) {
            if (confirm('Are you sure you want to delete this product?')) {
                this.products = this.products.filter(p => p.id !== productId);
                this.showToast('Product deleted.', 'success');
            }
        }
    }));
});

