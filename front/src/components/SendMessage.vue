<template>
  <div class="send">
    <form class="send__form">
        <div class="send__form-group">
            <div class="icon--box icon--menu">
                <svg class="send__icon icon">
                    <use xlink:href="../assets/sprite.svg#icon-clip"></use>
                </svg>
            </div>
            <input name="message" class="send__input" type="text" focus>
            <div class="icon--box icon--menu">
                <svg class="icon">
                    <use xlink:href="../assets/sprite.svg#icon-camera"></use>
                </svg>
            </div>
        </div>
        <div class="icon--box icon--menu">
            <svg class="icon icon--mic">
                <use xlink:href="../assets/sprite.svg#icon-mic"></use>
            </svg>
        </div>
    </form>
    </div>
</template>

<script>
export default {
    name: 'SendMessage'
}
</script>