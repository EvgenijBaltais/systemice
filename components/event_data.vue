<template>
  <div class="event-details">
    <div class="details-header">
      <div class="details-header-title">
        <span class="details-text-span">ДЕТАЛИ</span>
        <span class="details-step-span">Шаг № 1</span>
      </div>
      <div class="details-progress-mini">
        <div class="details-half-filled"></div>
      </div>
      <div class="details-body">
        <div class="details-body-left">
          <div class="details-body-field">
            <div class="details-body-field-w">
              <date-picker
              placeholder="Дата мероприятия"
              :editable="editable"
              v-model="value1"
              type="date"
              format="DD-MM-YYYY"
              :clearable="false"
              :disabled-date="(date) => date < tomorrow"
              ></date-picker>
              <div class="field-datepicker" @click="calendarClick"></div>
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>
          <div class="details-body-field">
            <div class="details-body-field-w">
              <div class="details-input-block">
                <input
                type="text"
                class="details-input"
                placeholder="Количество гостей"
                />
              </div>
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>
          <div class="details-body-field">
            <div class="details-input-block details-multiple-values">
              <input
              type="text"
              class="details-input"
              placeholder="Формат мероприятия"
              readonly="readonly"
              @click="showAllValues"
              />
              <div class="details-inputs-hidden">
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 1"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 2"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 3"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
              </div>
              <div class="field-arrow" @click="arrowClick"></div>
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>
          <div class="details-body-field">
            <div class="details-input-block">
              <input
              type="text"
              class="details-input"
              placeholder="Бюджет"
              />
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>
          <div class="details-body-field details-body-field-status">
            <span class="details-save-status">Сохранено</span>
          </div>
        </div>
        <div class="details-body-right">
          <div class="details-body-field">
            <div class="details-body-checkboxes">
              <input type="checkbox" id="cb1" />
              <label for="cb1" class="label-cb1">Дата предварительная</label>
            </div>
          </div>
          <div class="details-body-field details-body-two-items">
            <div class="details-half-width">
            <div class="details-input-block details-multiple-values">
              <input
              type="text"
              class="details-input"
              placeholder="Мужчин"
              readonly="readonly"
              @click="showAllValues"
              />
              <div class="details-inputs-hidden">
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 1"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 2"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 3"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
              </div>
              <div class="field-arrow" @click="arrowClick"></div>
            </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>
            <div class="details-half-width">
            <div class="details-input-block details-multiple-values">
              <input
              type="text"
              class="details-input"
              placeholder="Женщин"
              readonly="readonly"
              @click="showAllValues"
              />
              <div class="details-inputs-hidden">
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 1"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 2"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 3"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
              </div>
              <div class="field-arrow" @click="arrowClick"></div>
            </div>

              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>
          </div>
          <div class="details-body-field">
            <div class="details-input-block details-multiple-values">
              <input
              type="text"
              class="details-input"
              placeholder="Место проведения"
              readonly="readonly"
              @click="showAllValues"
              />
              <div class="details-inputs-hidden">
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 1"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 2"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
                <div class="details-inside-block">
                  <input
                  type="text"
                  class="details-input"
                  value="Вариант 3"
                  readonly="readonly"
                  @click="getThisValue"
                  />
                </div>
              </div>
              <div class="field-arrow" @click="arrowClick"></div>
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>


          <div class="details-body-field">
            <div class="details-body-field-w">
              <div class="details-input-block">
                <input
                type="text"
                class="details-input"
                placeholder="Сайт компании/ссылка на соц. сети"
                />
              </div>
            </div>
            <div class="spy-left-input"></div>
            <div class="spy-bottom-input"></div>
            <div class="spy-right-input"></div>
            <div class="spy-top-input"></div>
          </div>

          <div class="to-next-step" @click = "changeEventComponent">
            <span>К следующему шагу</span>
              <div class="spy-left-btn"></div>
              <div class="spy-bottom-btn"></div>
              <div class="spy-right-btn"></div>
              <div class="spy-top-btn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import "vue2-datepicker/locale/ru";

export default {
  data() {
    return {
      siblingComponent: 'eventForm',
      value1: null,
      tomorrow: new Date() - 1000 * 60 * 60 * 24,
      editable: false,
    };
  },
  components: {
    DatePicker
  },
  methods: {

    changeEventComponent(e){

      this.$emit('updateStatus', this.siblingComponent)
    },

    calendarClick(e) {
      let ev = new Event("focus");
      e.target.parentElement.querySelector("input").dispatchEvent(ev);
    },

    arrowClick(e) {
      let ev = new Event("click");
      e.target.parentElement.querySelector("input").dispatchEvent(ev);
    },

    showAllValues(e) {
      if (e.target.parentElement.classList.contains("details-multiple-values")) {
        e.target.parentElement.classList.contains("details-multiple-values-opened")
        ? e.target.parentElement.classList.remove("details-multiple-values-opened")
        : e.target.parentElement.classList.add("details-multiple-values-opened");
      }
    },

    getThisValue(e) {
      this.getParent(e.target, "details-multiple-values").querySelector(
        ".details-input"
        ).value = e.target.value;
      this.getParent(e.target, "details-input-block").classList.remove(
        "details-multiple-values-opened"
        );
    },

    getParent: function (el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
    },
  },
  mounted() {},
};
</script>
