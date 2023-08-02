<template>
  <section class="calendar-container">
    <div class="calendar-header">
      <v-btn
        icon="mdi-chevron-left"
        variant="plain"
        @click="changeMonth(-1)"
      ></v-btn>
      <p class="title">
        {{ currentYearMonthDay.year }} 년 {{ currentYearMonthDay.month + 1 }} 월
      </p>
      <v-btn
        icon="mdi-chevron-right"
        variant="plain"
        @click="changeMonth(1)"
      ></v-btn>
    </div>
    <div class="calendar-body">
      <article class="weeks">
        <div v-for="(week, i) in weeks" :key="i">{{ week }}</div>
      </article>
      <article class="days-container">
        <div
          class="days"
          v-for="(day, i) in dayOfMonth"
          :key="i"
          :class="{ currentDay: currentDate === day.dayInfo?.fullDay }"
          @click="setSchedule(day.dayInfo?.fullDay)"
        >
          <p class="date">{{ day.day }}</p>
        </div>
      </article>
    </div>
  </section>
  <ScheduleModal :date="date" :isOpen="isOpen" />
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { CalendarInterface } from "@/interfaces/CalandarInterface";
import ScheduleModal from "@/components/modals/ScheduleModal.vue";
const date = ref("");
const isOpen = ref(false);
const getDateInfo: Date = new Date();
const weeks: ReadonlyArray<string> = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
];

const currentDate = ref<string>(
  getDateInfo.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
);
const currentYearMonthDay = reactive<CalendarInterface.yearMonthDayType>({
  year: getDateInfo.getFullYear(),
  month: getDateInfo.getMonth(),
  day: getDateInfo.getDay(),
});

const dayOfMonth = ref<CalendarInterface.dayOfMonthType[]>([]);
const daysOfMonth = (year: number, month: number): void => {
  const startDayMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  repeatAddCurrentDays(startDayMonth, null);
  repeatAddCurrentDays(lastDateOfMonth);
  const currentDaysLength = dayOfMonth.value.length;
  if (currentDaysLength % 7 !== 0) {
    repeatAddCurrentDays(7 - (currentDaysLength % 7), null);
  }
};

const repeatAddCurrentDays = (untilNum: number, value?: null): void => {
  if (value !== null) {
    for (let i = 0; i < untilNum; i++) {
      dayOfMonth.value.push({
        day: i + 1,
        dayInfo: {
          fullDay: `${currentYearMonthDay.year}. ${
            currentYearMonthDay.month + 1
          }. ${i + 1}.`,
        },
      });
    }
  } else {
    for (let i = 0; i < untilNum; i++) {
      dayOfMonth.value.push({
        day: null,
      });
    }
  }
};

const changeMonth = (val: number): void => {
  getDateInfo.setMonth(getDateInfo.getMonth() + val);
  currentYearMonthDay.month = getDateInfo.getMonth();
  currentYearMonthDay.year = getDateInfo.getFullYear();
  dayOfMonth.value = [];
  daysOfMonth(currentYearMonthDay.year, currentYearMonthDay.month);
};

onMounted(() => {
  daysOfMonth(currentYearMonthDay.year, currentYearMonthDay.month);
});

const setSchedule = (e: any) => {
  isOpen.value = true;
  date.value = e;
  console.log(e);
};
</script>

<style lang="scss" scoped>
.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  .v-btn {
    margin: 0 5%;
  }
}

.calendar-body {
  flex-grow: 1;
  font-size: 0.8rem;
  .weeks {
    display: grid;
    grid-column: 1/8;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    text-transform: capitalize;
    div {
      margin-top: 10px;
      padding: 5px 0;
      font-weight: bold;
      border: 1px solid #eee;
      border-bottom: none;
      &:nth-child(2n) {
        border-left: none;
        border-right: none;
      }
      &:nth-child(1) {
        color: rgb(211, 0, 0);
      }
      &:last-child {
        color: rgb(58, 58, 240);
      }
    }
  }
}

.days-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 15vh;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  .days {
    padding: 10px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    p {
      text-align: center;
    }
    &:nth-child(7n + 1) p {
      color: rgb(211, 0, 0);
    }
    &:nth-child(7n) {
      color: rgb(58, 58, 240);
    }
  }
}

.currentDay {
  position: relative;
  color: #fff;
  z-index: 5;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    right: 50%;
    transform: translate(50%);
    width: 25px;
    height: 25px;
    background: rgb(147, 166, 253);
    border-radius: 50%;
    z-index: -1;
  }
}
</style>
