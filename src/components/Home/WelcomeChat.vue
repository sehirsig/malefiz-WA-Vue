<template>
  <div style="width: 100%; max-width: 900px; font-size: 15pt">
    <q-chat-message
        name="Sebi"
        stamp="7 minutes ago"
        sent
        text-color="white"
        bg-color="primary"
    >
      <div>
        Hey there! Do you fancy a round of Malefiz?
      </div>
    </q-chat-message>
    <q-chat-message
        name="Jojo"
        align="left"
        bg-color="amber"
    >
      <div>
        Absolutely! But I'm not sure how this works...
      </div>
    </q-chat-message>
    <q-chat-message
        name="Sebi"
        sent
        text-color="white"
        bg-color="primary"
    >
      <div>
        No Problem!
      </div>
      <div>
        Take a look at the game instructions which can be found on the menu bar to make yourself familiar with Malefiz
      </div>
      <div>
        Select the about tab to learn more about our project and how it is implemented
      </div>
      <div>
        When you're feeling ready, select the Malefiz tab to start playing
      </div>
    </q-chat-message>
    <q-chat-message
        name="Jojo"
        align="left"
        bg-color="amber"
    >
      <div>
        Got it! Let's go!!!
      </div>
      <q-spinner-dots size="2rem"></q-spinner-dots>
    </q-chat-message>
  </div>
</template>

<script>
export default {
  name: "welcome-chat"
}
</script>

<style scoped>
.my-emoticon {
  vertical-align: middle;
  height: 2em;
  width: 2em; }
</style>