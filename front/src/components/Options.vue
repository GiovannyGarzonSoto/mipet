<template>
    <div class="options__header">
        <router-link class="icon--box icon--arrow" to="/news" tag="div">
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-arrow-left"></use>
            </svg>
        </router-link>

        <form class="options__form">
            <div class="options__form-group">
                <input name="options" class="options__input" type="text">
                <label for="options">
                    <svg class="options__icon minicon">
                        <use xlink:href="../assets/sprite.svg#icon-bx-search"></use>
                    </svg>
                </label>
            </div>
        </form>

        <router-link class="icon--box icon--menu" to="/menu" tag="div">
            <svg class="icon">
                <use xlink:href="../assets/sprite.svg#icon-nut"></use>
            </svg>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Options'
}
</script>