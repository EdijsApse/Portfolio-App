<template>
    <div>
        <Intro />

        <Projects />

        <Skills />

        <Personality />

        <Journey />
    </div>
</template>

<script>

import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Personality from '@/components/Personality';
import Skills from '@/components/Skills';

export default {
    components: {
        Intro,
        Projects,
        Journey,
        Personality,
        Skills
    }
}
</script>