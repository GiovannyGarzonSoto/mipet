<template>
    <div class="card">
    <div class="card__header">
        <img src="../assets/images/person1.jpg" alt="Lorem Dolor" class="card__avatar">
        <h2 class="card__name"><router-link tag="p" to="/profile" >Sigma Lorem</router-link></h2>
    </div>
    <img class="card__hero" src="../assets/images/publication.jpg" alt="dog and human">
    <div class="card__footer">
        <img class="card__petprofile" src="../assets/images/dog-profile.jpg" alt="dog">
        <div class="card__reactions">
            <router-link class="minicon--box icon-tag" to="/news" tag="div">
                <svg class="minicon">
                    <use xlink:href="../assets/sprite.svg#icon-price-tag"></use>
                </svg>
            </router-link>

            <router-link class="minicon--box icon--chat" to="/news" tag="div">
                <svg class="minicon">
                    <use xlink:href="../assets/sprite.svg#icon-chat-right"></use>
                </svg>
            </router-link>

            <router-link class="minicon--box icon--eye" to="/news" tag="div">
                <svg class="minicon">
                    <use xlink:href="../assets/sprite.svg#icon-eye"></use>
                </svg>
            </router-link>

            <router-link class="minicon--box icon--heart" to="/news" tag="div">
                <svg class="minicon">
                    <use xlink:href="../assets/sprite.svg#icon-heart"></use>
                </svg>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>