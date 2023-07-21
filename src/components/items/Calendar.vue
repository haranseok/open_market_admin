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
        <div class="days" v-for="(day, i) in dayOfMonth" :key="i">
          {{ day.day }}
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { CalendarInterface } from "@/interfaces/CalandarInterface";
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
          fullDay: `${currentYearMonthDay.year}.${
            currentYearMonthDay.month + 1
          }.`,
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
  .weeks {
    display: grid;
    grid-column: 1/8;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    text-transform: capitalize;
    div {
      margin-top: 10px;
      font-weight: bold;
      border: 1px solid #eee;
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
  .days {
    border: 1px solid #eee;
    padding: 10px;
  }
}
</style>
