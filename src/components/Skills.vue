<template>
    <div id="skills" class="section skills">
        <div class="text-center">
            <h2>Skills</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-md-10 col-lg-8">
                <p class="skill-intro">
                Everybody says programming is hard, because you need to "upgrade" your skillset all the time.
                In my opinion, thats what makes work in WEB Development so intersting and exciting.
                Every new tech you learn, gives you new "superpower" and for me that is the main goal - be as good, as I can be.
                In my jorney to WEB Developer job I have been learning a lot, but there is still a LOT to learn.
                Some of my existing skills is listed below.
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-sm-12 col-md-11 col-lg-8">
                <div class="d-flex">
                    <div class="d-flex flex-column skills-titles">
                        <div class="title" v-for="(skill, index) in skills" :key="index" :class="{active: activeItem === index}" @click="activeItem = index"> 
                            <p>{{ skill.title }}</p>
                        </div>
                    </div>
                    <div class="skill-description d-flex align-items-center">
                        <div>
                            <transition name="fade" mode="out-in">
                                <p :key="activeSkill.description"><span>Knowledge: </span>{{ activeSkill.description }}</p>
                            </transition>
                            <transition name="fade" mode="out-in">
                                <p :key="activeSkill.level">
                                    <span>Confident:</span>
                                    <i v-for="(level, levelIndex) in maxLevel" :key="levelIndex" :class="['fa-star', (levelIndex + 1 <= activeSkill.level ? 'fas': 'far')]"></i>
                                </p>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { skills } from '@/data';
    export default {
        data() {
            return {
                skills: skills,
                maxLevel: 5,
                activeItem: 0
            }
        },
        computed: {
            activeSkill() {
                return this.skills[this.activeItem];
            }
        },
    }
</script>