<template>
    <div class="d-flex footer justify-content-between">
        
        <NavItems />

        <div class="contact-section">
            <div class="d-flex contacts">
                <div class="d-flex align-items-center item">
                    <i class="fas fa-envelope"></i>
                    <p>edijsapse@gmail.com</p>
                </div>
                <div class="d-flex align-items-center item">
                    <i class="fas fa-phone"></i>
                    <p>+371 29597764</p>
                </div>
            </div>
            <p class="copyright">© 2020 Edijs Apse. All rights reserved.</p>
        </div>
    </div>
</template>

<script>

import NavItems from '@/components/NavItems';

export default {
    components: {
        NavItems
    }
}
</script>