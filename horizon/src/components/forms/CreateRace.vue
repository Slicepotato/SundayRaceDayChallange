<template>
    <section>
        <h2>Create a new Race Event</h2>
        <form action="" class="form">
            <ul>
                <li>
                    <label>Race Date</label>
                    <Datepicker
                        v-model="picked"
                        :locale="locale"
                        :upperLimit="to"
                        :lowerLimit="from"
                        :clearable="true"
                    />
                </li>
            </ul>
        </form>
    </section>
</template>

<script>
    import Datepicker from 'vue3-datepicker'

    export default {
        components: {
            Datepicker
        },
        data() {
            return {
                picked: this.picked
            }
        },
    }
</script>