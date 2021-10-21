<template>
  <div class="event-details">
    <div class="details-header">
      <div class="details-header-title">
        <span class="details-text-span">Контакты</span>
        <span class="details-step-span">Финал</span>
      </div>
      <div class="details-progress-mini">
        <div class="details-full-filled"></div>
      </div>
      <div class="details-body">
        <div class="events-form">
          <div class="events-form-div">
            <div class="events-form-item-w">
              <input
              type="text"
              placeholder="Контактное лицо"
              class="events-form-item events-form-name"
              id="events-form-name"
              />
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>

          <div class="events-form-div">
            <div class="events-form-item-w">
              <input
              type="text"
              placeholder="Название компании"
              class="events-form-item events-form-company"
              id="events-form-company"
              />
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>

          <div class="events-form-div">
            <div class="events-form-item-w">
              <input
              type="text"
              placeholder="Телефон"
              class="events-form-item events-form-name"
              id="events-form-phone"
              />
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>

          <div class="events-form-div">
            <div class="events-form-item-w">
              <input
              type="text"
              placeholder="Email"
              class="events-form-item events-form-company"
              id="events-form-email"
              />
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>

          <div class="events-textarea-w">
            <label for="events-textarea" class="details-date-label">Комментарий</label>
            <div class = "events-textarea-border-w">
              <textarea
              placeholder="Напишите Ваши пожелания, идеи и дополнительную информацию по мероприятию, чтобы наш менеджер смог подготовить самое выгодное предложение!"
              name=""
              id=""
              cols="30"
              rows="10"
              class="events-textarea"
              id="events-textarea"
              ></textarea>
              <div class="spy-left-textarea"></div>
              <div class="spy-bottom-textarea"></div>
              <div class="spy-right-textarea"></div>
              <div class="spy-top-textarea"></div>
            </div>
          </div>

          <div class="events-file-block">
            <div class="events-add-brief">
              <input
              type="file"
              name="file"
              id="field__file"
              class="field__file-input"
              multiple
              />
              <label class="field__file-wrapper" for="field__file">
                <a class="add-brief">Прикрепить бриф</a>
              </label>
            </div>
            <div class="to-next-step-final">
              <span>Отправить</span>
              <div class="spy-left-btn"></div>
              <div class="spy-bottom-btn"></div>
              <div class="spy-right-btn"></div>
              <div class="spy-top-btn"></div>
            </div>
          </div>
        </div>
        <div class="arrow-left-event" @click = "changeEventComponent"></div>
        <div class="arrow-right-event" @click = "changeEventComponent"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      siblingComponent: 'eventData'
    }
  },
  components: {},
  methods: {

    changeEventComponent(e){

      this.$emit('updateStatus', this.siblingComponent)
    },


    getParent: function (el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
    },
  },
  mounted() {},
};
</script>
