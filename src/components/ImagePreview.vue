<template>
    <transition mode="out-in" name="fade">
        <div class="preview-container" v-if="images.length">
            <div class="inner-container">
                <span class="close" @click="closePreview">
                    <i class="fas fa-times"></i>
                </span>
                <div class="image-wrapper">
                    <transition mode="out-in" name="slide-right">
                        <img :key="activeImage" :src="activeImage" class="img-fluid" />
                    </transition>
                </div>
                <div class="d-flex justify-content-center">
                    <span v-for="(image, index) in images" :key="index" class="preview-controll" :class="{active: active === index}" @click="active = index"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    props: ['images'],
    computed: {
        activeImage() {
            return this.images[this.active]
        }
    },
    methods: {
        closePreview() {
            this.active = 0;
            this.$emit('closed')
        }
    },
}
</script>