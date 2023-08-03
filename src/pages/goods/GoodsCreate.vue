<template>
  <article class="container base">
    <h4>기본정보</h4>
    <div class="inner jcsb">
      <section>
        <div class="goods">
          <div class="goods-inner flex">
            <label for="goods-code" class="title">상품코드</label>
            <input type="text" id="goods-code" v-model="formData.goodsCode" />
          </div>
          <div class="goods-inner flex">
            <label for="goods-name" class="title">상품명</label>
            <input type="text" id="goods-name" v-model="formData.goodsName" />
          </div>
        </div>
        <div class="category-wrap flex">
          <label for="category" class="title">분류</label>
          <div class="select-box">
            <select
              class="category cp"
              @click="doFocus"
              v-model="formData.categoty.main"
            >
              <option value="대분류">대분류</option>
            </select>
            <select
              class="category cp"
              @click="doFocus"
              v-model="formData.categoty.middle"
            >
              <option value="중분류">중분류</option>
            </select>
            <select
              class="category cp"
              @click="doFocus"
              v-model="formData.categoty.small"
            >
              <option value="소분류">소분류</option>
            </select>
          </div>
        </div>
        <div class="delivery-select flex">
          <p class="title">택배사</p>
          <select
            class="category cp"
            @click="doFocus"
            v-model="formData.delivery"
          >
            <option value="우체국택배">우체국택배</option>
            <option value="cj대한통운">cj대한통운</option>
            <option value="한진택배">한진택배</option>
            <option value="롯데택배">롯데택배</option>
          </select>
        </div>
        <div class="delivety-price flex">
          <label for="price" class="title">배송비</label>
          <input type="text" id="price" v-model="formData.deliveryFee" />
        </div>
      </section>
      <section>
        <ul>
          <li class="flex">
            <label for="salePrice" class="title">판매가</label>
            <input type="text" id="salePrice" v-model="formData.salePrice" />
          </li>
          <li class="flex">
            <label for="supplyPrice" class="title">공급가</label>
            <input
              type="text"
              id="supplyPrice"
              v-model="formData.supplyPrice"
            />
          </li>
          <li class="flex">
            <label for="discountPrice" class="title">할인가</label>
            <input
              type="text"
              id="discountPrice"
              v-model="formData.discountPrice"
            />
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
          <textarea
            name="goodsDetail"
            cols="30"
            rows="10"
            v-model="formData.detail"
          ></textarea>
        </div>
      </section>
    </div>
  </article>
  <div class="btn-container">
    <v-btn @click="gooodsUpload">등록</v-btn>
    <v-btn color="error" @click="router.go(-1)">취소</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import ImgUpload from "@/components/items/ImgUploadInput.vue";

const router = useRouter();
const imgShow = ref(false);
const labelShow = ref(true);
const imgSrc = ref();
const imgAlt = ref("");
const files = ref();

const formData = ref({
  goodsCode: "",
  goodsName: "",
  salePrice: 0,
  supplyPrice: 0,
  discountPrice: 0,
  deliveryFee: 0,
  delivery: "",
  categoty: {
    main: "",
    middle: "",
    small: "",
  },
  file: files.value,
  detail: "",
});

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

watchEffect(
  (files.value,
  () => {
    if (files.value !== "") {
      imgShow.value = true;
      labelShow.value = false;
    }
  })
);

const gooodsUpload = () => {
  console.log(formData.value);
};

const doCancel = () => {
  formData.value = {
    goodsCode: "",
    goodsName: "",
    salePrice: 0,
    supplyPrice: 0,
    discountPrice: 0,
    deliveryFee: 0,
    delivery: "",
    categoty: {
      main: "",
      middle: "",
      small: "",
    },
    file: "",
    detail: "",
  };
};
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
  text-align: right;
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

.btn-container {
  margin: 3% 0;
  text-align: center;
  .v-btn {
    width: 150px;
    margin: 0 10px;
  }
}
</style>
