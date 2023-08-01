<template>
  <article class="container base">
    <h4>기본정보</h4>
    <div class="inner jcsb">
      <section>
        <div class="goods">
          <div class="goods-inner flex">
            <label for="goods-code" class="title">상품코드</label>
            <input type="text" id="goods-code" />
          </div>
          <div class="goods-inner flex">
            <label for="goods-name" class="title">상품명</label>
            <input type="text" id="goods-name" />
          </div>
        </div>
        <div class="category-wrap flex">
          <label for="category" class="title">분류</label>
          <div class="select-box">
            <select class="category cp" @click="doFocus">
              <option value="대분류">대분류</option>
            </select>
            <select class="category cp" @click="doFocus">
              <option value="중분류">중분류</option>
            </select>
            <select class="category cp" @click="doFocus">
              <option value="소분류">소분류</option>
            </select>
          </div>
        </div>
        <div class="delivery-select flex">
          <p class="title">택배사</p>
          <select class="category cp" @click="doFocus">
            <option value="1">우체국택배</option>
            <option value="1">cj대한통운</option>
            <option value="1">한진택배</option>
            <option value="1">롯데택배</option>
          </select>
        </div>
        <div class="delivety-price flex">
          <label for="price" class="title">배송비</label>
          <input type="text" id="price" />
        </div>
      </section>
      <section>
        <ul>
          <li class="flex">
            <label for="salePrice" class="title">판매가</label
            ><input type="text" id="salePrice" />
          </li>
          <li class="flex">
            <label for="supplyPrice" class="title">공급가</label
            ><input type="text" id="supplyPrice" />
          </li>
          <li class="flex">
            <label for="discountPrice" class="title">할인가</label
            ><input type="text" id="discountPrice" />
          </li>
        </ul>
      </section>
    </div>
  </article>
  <article class="container details">
    <h4>이미지정보</h4>
    <div class="inner">
      <section>
        <p class="title">상품이미지</p>
        <div class="img-container">
          <ImgUpload
            :src="imgSrc"
            :alt="imgAlt"
            :label-text="'대표이미지'"
            :imgShow="imgShow"
            :labelShow="labelShow"
            @imaFileUpload="imgFileUpload"
          />
        </div>
      </section>
      <section>
        <p class="title">상품상세</p>
        <div class="goods-detail">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import ImgUpload from "@/components/items/ImgUploadInput.vue";
const imgShow = ref(false);
const labelShow = ref(true);
const imgSrc = ref();
const imgAlt = ref("");
const files = ref();
const doFocus = (e: any) => {
  removeFocus();
  e.target.classList.add("focus");
};

const removeFocus = () => {
  let category = document.getElementsByClassName("category");
  for (let i = 0; i < category.length; i++) {
    category[i].classList.remove("focus");
  }
};

const imgFileUpload = (e: any) => {
  files.value = e.target.files[0];

  const reader = new FileReader();
  reader.onload = (e: any) => {
    imgSrc.value = e.target.result;
  };

  reader.readAsDataURL(files.value);
};
files.value = "";
watchEffect(
  (files.value,
  () => {
    if (files.value !== "") {
      imgShow.value = true;
      labelShow.value = false;
    }
  })
);
</script>

<style lang="scss" scoped>
.base {
  margin-bottom: 1.5%;
}

.flex {
  margin: 10px 0;
  align-items: center;
}
.inner {
  width: 100%;
  margin-top: 1.5%;
  padding: 1.5% 5%;
  border-radius: 5px;
  background: #fff;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  font-size: 0.85rem;
  section {
    width: 49%;
    select {
      width: 80%;
      padding: 5px 10px;
      border: 1px solid #c4c4c4;
      transition: 0.3s;
    }
    .focus {
      transition: 0.3s;
      border: 1px solid rgb(23, 77, 194);
    }
  }
}

.title {
  display: block;
  width: 100px;
  margin-right: 10px;
  font-weight: bold;
}

input[type="text"] {
  width: 80%;
  padding: 5px 10px;
  border: 1px solid #c4c4c4;
  transition: 0.3s;
  &:focus {
    transition: 0.3s;
    border: 1px solid rgb(23, 77, 194);
  }
}

.category-wrap {
  .select-box {
    width: 80%;
    display: flex;
    justify-content: space-between;
    select {
      width: 33%;
    }
  }
}

.details section {
  width: 100%;
  .title {
    margin: 10px 0;
  }
  .img-container {
    width: 100%;
  }

  .goods-detail {
    width: 100%;
    textarea {
      width: 100%;
      padding: 2%;
      resize: none;
      border-radius: 5px;
      background: #f5f5f5;
    }
  }
}
</style>
