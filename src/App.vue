
<template>
    <div id="app">
        <Navigation />
        
        <div class="container">
            <transition name="fade">
                <router-view v-if="loaded" />
            </transition>
        </div>
        <Footer />
    </div>
</template>

<script>

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default {
    data() {
        return {
            loaded: false,
        }
    },
    created() {
        setTimeout(() => {
            this.loaded = true;
        }, 200)
    },
    components: {
        Footer,
        Navigation
    }
}

</script>