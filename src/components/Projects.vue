<template>
    <div id="projects" class="section projects">
        <image-preview :images="images" @closed="images = []" />
        <div class="text-center">
            <h2>Projects</h2>
        </div>
        <div class="row justify-content-center">
            <div v-for="(project, index) in projects" :key="index" class="col-xs-12 col-sm-12 col-md-6 col-lg-3 project-wrapper">
                <div class="project">
                    <div class="img-container position-relative">
                        <img :src="project.images[0]" class="img-fluid" :alt="projects.title"/>
                        <span class="more-images" @click="images = project.images" v-if="project.images.length > 1">+{{ project.images.length }}</span>
                    </div>
                    <h4>{{ project.title }}</h4>
                    <p>{{ project.description }}</p>
                    <div class="d-flex justify-content-center">
                        <a :href="project.link" target="_BLANK">{{ project.linkAction }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { Projects } from '@/data';
import ImagePreview from '@/components/ImagePreview';

export default {
    data() {
        return {
            projects: Projects,
            images: [],
        }
    },
    components: {
        ImagePreview
    }
}
</script>