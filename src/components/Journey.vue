<template>
    <div id="journey" class="section jorney">
        <div class="text-center">
            <h2>Journey</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-md-10 col-lg-7">
                <div class="d-flex">
                    <div class="timeline">
                        <span v-for="(course, index) in courses" :key="index">
                            <div class="course d-flex align-items-center justify-content-center" :class="{active: activeCourse === index}" @click="activeCourse = index"><i class="fas fa-user-graduate"></i></div>
                            <div v-show="index + 1 != courses.length" class="line-wrapper"><span class="line"></span></div>
                        </span>
                    </div>
                    <div class="course-description">
                        <transition name="fade" mode="out-in">
                            <div :key="activeCourse">
                                <h4>{{ activeItem.title }}</h4>
                                <h5>Content</h5>                      
                                <ul>
                                    <li v-for="(content, contentKey) in activeItem.content" :key="contentKey"><i class="far fa-star"></i>{{ content }}</li>
                                </ul>
                                <h5>Projects</h5>
                                <ul>
                                    <li v-for="(project, projectIndex) in activeItem.projects" :key="projectIndex"><i class="fas fa-star"></i>{{ project }}</li>
                                </ul>
                                <div class="d-flex align-items-center intensity">
                                    <i class="fa fa-clock"></i>
                                    <p>Intentsity:</p>
                                    <span>{{ activeItem.intensity }} Hours</span>
                                </div>
                                <div class="d-flex">
                                    <a class="course-link" target="_BLANK" :href="activeItem.link">More info</a>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { courses } from '@/data';

export default {
    data() {
        return {
            courses: courses,
            activeCourse: 0
        }
    },
    computed: {
        activeItem() {
            return this.courses[this.activeCourse]
        }
    },
}
</script>