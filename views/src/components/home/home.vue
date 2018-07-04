<template>
    <div>
        <div class="row">
            <div class="col">
                <roomone></roomone>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <roomadd></roomadd>
            </div>
        </div>
    </div>
</template>

<script>
    import roomadd from "../card/roomadd.vue";
    import roomone from '../card/roomone.vue'
    
    export default {
        components: {
           roomadd,roomone
        }
    };
</script>

