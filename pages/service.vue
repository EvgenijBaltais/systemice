<template>
  <div class="wrapper service">
    <div class="bl-l fl-column">
      <div class="main-logo-left">
        <mainLogo />
      </div>
      <div class="bl-menu-title">
        <span class="company-name">УСЛУГИ</span>
      </div>
      <div class="bl-pagination">
        <span class="active-page">02 </span>
        <span class="bl-page"> / 08</span>
      </div>
    </div>
    <div class="main">
      <pageHeader />
      <div class="content-box">
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/online.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">ОНЛАЙН-МЕРОПРИЯТИЯ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="https://systemice-stream.ru/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Онлайн-мероприятия всех форматов. Более 500 проведенных мероприятий
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{ backgroundImage: `url(${require('../assets/images/akk.jpg')})` }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">АККАУНТ-МЕНЕДЖЕР</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
            </div>
            <p class="bl-desc">
              работает с клиентами компании и обеспечивает их лояльность, выполнение всех
              необходимых клиенту задач, находит к каждому заказчику индивидуальный подход
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/games-pic.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">Бизнес-игры</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a
                href="/services/games/"
                target="_blank"
                class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Бизнес-игры ― отличная современная альтернатива тимбилдингу
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/event-expert-pic.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">Аудит сметы</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a
                href="/services/event_expert/"
                target="_blank"
                class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Предлагаем Вам профессиональный аудит сметы
            </p>
          </div>
        </div>
      </div>
      <div class="footer-mob">
        <div class="bl-pagination">
          <span class="active-page">02 </span>
          <span class="bl-page"> / 08</span>
        </div>
        <copyright />
      </div>
    </div>
    <blRight />
  </div>
</template>

<script>
import blRight from "@/components/bl_right";
import mainLogo from "@/components/main_logo";
import copyright from "@/components/copyright";
import pageHeader from "@/components/page_header";

export default {
  head() {
    return {
      title: "Услуги - Systemice Group Системайс Хотел Групп",
      meta: [
      {
        hid: 'name',
        name: 'name',
        content: 'Systemice Group'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам'
      },
      {
          hid: 'og:title',
          name: 'og:title',
          content: 'Systemice Group Системайс Хотел Групп',
      },
      {
          hid: 'og:image',
          property: 'og:image',
          content: ``,
      },
      {
          hid: 'og:description',
          property: 'og:description',
          content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам',
      },
      {
          hid: 'og:url',
          property: 'og:url',
          content: ``,
      }
      ],
    };
  },
  data() {
    return {
    }
  },
  components: {
    blRight,
    pageHeader,
    mainLogo,
    copyright,
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>
