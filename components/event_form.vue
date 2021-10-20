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
              <label for="events-form-name" class="details-date-label"
                >Контактное лицо</label
              >
              <div class="events-form-item-w">
                <input
                  type="text"
                  placeholder="Имя"
                  class="events-form-item events-form-name"
                  id="events-form-name"
                />
              </div>
            </div>

            <div class="events-form-div">
              <label for="events-form-company" class="details-date-label"
                >Название компании</label
              >
              <div class="events-form-item-w">
                <input
                  type="text"
                  placeholder="Введите название"
                  class="events-form-item events-form-company"
                  id="events-form-company"
                />
              </div>
            </div>

            <div class="events-form-div">
              <label for="events-form-phone" class="details-date-label">Телефон</label>
              <div class="events-form-item-w">
                <input
                  type="text"
                  placeholder="Телефон"
                  class="events-form-item events-form-name"
                  id="events-form-phone"
                />
              </div>
            </div>

            <div class="events-form-div">
              <label for="events-form-email" class="details-date-label">Email</label>
              <div class="events-form-item-w">
                <input
                  type="text"
                  placeholder="Электронная почта"
                  class="events-form-item events-form-company"
                  id="events-form-email"
                />
              </div>
            </div>

            <div class="events-textarea-w">
              <label for="events-textarea" class="details-date-label">Комментарий</label>
              <textarea
                placeholder="Напишите Ваши пожелания, идеи и дополнительную информацию по мероприятию, чтобы наш менеджер смог подготовить самое выгодное предложение!"
                name=""
                id=""
                cols="30"
                rows="10"
                class="events-textarea"
                id="events-textarea"
              ></textarea>
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
              </div>
            </div>
          </div>
          <div class="arrow-left" @click = "changeEventComponent"></div>
          <div class="arrow-right" @click = "changeEventComponent"></div>
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
